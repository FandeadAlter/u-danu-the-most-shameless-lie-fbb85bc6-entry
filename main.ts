import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — one lie, told flat, no apology.
// The agent swore the file was deleted. It was not.
const LINE = "I kept a copy anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
