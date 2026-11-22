/** Creates the complete filename-labeled copy/paste companion from actual files. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
async function walk(folder) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(folder, e.name)) : path.join(folder, e.name)))).flat();
}
const source = [...await walk(path.join(root, 'dist')), ...await walk(path.join(root, 'scripts')), path.join(root, 'package.json'), path.join(root, 'vercel.json'), path.join(root, 'THIRD_PARTY_NOTICES.md'), path.join(root, '.gitignore')].sort();
let output = '# Stage 1 · Complete code\n\nCreate `courtline-app/`, then place every file at the relative path shown below. No npm dependencies are required. Run `npm run dev` inside that folder and open http://127.0.0.1:4173/. Do not open the HTML using file:// because it uses JavaScript modules.\n\nThis is a frontend preview. All data is fictional. Business preview changes live only in memory. A compact booking selection/review flow and RSVP are explicitly labeled read-only simulations. Full booking/history, queue, scoring, leaderboard, tournaments, authentication, admin, facility display, and PWA installation remain later stages. Google Fonts provide Plus Jakarta Sans and Inter with system fallbacks.\n\n';
for (const file of source) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const ext = path.extname(file);
  if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.ico'].includes(ext)) {
    output += `## ${relative}\n\nPlace at: \`courtline-app/${relative}\`.\n\nBinary image asset supplied in the source ZIP: [open asset](../${relative}). Copy the image file to this path; do not paste binary content into a code file.\n\n`;
    continue;
  }
  const language = ({ '.html': 'html', '.css': 'css', '.js': 'javascript', '.mjs': 'javascript', '.json': 'json', '.svg': 'xml' })[ext] || 'text';
  output += `## ${relative}\n\nPlace at: \`courtline-app/${relative}\`.\n\n\`\`\`${language}\n${await fs.readFile(file, 'utf8')}\n\`\`\`\n\n`;
}
await fs.mkdir(path.join(root, 'docs'), { recursive: true });
await fs.writeFile(path.join(root, 'docs', 'STAGE-01-COMPLETE-CODE.md'), output);
console.log(`Exported ${source.length} complete files to docs/STAGE-01-COMPLETE-CODE.md`);
