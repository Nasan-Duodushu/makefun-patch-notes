// Real-Life Patch Notes: the funniest one-line patch note for a bug in real
// life or human biology, 160 characters at most.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'v2.0.1: Fixed a bug where the body needed food daily; the workaround (eating) is now permanent. Known issue: aging still progresses in production.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
