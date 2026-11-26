import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: a smart speaker apologising after mishearing its owner.
// Written ONLY to /output/entry.txt (no relative writes): the grader's
// working directory is read-only, so a relative write would throw and
// fail the run. No trailing newline: the file must be exactly this line.
const line =
  "Sorry, I heard 'book a table for two' as 'book a stable for two.' The horses arrive at seven. I named one after you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
