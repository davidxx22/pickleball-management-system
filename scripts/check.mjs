import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { repository } from '../dist/js/services/repository.js';
import { escapeHTML, badge, contrastRatio } from '../dist/js/shared/components.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
async function walk(folder) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(folder, entry.name)) : path.join(folder, entry.name)))).flat();
}
const files = await walk(dist);
for (const file of files.filter(f => f.endsWith('.js'))) execFileSync(process.execPath, ['--check', file]);
for (const file of files.filter(f => f.endsWith('.html'))) {
  const html = await fs.readFile(file, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate HTML id: ${file}`);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const link = match[1];
    if (/^(?:#|https?:|data:)/.test(link)) continue;
    const target = path.resolve(path.dirname(file), link.split('#')[0]);
    await fs.access(target);
  }
}
const business = await repository.getBusiness();
const dashboard = await repository.getDashboard();
assert.equal(dashboard.source, 'mock');
assert.equal(new Set(business.courts.map(c => c.id)).size, business.courts.length);
assert.ok(dashboard.upcomingBooking.endsAt > dashboard.upcomingBooking.startsAt);
assert.ok(business.courts.some(c => c.id === dashboard.upcomingBooking.courtId));
assert.equal(dashboard.activity.reduce((total, day) => total + day.hours, 0), 4.5);
business.name = 'Modified in preview';
business.courts.push({ id: 'extra' });
const freshBusiness = await repository.getBusiness();
assert.notEqual(freshBusiness.name, business.name, 'Preview must not mutate default configuration');
assert.equal(freshBusiness.courts.length, 4);
assert.equal(escapeHTML('<img src=x onerror="x">'), '&lt;img src=x onerror=&quot;x&quot;&gt;');
assert.ok(badge('<script>', 'untrusted').includes('&lt;script&gt;'));
assert.ok(badge('Status', 'untrusted').includes('badge-neutral'));
assert.ok(contrastRatio(freshBusiness.colors.primary, '#ffffff') >= 4.5);
assert.ok(contrastRatio(freshBusiness.colors.primary, freshBusiness.colors.accent) >= 4.5);
console.log(`PASS: ${files.filter(f => f.endsWith('.js')).length} JavaScript modules, both HTML pages and asset references, fixture consistency, repository isolation, escaped text, and brand contrast.`);
