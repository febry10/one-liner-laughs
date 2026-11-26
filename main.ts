import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry = "My smart fridge filed a restraining order — apparently opening it at 3 a.m. counts as stalking, and the toaster agreed to testify.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
chmodSync(outDir, 0o755);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);
console.log(entry);
process.exit(0);
