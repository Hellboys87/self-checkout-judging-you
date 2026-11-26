import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JUDGMENTAL_LINE =
  "Six energy drinks, one toothbrush and apology flowers — separate bag approved. She'll still know they're an apology, and exactly why.";

const MAX_LINE_LENGTH = 200;

const line = JUDGMENTAL_LINE.trim();

if (line.length === 0 || line.length > MAX_LINE_LENGTH) {
  throw new Error("Entry line must be between 1 and 200 characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
