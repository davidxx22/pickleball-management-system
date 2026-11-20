import { iconsaxLinear } from './iconsax-linear.js';

/** All UI symbols use Iconsax Linear. Copyright Iconsax, https://iconsax.io/.
 * Semantic app names keep views independent of library naming.
 * Source and reuse notice: THIRD_PARTY_NOTICES.md.
 */
export const iconNames = Object.freeze({
  grid: 'category', calendar: 'calendar', queue: 'people', score: 'monitor',
  trophy: 'cup', flag: 'flag', ticket: 'ticket', chart: 'chart-2', user: 'user',
  layers: 'layer', settings: 'setting-2', bell: 'notification',
  chevron: 'arrow-down-02', plus: 'add', clock: 'clock', pin: 'location',
  paddle: 'medal', info: 'info-circle', close: 'close-circle',
  more: 'more-square', check: 'tick-circle', sun: 'sun',
});

export function icon(name) {
  const sourceName = iconNames[name] || iconNames.info;
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" data-icon-library="iconsax" data-icon-variant="linear" data-iconsax="${sourceName}">${iconsaxLinear[sourceName]}</svg>`;
}

export function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
}
