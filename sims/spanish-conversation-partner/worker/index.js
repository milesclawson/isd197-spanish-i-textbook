// Cloudflare Worker: keeps the Anthropic API key off the web page and only
// answers for the scenarios defined in scenarios.mjs (so it cannot be used as a
// general-purpose chatbot).
import { SCENARIOS, buildSystemPrompt } from "./scenarios.mjs";

const MODEL = "claude-haiku-5-5";
const ALLOWED_ORIGINS = ["https://milesclawson.github.io", "http://localhost:8000", "http://127.0.0.1:8000"];
const MAX_TURNS = 24;
const MAX_CHARS = 400;
const MAX_TOKENS = { chat: 220, help: 120, translate: 160, feedback: 450 };

const cors = (origin) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Vary": "Origin",
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = { ...cors(origin), "Content-Type": "application/json" };
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (request.method !== "POST" || !ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: "Not allowed" }), { status: 403, headers });
    }

    let body;
    try { body = await request.json(); } catch { return fail("Bad request", 400, headers); }
    const scn = SCENARIOS.find((s) => s.id === body.scenario);
    const mode = ["chat", "help", "translate", "feedback"].includes(body.mode) ? body.mode : "chat";
    if (!scn || !Array.isArray(body.messages)) return fail("Bad request", 400, headers);

    // Keep only well-formed, short, alternating user/assistant turns.
    let msgs = body.messages
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
      .slice(-MAX_TURNS)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
    while (msgs.length && msgs[0].role !== "user") msgs.shift();
    if (!msgs.length) msgs = [{ role: "user", content: "(The student is ready. Begin.)" }];
    if (msgs[msgs.length - 1].role !== "user") msgs.push({ role: "user", content: "(Continue.)" });

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS[mode], system: buildSystemPrompt(scn, mode), messages: msgs }),
    });
    if (!r.ok) return fail("The tutor is unavailable right now.", 502, headers);
    const data = await r.json();
    const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    return new Response(JSON.stringify({ text }), { headers });
  },
};

const fail = (msg, status, headers) => new Response(JSON.stringify({ error: msg }), { status, headers });
