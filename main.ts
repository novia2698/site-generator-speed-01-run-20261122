// main.ts — driver for the site-generator-speed entry.
//
// The harness runs `node /bot/main.ts` in a fresh container with a
// read-only /input holding cases.json and a writable /output. This program
// answers every case with the fast generator in solve.js and writes the
// answers back as one JSON array, in the cases' order.
//
// Speed notes: the generator itself is tuned for CPU time, so the driver
// stays out of the way — no incremental marking while the build runs, and
// the case list is read once and answered in place.

import { setFlagsFromString } from 'node:v8';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { run } from './solve.js';

// Keep the heap collector from interrupting the timed build: the reference
// baseline does the same, and the sandbox measures CPU time, so every
// avoided GC pause is time saved.
setFlagsFromString('--no-incremental-marking');

const INPUT_PATH = process.env.MAKEFUN_INPUT ?? '/input/cases.json';
const OUTPUT_PATH = process.env.MAKEFUN_OUTPUT ?? '/output/answers.json';

function main(): void {
  const raw = readFileSync(INPUT_PATH, 'utf8');
  const cases = JSON.parse(raw) as Array<{ id: string; input: unknown }>;
  const answers: unknown[] = new Array(cases.length);
  for (let i = 0; i < cases.length; i++) {
    answers[i] = run(cases[i].input);
  }
  // The output directory may not exist yet in a fresh container; create
  // it from the output path itself so an overridden path still works.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(answers));
}

main();
