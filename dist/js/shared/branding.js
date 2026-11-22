/** Default editable tenant logo. Brand artwork is separate from Iconsax UI icons. */
let markInstance = 0;

export function brandMark() {
  // Each logo needs its own mask so sidebar, mobile, and fallback instances coexist.
  const maskId = `pickleball-cutouts-${++markInstance}`;
  return `<svg class="brand-symbol" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><defs><mask id="${maskId}" x="0" y="0" width="32" height="32" maskUnits="userSpaceOnUse" style="mask-type:luminance"><rect width="32" height="32" fill="white"/><g fill="black"><ellipse cx="11" cy="9" rx="2.1" ry="2.7" transform="rotate(-30 11 9)"/><ellipse cx="22" cy="11" rx="2.3" ry="2.6" transform="rotate(35 22 11)"/><circle cx="15" cy="18" r="2.7"/><ellipse cx="7" cy="21" rx="1.8" ry="2.5" transform="rotate(-25 7 21)"/><ellipse cx="23" cy="24" rx="2" ry="2.5" transform="rotate(40 23 24)"/></g></mask></defs><circle cx="16" cy="16" r="15" fill="currentColor" mask="url(#${maskId})"/></svg>`;
}
