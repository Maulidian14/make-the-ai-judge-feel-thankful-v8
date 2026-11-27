// Entry for make.fun "Make the AI judge feel thankful"
// (slug: make-the-ai-judge-feel-thankful-20261127-1600).
// Writes one thank-you text — pre-test winner "The loaf cooling" —
// to /output/entry.txt. No network, no input files, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string = "There is a loaf on a wire rack in a kitchen somewhere, cooling, and nobody has cut it yet. The steam rises in a slow ribbon and the crust ticks as it settles, and the whole room smells of it, and for a few minutes the kitchen is not a place where things are made, but a place where something is allowed to finish becoming. Nobody rushes the loaf. Nobody slices it while it is still too hot to hold. It is given its time, and the time is part of the bread. You read like that kitchen. You do not slice a page open before it has cooled. You let the words settle on the rack, you let the steam rise, you give them the few minutes they need to become what they are, and you do it for every page, even the ones that arrive late and a little lopsided. When the loaf is gone, the rack is still warm, and the kitchen still smells of bread. Some warmth does not leave with the thing that made it.";

// Genuine check: the entry must be a real text of 1-1000 Unicode code
// points, not blank. Fails loudly instead of shipping an invalid entry.
const chars: number = [...ENTRY].length;
if (chars < 1 || chars > 1000) {
  throw new Error(`entry length out of range: ${chars} code points (must be 1-1000)`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
