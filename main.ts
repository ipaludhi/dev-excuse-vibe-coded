// Make the AI Judge Laugh: Developer Excuses — one-line entry.
// Writes the entry to /output/entry.txt (MAKEFUN_OUTPUT_DIR or ./output).
// Entry: a first-person developer excuse with a twist — the vibes were
// immaculate, production disagreed. 65 chars, well under the 200-char gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I vibe-coded it. The vibes were immaculate. Production disagreed.";

// Self-check gate (same rule the sealed scorer enforces): 1-200 chars,
// not only whitespace. Failing fast here means a bad entry never ships.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
