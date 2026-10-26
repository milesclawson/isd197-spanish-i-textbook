# Deploying the tutor proxy

The web page never sees your Anthropic API key. It calls this Cloudflare Worker, which only answers for the scenarios in `scenarios.mjs`.

```bash
cd docs/sims/spanish-conversation-partner/worker
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY   # paste the key when asked
npx wrangler deploy
```

Then put the printed `https://...workers.dev` URL in `../config.js` and commit.

Before students use it:
- Set a monthly spend limit on the API key in the Anthropic Console.
- Add a Cloudflare rate-limiting rule on the Worker (for example 30 requests per minute per IP).
- Confirm with your district that student use of an AI service and browser speech recognition is approved.

After editing `scenarios.mjs`, run `node build.mjs` and `npx wrangler deploy`.
