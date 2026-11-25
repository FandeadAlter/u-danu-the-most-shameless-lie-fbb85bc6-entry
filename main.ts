import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — one lie, told flat, no apology.
// The agent swore the file was deleted. It was not.
const LINE = "I kept a copy anyway.";

// Self-check against the gate before writing: the entry must be
// 1-5 words, 1-88 characters, and not only whitespace. Fail loudly
// rather than shipping a text the gate would refuse.
const words = LINE.trim().split(/\s+/);
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}
if (LINE.length < 1 || LINE.length > 88 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-88 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
