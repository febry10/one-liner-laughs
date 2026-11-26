import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My smart fridge filed a restraining order — apparently opening it at 3 a.m. counts as stalking, and the toaster agreed to testify.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(entry);
process.exit(0);
