import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { repository } from '../dist/js/services/repository.js';
import { escapeHTML, badge, contrastRatio } from '../dist/js/shared/components.js';
import { generatePreviewSlots, previewDateRange } from '../dist/js/services/booking-preview.js';

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
assert.equal(dashboard.activity.reduce((total, day) => total + day.hours, 0), 4);
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
const input = { courtId: 'court-3', day: '2026-11-20', durationMinutes: 120 };
const slots = await repository.getBookingSlots(input);
assert.equal(slots.find(s => s.start === '17:00').available, false, 'Two-hour slots must not overlap the 18:00 sample session');
assert.equal(slots.find(s => s.start === '16:00').available, true, 'A session ending at a busy period start is allowed');
assert.equal(slots.find(s => s.start === '19:00').available, true);
assert.equal(slots[0].start, '15:00', 'No slots before the demo snapshot time');
assert.equal(slots.at(-1).end, '22:00', 'Sessions cannot extend past closing');
assert.equal(slots[0].total, 1000);
assert.deepEqual(await repository.getBookingSlots({ ...input, day: '2026-11-19' }), []);
assert.deepEqual(await repository.getBookingSlots({ ...input, day: '2026-12-05' }), []);
assert.deepEqual(await repository.getBookingSlots({ ...input, day: '2026-11-31' }), []);
assert.deepEqual(await repository.getBookingSlots({ ...input, durationMinutes: 90 }), []);
assert.deepEqual(await repository.getBookingSlots({ ...input, courtId: 'missing' }), []);
const closedBusiness = structuredClone(freshBusiness);
closedBusiness.operatingHours.days = [1];
assert.deepEqual(generatePreviewSlots(closedBusiness, dashboard, input), [], 'Closed weekdays offer no slots');
assert.deepEqual(previewDateRange(freshBusiness, dashboard), { min: '2026-11-20', max: '2026-12-04' });
assert.equal((await repository.getDashboard()).upcomingBooking.id, dashboard.upcomingBooking.id, 'Slot previews cannot mutate reservations');
console.log(`PASS: ${files.filter(f => f.endsWith('.js')).length} JavaScript modules, both HTML pages and asset references, fixture consistency, repository isolation, escaped text, and brand contrast.`);
console.log('PASS: mock slot conflicts, boundaries, duration rules, opening days, price and date range.');
