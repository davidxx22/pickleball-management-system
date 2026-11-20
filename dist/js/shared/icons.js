/** Local SVG symbols. Decorative icons always accompany visible text or labels. */
const paths = {
  brand: '<g transform="rotate(-25 12 12)"><rect x="6" y="3" width="12" height="18" rx="1"/><path d="M6 9h12M6 15h12M12 3v6m0 6v6M4 12h16"/></g>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m4 0h2m-8 3h2"/>',
  queue: '<circle cx="8" cy="7" r="3"/><path d="M2 21v-3a6 6 0 0 1 12 0v3m2-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 4 5v2"/>',
  score: '<rect x="2" y="5" width="20" height="15" rx="2"/><path d="M12 5v15M7 2v6m10-6v6M6 12h2v4H6m10-4h2v4h-2"/>',
  trophy: '<path d="M7 3h10v6a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4m-4 2v7m-5 0h10"/>',
  flag: '<path d="M5 22V3m0 0c5-5 9 5 15 0v11c-6 5-10-5-15 0"/>',
  ticket: '<path d="M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4V5Zm12 0v3m0 3v2m0 3v3"/>',
  chart: '<path d="M4 3v17h17M8 15l4-4 4 2 5-7"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
  layers: '<path d="m12 2 10 6-10 6L2 8l10-6Zm-10 11 10 6 10-6M2 18l10 6 10-6"/>',
  settings: '<path d="m10 2-.6 3-2 .9-2.7-.9-2 3.5 2.2 2v3L2.7 16l2 3.5 2.7-.9 2 .9.6 2.5h4l.6-2.5 2-.9 2.7.9 2-3.5-2.2-2.5v-3l2.2-2-2-3.5-2.7.9-2-.9L14 2h-4Z"/><circle cx="12" cy="12" r="3"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  chevron: '<path d="m8 10 4 4 4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  pin: '<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  paddle: '<path d="m5 16-3 4 2 2 4-4m-3-2c-4-5-2-10 1-12s8-2 11 1 3 8 0 11-7 4-12 0Z"/><path d="m11 6 4 4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
export function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.info}</svg>`;
}
export function hydrateIcons(root = document) { root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
