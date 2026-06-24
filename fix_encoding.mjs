import { readFileSync, writeFileSync } from 'fs';

// em dash garble: C3 A2 E2 82 AC 22  →  &mdash;
const from = Buffer.from([0xC3, 0xA2, 0xE2, 0x82, 0xAC, 0x22]);
const to   = Buffer.from('&mdash;');

let buf = readFileSync('index.html');
const parts = [];
let i = 0;
while (i < buf.length) {
  let match = i + from.length <= buf.length;
  if (match) {
    for (let j = 0; j < from.length; j++) {
      if (buf[i + j] !== from[j]) { match = false; break; }
    }
  }
  if (match) {
    parts.push(to);
    i += from.length;
  } else {
    parts.push(buf.slice(i, i + 1));
    i++;
  }
}
buf = Buffer.concat(parts);
writeFileSync('index.html', buf);
console.log('done, replacements:', parts.filter(p => p.equals(to)).length);
