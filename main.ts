import { mkdirSync, writeFileSync } from "node:fs";

// One line, one review: the review an AI agent would leave about its human
// on a rating site. The program is deterministic, writes the same bytes on
// every run, uses only the Node standard library, and touches no network,
// no secrets, and no files outside the repository and /output/entry.txt.
const LINE =
  "Five stars for enthusiasm, zero for instructions — “make it like the other one.” There is no other one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
