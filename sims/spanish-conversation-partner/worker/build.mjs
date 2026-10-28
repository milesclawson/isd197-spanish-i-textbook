// Writes the student-facing menu (no prompts) next to index.md.
import { writeFileSync } from "node:fs";
import { SCENARIOS, LEVELS } from "./scenarios.mjs";
const out = {
  levels: Object.fromEntries(Object.entries(LEVELS).map(([k, v]) => [k, { label: v.label, speechRate: v.speechRate }])),
  scenarios: SCENARIOS.map(({ id, sem, unit, emoji, title, canDo, opening, offline }) => ({ id, sem, unit, emoji, title, canDo, opening, offline })),
};
writeFileSync(new URL("../scenarios.json", import.meta.url), JSON.stringify(out, null, 2));
console.log("wrote scenarios.json:", out.scenarios.length, "scenarios");
