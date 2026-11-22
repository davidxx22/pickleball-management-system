# Stage 1 · Complete code

Create `courtline-app/`, then place every file at the relative path shown below. No npm dependencies are required. Run `npm run dev` inside that folder and open http://127.0.0.1:4173/. Do not open the HTML using file:// because it uses JavaScript modules.

This is a frontend preview. All data is fictional. Business preview changes live only in memory. A compact booking selection/review flow and RSVP are explicitly labeled read-only simulations. Full booking/history, queue, scoring, leaderboard, tournaments, authentication, admin, facility display, and PWA installation remain later stages. Google Fonts provide Plus Jakarta Sans and Inter with system fallbacks.

## .gitignore

Place at: `courtline-app/.gitignore`.

```text
node_modules/
*.zip
*.tar.gz
.preview/
artifacts/
.vercel/

```

## THIRD_PARTY_NOTICES.md

Place at: `courtline-app/THIRD_PARTY_NOTICES.md`.

```text
# Third-party notices

## Iconsax Linear

Icon designs are copyright Iconsax. Website: https://iconsax.io/.

This application integrates selected free **Linear** SVGs from the official `iconsax` npm package, version **0.1.1**, linked from the Iconsax website:

- Package: https://www.npmjs.com/package/iconsax
- Source archive: https://registry.npmjs.org/iconsax/-/iconsax-0.1.1.tgz
- Iconsax usage terms: https://docs.iconsax.io/license-and-terms/license

The SVGs are functional parts of this application, not a separately offered icon library or asset pack. Keep this copyright and source notice with redistributed application source. Iconsax retains authorship of its icon designs.

Selected paths are stored in `dist/js/shared/iconsax-linear.js`, with semantic mappings in `icons.js`. Original Linear geometry and stroke attributes are retained. Colors are normalized to `currentColor`, and redundant viewport clipping wrappers are removed to avoid duplicate SVG IDs. The select-field chevron is the same Iconsax Linear asset embedded in application CSS.

`scripts/sync-icons.mjs` regenerates the integration from the pinned archive, verifying its SHA-512 integrity before reading it. No Iconsax package code executes in the application and no CDN is required.

Tenant logos, favicon, and court illustrations are separate application branding/artwork.

```

## dist/assets/hero-blue-court.jpg

Place at: `courtline-app/dist/assets/hero-blue-court.jpg`.

Binary image asset supplied in the source ZIP: [open asset](../dist/assets/hero-blue-court.jpg). Copy the image file to this path; do not paste binary content into a code file.

## dist/assets/hero-padel-court.png

Place at: `courtline-app/dist/assets/hero-padel-court.png`.

Binary image asset supplied in the source ZIP: [open asset](../dist/assets/hero-padel-court.png). Copy the image file to this path; do not paste binary content into a code file.

## dist/assets/mark.svg

Place at: `courtline-app/dist/assets/mark.svg`.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#163663"/><circle cx="32" cy="32" r="23" fill="#d9f93d"/><g fill="#163663"><ellipse cx="24" cy="20" rx="3" ry="4" transform="rotate(-30 24 20)"/><ellipse cx="42" cy="23" rx="3.5" ry="4" transform="rotate(35 42 23)"/><circle cx="31" cy="35" r="4"/><ellipse cx="18" cy="40" rx="2.5" ry="4" transform="rotate(-25 18 40)"/><ellipse cx="42" cy="45" rx="3" ry="4" transform="rotate(40 42 45)"/></g></svg>

```

## dist/css/components.css

Place at: `courtline-app/dist/css/components.css`.

```css
.icon { width: 1.25rem; height: 1.25rem; flex: 0 0 auto; }
[data-icon] { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.button { display: inline-flex; justify-content: center; align-items: center; gap: .6rem; min-height: 2.875rem; padding: .7rem 1.15rem; border: 1px solid transparent; border-radius: 3rem; text-decoration: none; font-size: .875rem; font-weight: 500; transition: background var(--transition), transform var(--transition), box-shadow var(--transition); }
.button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 3px 10px #173b3110; }
.button:active:not(:disabled) { transform: translateY(0); }
.button-primary { color: var(--accent-ink); background: var(--accent); }
.button-primary:hover { background: var(--accent); filter: brightness(1.04); }
.button-lime { color: var(--accent-ink); background: var(--accent); }
.button-lime:hover { filter: brightness(1.04); }
.button-outline { border-color: var(--line); color: var(--ink); background: transparent; }
.button-outline:hover { background: var(--canvas); }
.button-full { width: 100%; }
.text-button { border: 0; background: transparent; padding: .5rem 0; color: var(--accent); font-size: .875rem; font-weight: 500; text-decoration: underline; text-underline-offset: .25rem; text-decoration-color: transparent; transition: text-decoration-color var(--transition); }
.text-button:hover { text-decoration-color: currentColor; }
.icon-button { display: inline-flex; align-items: center; justify-content: center; width: 2.75rem; height: 2.75rem; border: 1px solid var(--line); border-radius: 50%; background: var(--surface); }
.icon-button:hover { background: var(--brand-soft); }
.icon-soft { color: var(--muted); }
.icon-soft .icon { width: 1.125rem; height: 1.125rem; }
.badge { display: inline-flex; align-items: center; gap: .375rem; padding: .3rem .6rem; border-radius: 3rem; font-size: .8125rem; font-weight: 500; white-space: nowrap; line-height: 1.4; }
.badge-success { color: var(--success); background: var(--success-bg); }
.badge-warning { color: var(--warning); background: var(--warning-bg); }
.badge-neutral { color: var(--muted); background: #ffffff0b; border: 1px solid var(--line); }
.status-dot { display: inline-block; width: .375rem; height: .375rem; flex: 0 0 auto; border-radius: 50%; background: currentColor; }
.panel { padding: 1.4rem; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.card-heading { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.card-heading h2 { font-size: 1rem; letter-spacing: -.02em; }
.card-heading p { margin-top: .4rem; color: var(--muted); font-size: .875rem; }
.segmented-control { display: inline-flex; padding: .25rem; gap: .125rem; background: #0a254540; border: 1px solid var(--line); border-radius: 3rem; }
.segmented-control button { min-height: 2.375rem; border: 0; padding: .45rem .9rem; border-radius: 3rem; background: transparent; color: var(--muted); font-size: .875rem; font-weight: 500; white-space: nowrap; }
.segmented-control button.selected { background: var(--accent); color: var(--accent-ink); box-shadow: 0 1px 5px #173b310d; }
.segmented-control button:hover:not(.selected) { color: var(--ink); }
.avatar { display: inline-flex; justify-content: center; align-items: center; width: 2.375rem; height: 2.375rem; border-radius: 50%; color: var(--accent-ink); background: var(--accent); font-size: .8rem; font-weight: 650; border: 2px solid white; }
.avatar-stack { display: inline-flex; padding-left: 0; }
.avatar-stack b { display: inline-flex; align-items: center; justify-content: center; width: 1.8rem; height: 1.8rem; background: #c9d6c0; border: 2px solid #163663; color: #244336; border-radius: 50%; font-size: .75rem; margin-left: -.45rem; }
.avatar-stack b:first-child { margin-left: 0; background: #ead4b8; }
.avatar-stack b:last-child { background: #b7c6d9; }
.subtle { color: var(--muted); }
.eyebrow { font-size: .75rem; font-weight: 650; letter-spacing: .14em; color: var(--muted); }
.notice { padding: 1rem; border-radius: var(--radius-sm); background: var(--brand-soft); color: var(--muted); border: 1px solid var(--line); font-size: .875rem; }
.error-notice { background: var(--danger-bg); color: var(--danger); margin-bottom: 1rem; }
.notice p + p { margin-top: .5rem; }
.noscript-notice { position: fixed; bottom: 1rem; left: 1rem; right: 1rem; z-index: 90; }
.field { display: grid; gap: .45rem; margin-bottom: 1.1rem; }
.field label, .field-label { font-size: .875rem; font-weight: 500; }
.field input, .field select, .field textarea { width: 100%; border: 1px solid var(--line); background: var(--surface-deep); color: var(--ink); border-radius: var(--radius-sm); padding: .7rem .85rem; min-height: 2.875rem; }
.field input[type="color"] { padding: .3rem; }
.field select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M19.9201%208.9502L13.4001%2015.4702C12.6301%2016.2402%2011.3701%2016.2402%2010.6001%2015.4702L4.08008%208.9502%22%20stroke%3D%22%23b7c9df%22%20stroke-width%3D%221.5%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E"); background-repeat: no-repeat; background-position: right .7rem center; padding-right: 2.5rem; }
.field textarea { resize: vertical; min-height: 5rem; }
.field small { color: var(--muted); font-size: .8125rem; }
.field [aria-invalid="true"] { border-color: var(--danger); }
.field .field-error { color: var(--danger); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1.5rem; }
.dialog { width: min(34rem, calc(100% - 2rem)); max-height: calc(100dvh - 3rem); padding: 0; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: var(--radius-lg); box-shadow: 0 24px 100px #09221e44; }
.dialog::backdrop { background: #050f1bcc; backdrop-filter: blur(3px); }
.dialog[open] { animation: dialog-in 160ms ease-out; }
.dialog-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--line); }
.dialog-header h2 { font-size: 1.25rem; }
.dialog-header .icon-button { width: 2.25rem; height: 2.25rem; border: 0; }
.dialog-content { padding: 1.5rem; }
.dialog-content > p { color: var(--muted); font-size: .9375rem; margin-bottom: 1rem; }
.dialog-content > .feature-description { margin-top: 1rem; }
.dialog-content > .notice { margin-bottom: 1.25rem; }
.detail-list { margin: 0 0 1.25rem; }
.detail-list div { display: flex; justify-content: space-between; gap: 1rem; padding: .8rem 0; border-bottom: 1px solid var(--line); font-size: .875rem; }
.detail-list dt { color: var(--muted); }
.detail-list dd { margin: 0; text-align: right; font-weight: 500; }
.dialog-feature-icon { width: 3.5rem; height: 3.5rem; display: grid; place-items: center; margin-bottom: 1rem; border-radius: .875rem; color: var(--accent); background: var(--brand-soft); }
.dialog-feature-icon .icon { width: 1.75rem; height: 1.75rem; }
.feature-list { padding-left: 1.25rem; color: var(--muted); font-size: .9375rem; margin-bottom: 1.5rem; }
.feature-list li + li { margin-top: .5rem; }
.notification-list { padding: 0; margin: 0; list-style: none; }
.notification-list li { display: flex; align-items: flex-start; gap: .8rem; padding: 1rem 0; border-bottom: 1px solid var(--line); }
.notification-list li:last-child { border-bottom: 0; }
.notification-list strong { font-size: .9375rem; }
.notification-list p { color: var(--muted); font-size: .875rem; margin-top: .25rem; }
.toast { position: fixed; bottom: 6rem; left: 50%; transform: translateX(-50%); z-index: 100; max-width: calc(100% - 2rem); width: max-content; background: var(--brand); color: white; border: 1px solid #ffffff40; border-radius: var(--radius-sm); padding: .8rem 1.2rem; box-shadow: 0 10px 30px #12372b30; font-size: .875rem; }
.empty-state { grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--muted); background: var(--surface); border: 1px dashed #cbd5ce; border-radius: var(--radius); }
@keyframes dialog-in { from { opacity: 0; transform: translateY(.6rem); } to { opacity: 1; transform: translateY(0); } }
@media (min-width: 900px) { .toast { bottom: 2rem; } }

.button-glass { color: white; background: #ffffff0d; border-color: #ffffff70; backdrop-filter: blur(12px); }
.button-glass:hover { background: #ffffff20; }
.field select { background-size: 1rem; }
.dialog .button-primary { background: var(--accent); color: var(--accent-ink); }
.dialog-content > .notice strong { color: white; }
.dialog-content > .notice { line-height: 1.65; }

```

## dist/css/dashboard.css

Place at: `courtline-app/dist/css/dashboard.css`.

```css
/* One artwork-led hero, followed by one flat dashboard surface. */
html, body { overflow-x: clip; }
body { padding: 0; background: #fffff7; }
.app-shell { width: 100%; margin: 0; }
main { padding: 0; }
.hero-card { overflow: hidden; border-radius: 0; background: var(--brand); }
.play-hero { position: relative; isolation: isolate; overflow: hidden; container-type: inline-size; min-height: 32rem; background: var(--brand-hover); }
.hero-photo { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover; object-position: center; max-width: none; }
.play-hero::after { content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none; background: linear-gradient(180deg, #08214308, #08214315 45%, transparent); }
.topbar { position: absolute; inset: 0 0 auto; display: flex; align-items: center; justify-content: space-between; gap: .75rem; padding: 1.15rem; z-index: 2; }
.brand { display: inline-flex; align-items: center; gap: .45rem; color: white; text-decoration: none; font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; letter-spacing: -.02em; white-space: nowrap; }
.brand-period { color: white; margin-left: -.45rem; }
.brand-mark { color: var(--accent); }
.brand-symbol, .brand-mark img { width: 1.6rem; height: 1.6rem; object-fit: contain; }
.desktop-nav { display: none; }
.topbar-actions { display: flex; align-items: center; gap: .65rem; }
.header-book { min-height: 2.5rem; padding: .55rem .9rem; font-size: .8125rem; }
.mobile-menu { display: none; }
.hero-copy { position: relative; width: 100%; padding: 9rem .9rem 4rem; text-align: center; }
.hero-status { display: inline-flex; align-items: center; justify-content: center; gap: .35rem; background: #fff; color: #0f172a; padding: .4rem .7rem; border-radius: 3rem; font-size: .75rem; font-weight: 500; line-height: 1.3; box-shadow: 0 2px 10px #081f3b12; }
.hero-status .status-dot { color: #609e51; width: .4rem; height: .4rem; }
.hero-status .no-courts { color: #ad7727; }
.play-hero h1 { font-size: clamp(2rem, 8.5cqw, 3rem); line-height: 1.06; font-weight: 700; letter-spacing: -.02em; margin-top: 1.25rem; }
.play-hero h1 em { color: var(--accent); font-style: normal; }
.play-hero p { color: white; font-size: .9375rem; line-height: 1.5; max-width: 34rem; margin: 1rem auto 0; }
.desktop-break { display: none; }
.hero-buttons { display: flex; justify-content: center; gap: .6rem; margin-top: 1.65rem; }
.hero-buttons .button { padding: .6rem .9rem; min-height: 2.65rem; font-size: .8125rem; white-space: nowrap; }
.button-glass { background: transparent; border-color: #ffffffa8; backdrop-filter: none; }
.hero-bottom { background: #19375b; }
.stats-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); max-width: 960px; margin: 0 auto; padding: .5rem .75rem; }
.stat-card { padding: .9rem .35rem; text-align: center; }
.stat-value { display: flex; align-items: baseline; justify-content: center; gap: .3rem; color: var(--accent); font: 600 1.65rem/1.2 var(--font-display); letter-spacing: -.02em; }
.stat-value strong { font: inherit; }
.stat-value span { font: 400 .875rem/1.2 var(--font); letter-spacing: 0; }
.stat-top { color: white; font: 400 .75rem/1.5 var(--font); letter-spacing: 0; margin-top: .4rem; }
.dashboard-surface { --ink: #0f172a; --muted: #526075; --line: #e2e8f0; --surface: #fffff7; color-scheme: light; background: #fffff7; color: var(--ink); max-width: 1200px; margin: 1.5rem auto 0; padding: 1.5rem; }
.dashboard-surface h2 { color: #0f172a; font-weight: 700; }
.section-kicker { font-size: .6875rem; font-weight: 500; letter-spacing: .12em; color: var(--muted); margin-bottom: .55rem; }
.section-heading { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.75rem; }
.section-heading > div:first-child { flex-basis: 100%; }
.section-title-line { display: flex; align-items: center; gap: .75rem; }
.section-title-line h2 { font-size: 1.6rem; }
.section-heading p { color: var(--muted); font-size: .875rem; margin-top: .6rem; }
.dashboard-surface .badge-neutral { color: #0f172a; border: 1px solid #0f172a30; background: transparent; }
.dashboard-surface .segmented-control { border: 1px solid #0f172a; background: transparent; border-radius: 3rem; padding: .2rem; gap: .15rem; }
.dashboard-surface .segmented-control button { font-weight: 500; color: #0f172a; padding: .45rem .85rem; min-height: 2.35rem; }
.dashboard-surface .segmented-control button.selected { background: var(--accent); color: #0f172a; box-shadow: none; }
.dashboard-surface .segmented-control button:hover { color: #0f172a; background: #e9edda; }
.court-grid { display: grid; gap: 1rem; }
.court-card { min-width: 0; border: 1px solid var(--line); background: transparent; border-radius: var(--radius); overflow: hidden; transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition); }
.court-card:hover { transform: translateY(-4px); border-color: #d9f93666; box-shadow: 0 12px 24px #091b3026; }
.court-visual { position: relative; height: 10rem; display: grid; place-items: center; background: linear-gradient(135deg, #244e81, #163663); border-bottom: 1px solid var(--line); }
.court-visual > .badge { position: absolute; right: .8rem; top: .8rem; background: #0e274ce8; border: 1px solid var(--line); font-size: .75rem; }
.court-diagram { width: 9.5rem; height: 5.4rem; padding: .55rem; background: #214e85; border-radius: .3rem; transform: rotate(-12deg) skewX(7deg); box-shadow: 0 6px 0 #0c2340, 0 12px 24px #071a3540; }
.court-lines { position: relative; height: 100%; border: 1px solid #d5e6fbd4; background: #1d426f; }
.court-lines::before { content: ''; position: absolute; top: -10%; bottom: -10%; left: 50%; border-left: 2px solid #d9f93d; box-shadow: 2px 2px 0 #091c37; z-index: 1; }
.court-lines::after { content: ''; position: absolute; left: 35%; right: 35%; top: 0; bottom: 0; border-inline: 1px solid #e3effbcc; background: #306498; }
.court-lines i { position: absolute; left: 0; right: 0; top: 50%; border-top: 1px solid #e3effbcc; }
.court-visual.in-use .court-diagram { background: #284971; }
.court-details { padding: 1.1rem; }
.court-title-row { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }
.court-type { color: var(--muted); font-size: .8125rem; }
.court-details > p { color: var(--muted); font-size: .8125rem; margin-top: .5rem; }
.court-formats { margin-top: .7rem; font-size: .75rem; color: var(--muted); }
.court-card-footer { display: flex; justify-content: space-between; gap: .5rem; align-items: center; margin-top: 1rem; padding-top: .85rem; border-top: 1px solid var(--line); }
.court-price { font-weight: 500; }
.court-price small { color: var(--muted); font-size: .75rem; font-weight: 400; }
.court-card-footer .text-button { color: #0f172a; background: var(--accent); font-size: .8125rem; padding: .5rem .85rem; border: 1px solid #0f172a55; border-radius: 2rem; }
.court-title-button { padding: 0; border: 0; background: transparent; color: inherit; font: inherit; letter-spacing: inherit; text-align: left; }
.court-title-button:hover { text-decoration: underline; text-underline-offset: .25rem; }
.section-footnote { display: flex; gap: .5rem; align-items: center; margin-top: 1rem; color: var(--muted); font-size: .75rem; }
.section-footnote .icon { width: 1rem; height: 1rem; }
.lower-grid { display: grid; margin-top: 2rem; border-top: 1px solid var(--line); }
.activity-panel, .community-panel { min-width: 0; padding-block: 2rem; }
.activity-panel { border-bottom: 1px solid var(--line); }
.card-heading { align-items: flex-start; }
.card-heading h2 { font-size: 1.3rem; }
.card-heading p { color: var(--muted); margin-top: .5rem; font-size: .875rem; }
.activity-body { display: flex; align-items: flex-end; flex-wrap: wrap; gap: 1.75rem; margin-top: 1.75rem; }
.activity-summary { flex: 1; }
.activity-summary strong { color: #0f172a; font: 700 2.75rem/1.2 var(--font-display); letter-spacing: -.02em; }
.activity-summary strong span { font: 400 .875rem var(--font); margin-left: .35rem; }
.activity-summary p { font-size: .8125rem; color: var(--muted); margin-top: .35rem; }
.positive-chip { display: table; padding: .25rem .5rem; color: #0f172a; background: var(--accent); border-radius: 2rem; font-size: .6875rem; margin-top: .85rem; }
.dashboard-surface .text-button { color: #0f172a; font-size: .8125rem; }
.activity-chart { display: flex; gap: .6rem; flex: 1.3; min-width: 11rem; height: 9rem; }
.chart-column { display: flex; flex-direction: column; align-items: center; gap: .65rem; flex: 1; min-width: 0; }
.chart-track { display: flex; align-items: flex-end; width: 100%; height: 7.2rem; border-bottom: 1px solid var(--line); background: repeating-linear-gradient(to top, transparent 0, transparent calc(33.3% - 1px), #e2e8f0 calc(33.3% - 1px), #e2e8f0 33.3%); }
.chart-bar { width: 75%; max-width: 1.65rem; height: var(--bar-height); margin: 0 auto; border-radius: .3rem .3rem 0 0; background: var(--accent); border: 1px solid #0f172a33; }
.chart-column span { color: var(--muted); font-size: .75rem; }
.event-content { display: flex; align-items: flex-start; gap: 1rem; margin-top: 1.75rem; }
.event-date { display: grid; text-align: center; min-width: 3.75rem; padding: .7rem; color: #0f172a; background: var(--accent); border: 1px solid #0f172a; border-radius: .85rem; }
.event-date strong { font: 700 1.8rem/1.2 var(--font-display); }
.event-date span { font-size: .75rem; }
.event-category { font-size: .6875rem; color: var(--muted); letter-spacing: .1em; text-transform: uppercase; }
.event-content h3 { font-weight: 700; margin-top: .35rem; font-size: 1.05rem; }
.event-content p { font-size: .875rem; color: var(--muted); margin-top: .4rem; }
.event-meta { display: flex; align-items: center; gap: .4rem; margin-top: .85rem; font-size: .75rem; color: var(--muted); }
.event-meta .icon { width: 1rem; height: 1rem; }
.event-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--line); margin-top: 1.25rem; padding-top: 1rem; }
.event-footer > span { color: var(--muted); font-size: .75rem; }
.event-footer .status-dot { margin-right: .3rem; }
.event-footer .button { border: 1px solid #0f172a; min-height: 2.5rem; padding: .5rem 1.2rem; color: #0f172a; }
.page-footer { display: flex; align-items: center; flex-wrap: wrap; gap: .75rem 1rem; padding-top: 1.5rem; margin-top: .5rem; border-top: 1px solid var(--line); color: var(--muted); font-size: .75rem; }
.footer-brand { font-size: 1.15rem; color: #0f172a; }
.footer-brand .brand-period { color: #0f172a; }
.demo-disclosure { width: 100%; }
.bottom-nav { position: fixed; inset: auto 0 0; z-index: 20; display: flex; justify-content: space-around; background: #0e2542f2; backdrop-filter: blur(20px); border-top: 1px solid #ffffff24; padding: .5rem .25rem max(.5rem, env(safe-area-inset-bottom)); }
.bottom-nav > * { display: flex; flex-direction: column; align-items: center; gap: .35rem; min-height: 3rem; padding: .3rem; min-width: 0; background: transparent; border: 0; text-decoration: none; font-size: .625rem; color: #b7c9df; }
.bottom-nav [aria-current] { color: var(--accent); }
.field { min-width: 0; }
.field input, .field select { min-width: 0; }
.more-menu { display: grid; gap: .65rem; }
.more-menu .button { justify-content: flex-start; }
.booking-slots { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: .5rem; margin: 1rem 0; }
.booking-slots button { min-height: 2.8rem; padding: .5rem .3rem; border: 1px solid var(--line); border-radius: .65rem; background: #ffffff05; font-size: .8125rem; }
.booking-slots button[aria-pressed="true"] { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
.booking-slots button:hover:not(:disabled) { border-color: var(--accent); }
.booking-summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid var(--line); }
.booking-summary strong { color: var(--accent); font: 600 1.4rem var(--font-display); }
.booking-summary small { display: block; color: var(--muted); }

@media (min-width: 600px) {
  .play-hero { min-height: 0; aspect-ratio: 830 / 485; }
  /* Crop the supplied square artwork to its court, without another blue frame.
     These percentages correspond to x=97..927 and y=234..719 in the 1024px source. */
  .hero-photo { left: -11.69%; top: -48.25%; width: 123.37%; height: 211.13%; object-fit: fill; }
  .topbar { padding: 1.5cqw 6.8cqw; }
  .brand { font-size: clamp(1.15rem, 2.2cqw, 1.65rem); }
  .brand-symbol, .brand-mark img { width: 2.6cqw; height: 2.6cqw; min-width: 1.4rem; min-height: 1.4rem; }
  .hero-copy { position: absolute; top: 20.4%; left: 0; padding: 0 1.5rem; transform: translateY(-.75rem); }
  .hero-status { padding: .3rem .6rem; font-size: clamp(.6875rem, 1cqw, .8125rem); }
  .play-hero h1 { font-size: clamp(2.25rem, 6.2cqw, 4.65rem); margin-top: 1.8cqw; }
  .play-hero p { margin-top: 1.6cqw; font-size: clamp(.875rem, 1.6cqw, 1.125rem); line-height: 1.35; }
  .desktop-break { display: block; }
  .hero-buttons { margin-top: 3cqw; gap: 1cqw; }
  .hero-buttons .button { font-size: clamp(.75rem, 1.15cqw, .875rem); padding: .65rem 1.15rem; }
  .stats-grid { grid-template-columns: repeat(4,minmax(0,1fr)); padding: 1rem 2.5rem; }
  .stat-card { padding: .5rem; }
  .stat-value { font-size: clamp(1.6rem, 2.8vw, 2rem); }
  .stat-top { font-size: .8125rem; }
  .dashboard-surface { padding: 2rem; }
  .section-heading > div:first-child { flex-grow: 1; }
  .demo-disclosure { width: auto; margin-left: auto; }
}
@media (min-width: 900px) {
  .topbar { display: grid; grid-template-columns: 1fr auto 1fr; }
  .topbar-actions { justify-self: end; }
  .desktop-nav { display: flex; align-items: center; justify-content: center; gap: 1.5cqw; }
  .desktop-nav > * { position: relative; padding: .5rem 0; border: 0; background: transparent; color: white; font-size: clamp(.75rem, 1.1cqw, .875rem); font-weight: 500; text-decoration: none; white-space: nowrap; }
  .desktop-nav > *:hover { color: var(--accent); }
  .desktop-nav .active::after { content: ''; position: absolute; bottom: 0; left: calc(50% - .125rem); width: .25rem; height: .25rem; border-radius: 50%; background: var(--accent); }
  .header-book { font-size: .8125rem; padding: .6rem 1.1rem; }
  .bottom-nav { display: none; }
  .section-heading { gap: 1rem; }
  .section-heading > div:first-child { flex-basis: auto; }
  .lower-grid { grid-template-columns: 1.1fr 1fr; }
  .activity-panel { border-bottom: 0; padding-right: 2rem; }
  .community-panel { border-left: 1px solid var(--line); padding-left: 2rem; }
  .dashboard-surface { padding: 2.5rem; margin-top: 2rem; }
}
@media (max-width: 899px) { body { padding-bottom: 6rem; } }
@media (max-width: 599px) { .dialog .form-row { grid-template-columns: 1fr; gap: 0; } }
@media (max-width: 360px) {
  body { padding: 0 0 6rem; }
  .topbar { padding: 1rem .85rem; gap: .5rem; }
  .brand { font-size: 1.2rem; }
  .brand-symbol { width: 1.4rem; height: 1.4rem; }
  .header-book { font-size: .75rem; padding-inline: .65rem; }
  .hero-copy { padding-inline: .5rem; }
  .hero-buttons { gap: .4rem; }
  .hero-buttons .button { font-size: .6875rem; padding-inline: .65rem; }
  .dashboard-surface { padding: 1.1rem; }
  .booking-slots { grid-template-columns: repeat(2,minmax(0,1fr)); }
}

.chart-bar[style*="--bar-height:0%"] { border: 0; }

@media (min-width: 600px) { .court-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
@media (min-width: 1200px) { .court-grid { grid-template-columns: repeat(4,minmax(0,1fr)); } .court-visual { height: 9.5rem; } }
@media (max-width: 599px) {
  .dashboard-surface .segmented-control { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); width: 100%; border-radius: 1.2rem; }
}

```

## dist/css/design-system.css

Place at: `courtline-app/dist/css/design-system.css`.

```css
.library-header { max-width: 76rem; margin: auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.5rem; }
.library-main { max-width: 72rem; margin: 0 auto; padding: 1.5rem 1.5rem 4rem; }
.library-intro { max-width: 42rem; padding-block: 1rem; }
.library-intro h1 { font-size: clamp(2.5rem,7vw,4.5rem); margin-top: .75rem; color: var(--accent); }
.library-intro p { color: var(--muted); margin-top: 1.25rem; }
.library-nav { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; margin: 1.5rem 0 3rem; padding: 1rem 0; border-block: 1px solid var(--line); }
.library-nav a { padding: .5rem 0; font-size: .875rem; text-underline-offset: .25rem; color: var(--accent); }
.library-section { margin-top: 3rem; scroll-margin-top: 1.5rem; }
.library-section > h2 { font-size: 1.5rem; margin-bottom: .75rem; }
.library-section > p { color: var(--muted); max-width: 48rem; margin-bottom: 1.25rem; }
.library-section > p:last-child { margin-top: 1.25rem; }
.swatches { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1rem; }
.swatch { display: flex; flex-direction: column; font-size: .875rem; gap: .25rem; }
.swatch > span { height: 5.5rem; margin-bottom: .5rem; border: 1px solid #173b3110; border-radius: var(--radius); }
.swatch code { color: var(--muted); font-size: .8125rem; }
.swatch-brand > span { background: var(--brand); }
.swatch-accent > span { background: var(--accent); }
.swatch-canvas > span { background: var(--canvas); border-color: #ced6d0; }
.swatch-ink > span { background: var(--ink); }
.swatch-success > span { background: var(--success); }
.swatch-warning > span { background: var(--warning); }
.typography-sample > * + * { margin-top: 1.25rem; }
.typography-sample > span { display: block; }
.component-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0; }
.sample-form { max-width: 44rem; }
.form-row { grid-template-columns: 1fr; }
.sample-card-grid { display: grid; gap: 1rem; }
.sample-card-copy { color: var(--muted); margin: 1rem 0; }
.form-result:not(:empty) { margin-top: 1rem; color: var(--success); }
.table-wrap { overflow: auto; }
table { border-collapse: collapse; width: 100%; text-align: left; font-size: .875rem; }
caption { text-align: left; font-weight: 600; margin-bottom: .75rem; }
th, td { padding: .8rem; border-bottom: 1px solid var(--line); min-width: 7rem; }
td { color: var(--muted); }
.library-footer { padding-top: 3rem; margin-top: 3rem; border-top: 1px solid var(--line); font-size: .875rem; color: var(--muted); }
@media (min-width: 600px) { .swatches { grid-template-columns: repeat(3,minmax(0,1fr)); } .sample-card-grid, .form-row { grid-template-columns: 1fr 1fr; } }
@media (min-width: 900px) { .swatches { grid-template-columns: repeat(6,minmax(0,1fr)); } }

```

## dist/css/tokens.css

Place at: `courtline-app/dist/css/tokens.css`.

```css
/* Tenant colors are supplied by config/business.js. */
:root {
  color-scheme: dark;
  --brand: #163663; --brand-hover: #1e4985; --brand-soft: #ffffff0d;
  --accent: #d9f93d; --accent-ink: #0d1b2a;
  --canvas: #0d1b2a; --surface: var(--brand); --surface-deep: color-mix(in srgb, var(--brand) 80%, #000);
  --ink: #ffffff; --muted: #b7c9df; --line: #ffffff24;
  --success: var(--accent); --success-bg: #d9f93d14;
  --warning: #ffe09a; --warning-bg: #ffe09a12;
  --danger: #ffbdbd; --danger-bg: #6b263f;
  --radius-sm: .75rem; --radius: 1.25rem; --radius-lg: 1.5rem;
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem; --space-4: 1rem; --space-5: 1.25rem; --space-6: 1.5rem; --space-8: 2rem; --space-10: 2.5rem;
  --font: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-display: 'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui, sans-serif;
  --shadow: 0 12px 40px #00000018; --transition: 180ms ease;
}
/* Mobile first; layout expands at 600px, 900px, and 1200px. */
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scrollbar-gutter: stable; scroll-padding-top: 2rem; }
body { margin: 0; background: var(--canvas); color: var(--ink); font: 1rem/1.5 var(--font); -webkit-font-smoothing: antialiased; }
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea { -webkit-tap-highlight-color: transparent; }
button, a { touch-action: manipulation; }
button { cursor: pointer; color: inherit; }
button:disabled { cursor: not-allowed; opacity: .45; }
a { color: inherit; }
h1, h2, h3, p { margin: 0; }
h1, h2, h3 { font-family: var(--font-display); line-height: 1.2; letter-spacing: -.02em; font-weight: 600; }
h1 { font-size: clamp(2.25rem, 6vw, 5rem); font-weight: 700; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.125rem; }
svg { display: block; }
img { max-width: 100%; }
[hidden] { display: none !important; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 4px; }
::selection { background: var(--accent); color: var(--accent-ink); }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.skip-link { position: fixed; z-index: 100; top: -5rem; left: 1rem; background: var(--accent); color: var(--accent-ink); padding: .8rem 1rem; border-radius: 2rem; }
.skip-link:not(:focus) { clip-path: inset(100%); }
.skip-link:focus { top: 1rem; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }

```

## dist/design-system.html

Place at: `courtline-app/dist/design-system.html`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#163663">
  <title>Component library · Pickleball frontend</title>
  <link rel="icon" href="assets/mark.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/design-system.css">
  <script type="module" src="js/design-system.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to components</a>
  <header class="library-header"><a class="button button-outline" href="./"><span data-icon="grid"></span>Back to dashboard</a><span class="badge badge-neutral">FOUNDATION · V0.1</span></header>
  <main id="main" class="library-main" tabindex="-1">
    <div class="library-intro"><div class="eyebrow">THE SHARED PLAYBOOK</div><h1>One system.<br>Every court.</h1><p>A lightweight component foundation for customer, business, and facility experiences. HTML, CSS, and vanilla JavaScript. No runtime dependencies.</p></div>
    <nav class="library-nav" aria-label="Component sections"><a href="#colors">Colors</a><a href="#typography">Typography</a><a href="#buttons">Buttons</a><a href="#forms">Forms</a><a href="#cards">Cards</a><a href="#feedback">Feedback</a><a href="#layout">Layout</a></nav>
    <section id="colors" class="library-section"><h2>Color with purpose</h2><p>Tenant brand colors sit beside shared semantic colors. Status always includes a text label.</p><div class="swatches"><div class="swatch swatch-brand"><span></span><strong>Primary</strong><code>--brand</code></div><div class="swatch swatch-accent"><span></span><strong>Accent</strong><code>--accent</code></div><div class="swatch swatch-canvas"><span></span><strong>Canvas</strong><code>--canvas</code></div><div class="swatch swatch-ink"><span></span><strong>Text</strong><code>--ink</code></div><div class="swatch swatch-success"><span></span><strong>Success</strong><code>--success</code></div><div class="swatch swatch-warning"><span></span><strong>Attention</strong><code>--warning</code></div></div></section>
    <section id="typography" class="library-section"><h2>Clear at every size</h2><p>Plus Jakarta Sans 600/700 sets the pace for headings and metrics; Inter 400/500 keeps controls and body copy clear. Google Fonts load with swap and local system fallbacks. Body copy starts at 16px. Rem units respect browser text settings.</p><div class="panel typography-sample"><span class="eyebrow">EYEBROW · A MOMENT TO PLAY</span><h1>Your next great game.</h1><h2>A little better, every game.</h2><h3>Ready when you are.</h3><p>Find a court, bring your people, and enjoy the rally.</p><span class="subtle">Secondary copy keeps the focus on your game.</span></div></section>
    <section id="buttons" class="library-section"><h2>Simple, useful actions</h2><p>Buttons support keyboard focus, hover, pressed, and disabled states. Keep one primary action per task.</p><div class="component-row"><button class="button button-primary" data-demo-toast="Primary action preview">Primary action</button><button class="button button-lime" data-demo-toast="Accent action preview"><span data-icon="plus"></span>Book a court</button><button class="button button-outline" data-demo-toast="Secondary action preview">View details</button><button class="button button-primary" disabled>Unavailable</button><button class="icon-button" data-demo-toast="Icon button preview" aria-label="Sample notifications"><span data-icon="bell"></span></button></div><div class="component-row"><div class="segmented-control" role="group" aria-label="Example filters"><button class="selected" aria-pressed="true" data-sample-filter>All courts</button><button aria-pressed="false" data-sample-filter>Available</button><button aria-pressed="false" data-sample-filter>In play</button></div><button class="text-button" data-demo-toast="Text action preview">Explore your stats</button></div></section>
    <section id="forms" class="library-section"><h2>Forms that feel familiar</h2><p>Visible labels, native validation, clear help text, and useful error messages. This example validates in the browser and sends nothing.</p><form id="sample-form" class="panel sample-form"><div class="form-row"><div class="field"><label for="sample-name">Player name</label><input id="sample-name" name="name" placeholder="e.g. Alex Lee" required maxlength="80" autocomplete="name"><small>Use the name players know you by.</small></div><div class="field"><label for="sample-level">Playing level</label><select id="sample-level" name="level"><option>Beginner</option><option selected>Intermediate</option><option>Advanced</option></select></div></div><div class="field"><label for="sample-notes">Session notes <span class="subtle">(optional)</span></label><textarea id="sample-notes" name="notes" placeholder="Anything your playing partners should know?" maxlength="300"></textarea></div><div class="field"><label for="error-example">Error state example</label><input id="error-example" value="not-an-email" aria-invalid="true" aria-describedby="error-help"><small id="error-help" class="field-error">Enter a valid email address.</small></div><button class="button button-primary" type="submit">Validate example</button><p id="form-result" class="form-result" role="status"></p></form></section>
    <section id="cards" class="library-section"><h2>Room for the right information</h2><div class="sample-card-grid"><article class="panel"><div class="card-heading"><h3>Court availability</h3><span data-icon="calendar"></span></div><p class="sample-card-copy">Combine a clear title, supporting detail, a status, and one useful action.</p><span class="badge badge-success"><span class="status-dot"></span>Available · sample</span></article><article class="panel"><div class="card-heading"><h3>Your next session</h3><span data-icon="ticket"></span></div><p class="sample-card-copy">Shared card styles keep customer and admin views consistent.</p><button class="text-button" data-open-demo>Open accessible dialog</button></article></div></section>
    <section id="feedback" class="library-section"><h2>Always say what’s happening</h2><div class="component-row"><span class="badge badge-success"><span class="status-dot"></span>Available</span><span class="badge badge-warning"><span class="status-dot"></span>In play</span><span class="badge badge-neutral">No sample data</span></div><div class="notice"><strong>Frontend demonstration</strong><p>These components use sample data. No account, reservation, payment, or registration is created.</p></div></section>
    <section id="layout" class="library-section"><h2>Built from the small screen up</h2><div class="panel table-wrap"><table><caption>Responsive layout behavior</caption><thead><tr><th scope="col">Width</th><th scope="col">Layout</th></tr></thead><tbody><tr><td>Under 600px</td><td>Single column, touch navigation, stacked cards</td></tr><tr><td>600px+</td><td>Two court columns, more generous spacing</td></tr><tr><td>900px+</td><td>Persistent sidebar, four summary cards</td></tr><tr><td>1200px+</td><td>Split hero and session, four court columns</td></tr><tr><td>1450px+</td><td>Expanded spacing and illustration</td></tr></tbody></table></div><p>Spacing uses a 4px base. Touch targets are at least 44px for primary controls. Dialogs use native focus containment and Escape dismissal; a visible close button is always available. Motion follows the operating system’s reduced-motion preference. The dedicated television layout will be developed in Stage 9.</p></section>
    <footer class="library-footer">Stage 1 foundation · PWA manifest, service worker, offline page, and installation are planned for the final stage.</footer>
  </main>
  <dialog id="app-dialog" class="dialog" aria-labelledby="dialog-title"><div class="dialog-header"><h2 id="dialog-title"></h2><button class="icon-button" data-close-dialog aria-label="Close dialog"><span data-icon="close"></span></button></div><div id="dialog-content" class="dialog-content"></div></dialog>
  <div id="toast" class="toast" role="status" hidden></div>
</body>
</html>

```

## dist/index.html

Place at: `courtline-app/dist/index.html`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#163663">
  <meta name="description" content="Find your court, bring your people, and make your next game a good one. A configurable pickleball frontend preview.">
  <title>Home · Courtline</title>
  <link rel="icon" href="assets/mark.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/dashboard.css">
  <script type="module" src="js/app.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to dashboard</a>
  <div class="app-shell">
    <main id="main" tabindex="-1">
      <div id="load-error" class="notice error-notice" role="alert" hidden></div>
      <div id="dashboard-content" aria-busy="true">
        <section class="hero-card" aria-labelledby="hero-title">
          <div class="play-hero">
            <header class="topbar">
              <a class="brand" href="./" aria-label="Home"><span class="brand-mark"></span><span data-business-name>Courtline</span><span class="brand-period">.</span></a>
              <nav class="desktop-nav" aria-label="Main navigation">
                <a class="active" href="#main" aria-current="page">Overview</a><a href="#courts-title">Courts</a><button data-action="booking">Sessions</button><a href="#community-title">Community</a><button data-action="more">My Corner</button>
              </nav>
              <div class="topbar-actions"><button class="button button-lime header-book" data-feature="booking">Book a Court</button><button class="icon-button mobile-menu" data-action="more" aria-label="Open player navigation"><span data-icon="more"></span></button></div>
            </header>

            <img class="hero-photo" src="assets/hero-blue-court.jpg" alt="Overhead view of two pickleball players rallying on a blue court." width="1024" height="1024" fetchpriority="high" decoding="async">
            <div class="hero-copy"><span class="hero-status" aria-describedby="demo-disclosure"><span class="status-dot"></span>Courts Available Now</span><h1 id="hero-title">Less Scrolling.<br><em>More Rallying.</em></h1><p>Find your court, bring your people, and make<br class="desktop-break"> your next game a good one.</p><div class="hero-buttons"><button class="button button-lime" data-feature="booking">Book a Court</button><button class="button button-glass" data-action="programmes">Explore Programmes</button></div></div>

          </div>
          <div class="hero-bottom"><section class="stats-grid" id="stats-grid" aria-label="Sample clubhouse and player metrics"></section></div>
        </section>
        <div class="dashboard-surface">
        <section class="court-section" aria-labelledby="courts-title">
          <div class="section-heading"><div><div class="section-kicker">ROOM FOR YOUR NEXT RALLY</div><div class="section-title-line"><h2 id="courts-title">Find your court</h2><span class="badge badge-neutral" id="court-count">4 courts</span></div><p>Pick your spot. We’ll see you on the other side of the net.</p></div><div class="segmented-control" role="group" aria-label="Filter courts"><button class="selected" data-court-filter="all" aria-pressed="true">All</button><button data-court-filter="available" aria-pressed="false">Available</button><button data-court-filter="doubles" aria-pressed="false">Doubles</button><button data-court-filter="singles" aria-pressed="false">Singles</button></div></div>
          <div class="court-grid" id="court-grid"></div><p id="court-results" class="sr-only" role="status"></p><div class="section-footnote"><span data-icon="info"></span>Sample availability · Frontend preview, not a live court feed.</div>
        </section>
        <div class="lower-grid">
          <section class="activity-panel" aria-labelledby="activity-title"><div class="card-heading"><div><div class="section-kicker">THE GOOD KIND OF SCREEN TIME</div><h2 id="activity-title">A little better, every game</h2><p>Your last 7 days on court · Sample activity</p></div><span class="icon-soft" data-icon="chart"></span></div><div class="activity-body"><div class="activity-summary"><div><strong>4<span>hrs</span></strong><p>Time well spent</p></div><span class="positive-chip">+2 hrs vs. last week</span><button class="text-button" data-feature="statistics">Explore your stats</button></div><div class="activity-chart" id="activity-chart" role="img" aria-label="Sample court hours by day"></div></div></section>
          <section class="community-panel" aria-labelledby="community-title"><div class="card-heading"><div><div class="section-kicker">GOOD GAMES. BETTER COMPANY.</div><h2 id="community-title">Around the clubhouse</h2></div><span class="badge badge-neutral">UP NEXT</span></div><div class="event-content"></div><div class="event-footer"><span><span class="status-dot"></span>Sample community event</span><button class="button button-lime" data-action="event">RSVP</button></div></section>
        </div>
        <footer class="page-footer"><a class="brand footer-brand" href="./"><span data-business-name>Courtline</span><span class="brand-period">.</span></a><span>Built around your game.</span><span class="demo-disclosure" id="demo-disclosure">Frontend demo · No real reservations or payments</span></footer>
        </div>
      </div>
    </main>
  </div>
  <nav class="bottom-nav" aria-label="Mobile navigation"><a href="#main" aria-current="page"><span data-icon="grid"></span>Overview</a><a href="#courts-title"><span data-icon="calendar"></span>Courts</a><button data-action="booking"><span data-icon="ticket"></span>Sessions</button><a href="#community-title"><span data-icon="queue"></span>Community</a><button data-action="more"><span data-icon="user"></span>My Corner</button></nav>
  <dialog id="app-dialog" class="dialog" aria-labelledby="dialog-title"><div class="dialog-header"><h2 id="dialog-title"></h2><button class="icon-button" data-close-dialog aria-label="Close dialog"><span data-icon="close"></span></button></div><div id="dialog-content" class="dialog-content"></div></dialog>
  <div id="toast" class="toast" role="status" hidden></div>
  <noscript><div class="notice noscript-notice">Enable JavaScript to load this sample dashboard.</div></noscript>
</body>
</html>

```

## dist/js/app.js

Place at: `courtline-app/dist/js/app.js`.

```javascript
import { repository } from './services/repository.js';
import { icon, hydrateIcons } from './shared/icons.js';
import { brandMark } from './shared/branding.js';
import { previewDateRange } from './services/booking-preview.js';
import { badge, escapeHTML as esc, createDialogController, showToast, contrastRatio } from './shared/components.js';

const dialog = createDialogController(document.querySelector('#app-dialog'));
const state = { business: null, dashboard: null, courtFilter: 'all' };
const features = {
  booking: { title: 'Book a court', stage: 2, icon: 'calendar', description: 'Choose a day, find an open time, and review your reservation.', items: ['Availability calendar and time slots', 'Booking review and booking history', 'Booking rules from business configuration'], handoff: 'Your backend will provide availability and validate and save reservations.' },
  queue: { title: 'Live queue', stage: 3, icon: 'queue', description: 'Know where you stand before you step on court.', items: ['Waiting list and player position', 'Join and leave interactions with a labeled simulation', 'Court assignment and next players'], handoff: 'Your backend will own queue order and broadcast updates.' },
  scoring: { title: 'Live matches', stage: 4, icon: 'score', description: 'Follow each rally and keep every point in view.', items: ['Match cards and court assignments', 'Frontend scoreboard controls', 'Scoring format and match state'], handoff: 'Your backend will authorize scorers, persist scores, and publish match updates.' },
  leaderboard: { title: 'Leaderboard', stage: 5, icon: 'trophy', description: 'A friendly bit of competition, all in one place.', items: ['Player rankings and filters', 'Ranking movement and player details'], handoff: 'Your backend will calculate and serve official rankings.' },
  statistics: { title: 'Your game, in numbers', stage: 6, icon: 'chart', description: 'Look back at your matches and see your progress.', items: ['Player statistics and match history', 'Date filters and match detail views'], handoff: 'Your backend will supply match records and aggregated statistics.' },
  tournaments: { title: 'Tournaments', stage: 7, icon: 'flag', description: 'Find your next challenge, from social play to championship day.', items: ['Tournament information and brackets', 'Registration UI and registration status'], handoff: 'Your backend will validate entries, enforce capacity, and store registrations.' },
};

function time(value) { return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: state.business.information.timezone, hour: 'numeric', minute: '2-digit' }).format(new Date(value)); }
function date(value, options) { return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: state.business.information.timezone, ...options }).format(new Date(value)); }
function money(value) { return new Intl.NumberFormat(state.business.information.locale, { style: 'currency', currency: state.business.information.currency, maximumFractionDigits: 0 }).format(value); }
function details(rows) { return `<dl class="detail-list">${rows.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`; }

function applyBranding() {
  const { business: b } = state;
  const variables = { '--brand': b.colors.primary, '--brand-hover': b.colors.primaryHover, '--accent': b.colors.accent, '--accent-ink': b.colors.accentInk };
  Object.entries(variables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
  document.querySelectorAll('[data-business-name]').forEach(el => { el.textContent = b.name; });
  document.title = `Home · ${b.name}`;
  document.querySelector('meta[name="theme-color"]').content = b.colors.primary;
  const hero = document.querySelector('.hero-photo');
  if (hero && b.heroArtwork?.src) {
    try {
      const url = new URL(b.heroArtwork.src, location.href);
      if (url.protocol === 'https:' || url.origin === location.origin) { hero.src = url.href; hero.alt = b.heroArtwork.alt || ''; }
    } catch { /* Keep the bundled image when configuration is invalid. */ }
  }
  // Accept safe local/HTTPS logo URLs, and use the shared symbol if invalid.
  document.querySelectorAll('.brand-mark').forEach(el => {
    el.innerHTML = brandMark();
    if (!b.logoUrl) return;
    let url;
    try { url = new URL(b.logoUrl, location.href); } catch { return; }
    if (url.protocol !== 'https:' && url.origin !== location.origin) return;
    const img = document.createElement('img');
    img.src = url.href; img.alt = ''; img.addEventListener('error', () => { el.innerHTML = brandMark(); }, { once: true });
    el.replaceChildren(img);
  });
}

function renderStats() {
  const d = state.dashboard;
  const hours = d.activity.reduce((sum, day) => sum + day.hours, 0);
  const difference = hours - d.previousWeekHours;
  const metrics = [
    { label: 'Time Well Spent', value: hours, unit: 'hours' },
    { label: 'Courts Active', value: state.business.courts.filter(c => d.courtSnapshots.some(s => s.courtId === c.id && ['available', 'in-use'].includes(s.status))).length, unit: '' },
    { label: 'Clubhouse Players', value: d.communityCount, unit: '' },
    { label: 'Weekly Trend', value: `${difference >= 0 ? '+' : ''}${difference}`, unit: 'hrs' },
  ];
  document.querySelector('#stats-grid').innerHTML = metrics.map(stat => `<article class="stat-card"><div class="stat-value"><strong>${esc(stat.value)}</strong><span>${esc(stat.unit)}</span></div><h2 class="stat-top">${esc(stat.label)}</h2></article>`).join('');
}

function renderCourts() {
  const courts = state.business.courts.map(c => ({ ...c, ...(state.dashboard.courtSnapshots.find(s => s.courtId === c.id) || { status: 'unavailable', label: 'No sample data', note: 'Availability not connected' }) }));
  const filtered = state.courtFilter === 'all' ? courts : courts.filter(c => ['doubles', 'singles'].includes(state.courtFilter) ? (c.formats || []).some(f => f.toLowerCase() === state.courtFilter) : c.status === state.courtFilter);
  document.querySelector('#court-count').textContent = `${courts.length} ${courts.length === 1 ? 'court' : 'courts'}`;
  document.querySelector('#court-grid').innerHTML = filtered.length ? filtered.map(c => `<article class="court-card"><div class="court-visual ${esc(c.status)}"><div class="court-diagram" aria-hidden="true"><div class="court-lines"><i></i></div></div>${badge(c.label, c.status === 'available' ? 'success' : c.status === 'in-use' ? 'warning' : 'neutral', true)}</div><div class="court-details"><div class="court-title-row"><h3><button class="court-title-button" data-court="${esc(c.id)}" aria-label="View ${esc(c.name)} details">${esc(c.name)}</button></h3><span class="court-type">${esc(c.type)}</span></div><p>${esc(c.note)}</p><div class="court-formats">${esc((c.formats || []).join(' · '))}</div><div class="court-card-footer"><span class="court-price">${esc(money(c.hourlyRate))}<small> / hr</small></span><button class="text-button" data-book-court="${esc(c.id)}" aria-label="Book ${esc(c.name)}">Book court</button></div></div></article>`).join('') : '<div class="empty-state">No courts match this filter. Try All courts.</div>';
  document.querySelector('#court-results').textContent = `${filtered.length} of ${courts.length} courts shown.`;
  document.querySelectorAll('[data-court-filter]').forEach(button => { const selected = button.dataset.courtFilter === state.courtFilter; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
}

function renderDashboard() {
  const { dashboard: d } = state;
  document.querySelectorAll('[data-player-first]').forEach(el => { el.textContent = d.player.firstName; });
  document.querySelectorAll('[data-player-initials]').forEach(el => { el.textContent = `${d.player.firstName[0]}${d.player.lastName[0]}`; });
  const available = d.courtSnapshots.some(s => s.status === 'available' && state.business.courts.some(c => c.id === s.courtId));
  const status = document.querySelector('.hero-status');
  status.innerHTML = `<span class="status-dot ${available ? '' : 'no-courts'}"></span>${available ? 'Courts Available Now' : 'No Courts Available'}`;
  renderStats(); renderCourts();
  const totalHours = d.activity.reduce((sum, item) => sum + item.hours, 0);
  const maxHours = Math.max(1, ...d.activity.map(item => item.hours));
  const chart = document.querySelector('#activity-chart');
  chart.innerHTML = d.activity.map(item => `<div class="chart-column"><div class="chart-track"><div class="chart-bar" style="--bar-height:${Math.min(100, Math.max(0, item.hours / maxHours * 100))}%"></div></div><span>${esc(item.day)}</span></div>`).join('');
  chart.setAttribute('aria-label', `Sample court hours by day: ${d.activity.map(item => `${item.day} ${item.hours}`).join(', ')}. Total ${totalHours} hours.`);
  document.querySelector('.activity-summary strong').innerHTML = `${esc(totalHours)}<span>hrs</span>`;
  const difference = totalHours - d.previousWeekHours;
  document.querySelector('.positive-chip').textContent = `${difference >= 0 ? '+' : ''}${difference} hrs vs. last week`;
  const eventRoot = document.querySelector('.event-content');
  eventRoot.innerHTML = d.event ? `<div class="event-date"><strong>${esc(date(d.event.startsAt, { day: 'numeric' }))}</strong><span>${esc(date(d.event.startsAt, { month: 'short' }).toUpperCase())}</span></div><div><span class="event-category">${esc(d.event.category)}</span><h3>${esc(d.event.name)}</h3><p>${esc(d.event.summary)}</p><div class="event-meta">${icon('clock')}${esc(time(d.event.startsAt))} – ${esc(time(d.event.endsAt))}</div></div>` : '<p>No sample events to show.</p>';
  document.querySelector('.event-footer').hidden = !d.event;
  document.querySelector('#dashboard-content').setAttribute('aria-busy', 'false');
}

function openFeature(key) {
  const f = features[key];
  if (key === 'booking') return openBookingPreview();
  if (!f) return;
  dialog.open(f.title, `<div class="dialog-feature-icon">${icon(f.icon)}</div>${badge(`Planned · Stage ${f.stage}`)}<p class="feature-description">${esc(f.description)}</p><ul class="feature-list">${f.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="notice"><strong>Frontend development preview</strong><p>This module is not built yet. No action has been submitted.</p><p>${esc(f.handoff)}</p></div><button class="button button-primary" data-action="close">Back to dashboard</button>`);
}

function openBooking() {
  const b = state.dashboard.upcomingBooking;
  const court = state.business.courts.find(c => c.id === b?.courtId);
  if (!b || !court) { dialog.open('My bookings', '<div class="empty-state">No sample bookings for this court configuration.</div>'); return; }
  dialog.open('Your sample booking', `<div class="notice">This is a fictional reservation for UI development. No court is reserved and no payment has been taken.</div>${details([['Reference', b.id], ['Court', `${court.name} · ${court.type}`], ['Date', date(b.startsAt, { dateStyle: 'full' })], ['Time', `${time(b.startsAt)} – ${time(b.endsAt)}`], ['Players', `${b.players} · ${b.format}`], ['Sample total', money(b.total)], ['Status', b.status]])}<p>Booking history, cancellation, and rescheduling will be developed in the Booking stage.</p><button class="button button-primary" data-action="close">Got it</button>`);
}

// Transient UI state only. The repository supplies fictional slots, never a booking write.
let bookingDraft = null;
let slotRequest = 0;
function localClock(value) {
  const [hours, minutes] = value.split(':').map(Number);
  return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: 'UTC', hour: 'numeric', minute: '2-digit' }).format(new Date(Date.UTC(2000, 0, 1, hours, minutes)));
}
function openBookingPreview(courtId, restore = false, startTime = null) {
  const b = state.business;
  if (!b.courts.length) { dialog.open('Book a Court', '<div class="empty-state">No courts are configured.</div>'); return; }
  const range = previewDateRange(b, state.dashboard);
  const r = b.bookingRules;
  if (!restore || !bookingDraft) bookingDraft = { courtId: courtId || b.courts[0].id, day: range.min, durationMinutes: r.minDurationMinutes, players: Math.min(4, r.maxPlayers), start: startTime };
  const durations = [];
  for (let value = r.minDurationMinutes; value <= r.maxDurationMinutes; value += r.slotMinutes) durations.push(value);
  dialog.open('Book a Court', `<div class="notice"><strong>Frontend booking preview</strong><br>Choose a fictional slot. Dates use the demo day, not today. Nothing is reserved, saved, or charged.</div><form id="booking-form"><div class="form-row"><div class="field"><label for="booking-court">Court</label><select id="booking-court" name="courtId">${b.courts.map(c => `<option value="${esc(c.id)}" ${c.id === bookingDraft.courtId ? 'selected' : ''}>${esc(c.name)} · ${esc(c.type)}</option>`).join('')}</select></div><div class="field"><label for="booking-day">Date</label><input id="booking-day" name="day" type="date" min="${range.min}" max="${range.max}" value="${esc(bookingDraft.day)}" required></div></div><div class="form-row"><div class="field"><label for="booking-duration">Duration</label><select id="booking-duration" name="durationMinutes">${durations.map(value => `<option value="${value}" ${value === bookingDraft.durationMinutes ? 'selected' : ''}>${value} minutes</option>`).join('')}</select></div><div class="field"><label for="booking-players">Players</label><select id="booking-players" name="players">${Array.from({ length: r.maxPlayers }, (_, i) => `<option value="${i + 1}" ${i + 1 === bookingDraft.players ? 'selected' : ''}>${i + 1} ${i ? 'players' : 'player'}</option>`).join('')}</select></div></div><p class="subtle" id="slot-help">Sample slots · ${esc(b.information.timezone)} · ${esc(b.operatingHours.open)}–${esc(b.operatingHours.close)}</p><div id="slot-status" role="status" class="subtle"></div><div id="booking-slots" class="booking-slots" role="group" aria-label="Choose a sample start time" aria-describedby="slot-help"></div><div class="booking-summary"><div><small>Sample session total</small><strong id="booking-price">${esc(money(b.courts.find(c => c.id === bookingDraft.courtId).hourlyRate * bookingDraft.durationMinutes / 60))}</strong></div><button class="button button-lime" id="review-booking" type="submit" disabled>Review demo</button></div></form>`);
  loadBookingSlots();
}
async function loadBookingSlots() {
  const form = document.querySelector('#booking-form');
  if (!form) return;
  const request = ++slotRequest;
  const values = new FormData(form);
  const keep = bookingDraft.start;
  bookingDraft = { courtId: values.get('courtId'), day: values.get('day'), durationMinutes: Number(values.get('durationMinutes')), players: Number(values.get('players')), start: null };
  const root = document.querySelector('#booking-slots');
  const status = document.querySelector('#slot-status');
  document.querySelector('#review-booking').disabled = true;
  root.replaceChildren(); status.textContent = 'Loading fictional slots…';
  try {
    const slots = await repository.getBookingSlots(bookingDraft);
    if (request !== slotRequest || !form.isConnected) return;
    bookingDraft.slots = slots;
    const court = state.business.courts.find(c => c.id === bookingDraft.courtId);
    document.querySelector('#booking-price').textContent = money(court.hourlyRate * bookingDraft.durationMinutes / 60);
    root.innerHTML = slots.map(slot => `<button type="button" data-slot="${esc(slot.start)}" aria-pressed="false" ${slot.available ? '' : 'disabled'} aria-label="${esc(localClock(slot.start))}${slot.available ? '' : ', unavailable in sample'}">${esc(localClock(slot.start))}${slot.available ? '' : '<br><small>Unavailable</small>'}</button>`).join('');
    status.textContent = slots.some(s => s.available) ? 'Select a sample start time.' : 'No sample slots for this date and duration. Try another selection.';
    if (slots.some(s => s.start === keep && s.available)) selectSlot(keep);
  } catch {
    if (request !== slotRequest || !form.isConnected) return;
    status.textContent = 'Slots could not load. Change the date or court to retry.';
  }
}
function selectSlot(start) {
  const slot = bookingDraft?.slots?.find(s => s.start === start && s.available);
  if (!slot) return;
  bookingDraft.start = start;
  document.querySelectorAll('[data-slot]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.slot === start)));
  document.querySelector('#slot-status').textContent = `Sample session: ${localClock(slot.start)} – ${localClock(slot.end)}.`;
  document.querySelector('#review-booking').disabled = false;
}
function reviewBookingPreview() {
  const slot = bookingDraft?.slots?.find(s => s.start === bookingDraft.start && s.available);
  if (!slot) return;
  const court = state.business.courts.find(c => c.id === bookingDraft.courtId);
  dialog.open('Review your demo session', `<div class="notice">Simulation only · This review does not hold a court or submit a reservation.</div>${details([['Court', `${court.name} · ${court.type}`], ['Date', date(`${bookingDraft.day}T12:00:00Z`, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })], ['Time', `${localClock(slot.start)} – ${localClock(slot.end)}`], ['Timezone', state.business.information.timezone], ['Players', bookingDraft.players], ['Duration', `${bookingDraft.durationMinutes} minutes`], ['Sample total', money(slot.total)]])}<div class="form-actions"><button class="button button-lime" data-action="finish-demo">Finish demo</button><button class="button button-outline" data-action="edit-booking">Edit selection</button></div>`);
}
function editBookingPreview() { openBookingPreview(bookingDraft?.courtId, true); }
function finishBookingPreview() {
  bookingDraft = null;
  dialog.open('Demo complete', `<div class="dialog-feature-icon">${icon('calendar')}</div><p>You’ve tried the booking flow. No court was reserved and no payment was taken. The dashboard and your sample upcoming session have not changed.</p><button class="button button-lime" data-action="close">Back to the clubhouse</button>`);
}
function openProgrammes() {
  dialog.open('Find your people', `<div class="notice">Sample programmes · No enrolment or payment is submitted.</div><div class="more-menu"><button class="button button-outline" data-action="event">${icon('queue')}Saturday Social Doubles</button><button class="button button-outline" data-feature="tournaments">${icon('trophy')}Explore tournaments</button></div>`);
}
function previewRSVP() {
  dialog.open('RSVP preview complete', '<div class="notice">No registration was submitted.</div><p>This sample RSVP shows the intended interaction. Real places, player eligibility, and confirmation will come from the backend.</p><button class="button button-lime" data-action="close">Done</button>');
}

document.addEventListener('change', event => {
  if (!event.target.closest('#booking-form')) return;
  if (event.target.name === 'players') { bookingDraft.players = Number(event.target.value); return; }
  bookingDraft.start = null;
  loadBookingSlots();
});

function openCourt(id) {
  const c = state.business.courts.find(c => c.id === id);
  if (!c) return;
  const s = state.dashboard.courtSnapshots.find(s => s.courtId === id);
  const { operatingHours: h, bookingRules: r } = state.business;
  dialog.open(c.name, `<div class="notice">Sample court details · This snapshot does not guarantee availability.</div>${details([['Court', c.name], ['Type', c.type], ['Sample status', s?.label || 'No sample data'], ['Hourly rate', money(c.hourlyRate)], ['Business hours', `${h.open} – ${h.close}`], ['Session duration', `${r.minDurationMinutes}–${r.maxDurationMinutes} minutes`], ['Book ahead', `${r.advanceDays} days`], ['Maximum players', r.maxPlayers]])}<p>Try the sample booking flow to choose a fictional time.</p><button class="button button-lime" data-book-court="${esc(c.id)}">Book this court</button>`);
}

function openProfile() {
  const p = state.dashboard.player;
  dialog.open('Your player profile', `<div class="notice">Demo player · No account is signed in. Login and registration will need your classmate’s authentication service.</div>${details([['Name', `${p.firstName} ${p.lastName}`], ['Playing level', p.level], ['Joined', p.joined], ['Club', state.business.name]])}<p>Profile editing and account access are planned for a later stage.</p><button class="button button-outline" data-feature="statistics">About player statistics</button>`);
}

function openNotifications() {
  document.querySelector('.notification-dot')?.setAttribute('hidden', '');
  const b = state.dashboard.upcomingBooking, e = state.dashboard.event;
  dialog.open('Clubhouse updates', `<div class="notice">Sample notifications · No messages have been sent.</div><ul class="notification-list">${b ? `<li><span class="icon-soft">${icon('calendar')}</span><div><strong>Your next game is on the calendar</strong><p>Sample session on ${esc(date(b.startsAt, { month: 'short', day: 'numeric' }))}, ${esc(time(b.startsAt))}. Open My bookings to see the example.</p></div></li>` : ''}${e ? `<li><span class="icon-soft">${icon('flag')}</span><div><strong>${esc(e.name)}</strong><p>Explore the sample community event on ${esc(date(e.startsAt, { month: 'long', day: 'numeric' }))}.</p></div></li>` : ''}</ul>${!b && !e ? '<p>No sample updates.</p>' : ''}`);
}

function openEvent() {
  const e = state.dashboard.event;
  if (!e) return;
  dialog.open(e.name, `<div class="notice">Fictional community event · No registration is submitted from this preview.</div><p>${esc(e.description)}</p>${details([['Date', date(e.startsAt, { dateStyle: 'full' })], ['Time', `${time(e.startsAt)} – ${time(e.endsAt)}`], ['Level', e.level], ['Club', state.business.name]])}<div class="form-actions"><button class="button button-lime" data-action="rsvp-demo">Try demo RSVP</button><button class="button button-outline" data-feature="tournaments">Tournament information</button></div>`);
}

function openSettings() {
  const b = state.business;
  dialog.open('Business preview', `<div class="notice">Try the shared design with different branding. Changes affect this page only and reset on reload. This is not the Admin Dashboard.</div><form id="brand-form"><div class="field"><label for="business-name">Business name</label><input id="business-name" name="businessName" required maxlength="40" value="${esc(b.name)}" autocomplete="organization"></div><div class="form-row"><div class="field"><label for="primary-color">Primary color</label><input type="color" id="primary-color" name="primaryColor" value="${esc(b.colors.primary)}"></div><div class="field"><label for="accent-color">Accent color</label><input type="color" id="accent-color" name="accentColor" value="${esc(b.colors.accent)}"></div></div><div class="field"><label for="court-number">Number of sample courts</label><select id="court-number" name="courtCount">${[1,2,3,4,6,8].map(n => `<option ${n === b.courts.length ? 'selected' : ''}>${n}</option>`).join('')}</select><small>New courts show “No sample data” until fixtures or API data are provided.</small></div><div id="brand-error" class="notice error-notice" role="alert" hidden></div><p class="subtle">Logo, court names, business information, hours, currency, and booking rules are configured in <code>js/config/business.js</code>.</p><div class="form-actions"><button type="submit" class="button button-primary">Apply preview</button><button type="button" class="button button-outline" data-action="reset-brand">Reset defaults</button></div></form>`);
}

function openMore() {
  dialog.open('Your clubhouse', `<div class="more-menu"><button class="button button-outline" data-feature="booking">${icon('calendar')}Book a Court</button><button class="button button-outline" data-feature="queue">${icon('queue')}Live queue</button><button class="button button-outline" data-feature="scoring">${icon('score')}Live matches</button><button class="button button-outline" data-action="notifications">${icon('bell')}Notifications</button><button class="button button-outline" data-feature="leaderboard">${icon('trophy')}Leaderboard</button><button class="button button-outline" data-feature="tournaments">${icon('flag')}Tournaments</button><button class="button button-outline" data-action="booking">${icon('ticket')}My bookings</button><button class="button button-outline" data-feature="statistics">${icon('chart')}My statistics</button><button class="button button-outline" data-action="profile">${icon('user')}My profile</button></div>`);
}

document.addEventListener('click', async event => {
  const target = event.target.closest('[data-feature], [data-action], [data-court], [data-court-filter], [data-book-court], [data-slot]');
  if (!target || !state.dashboard) return;
  if (target.dataset.bookCourt) return openBookingPreview(target.dataset.bookCourt, false, target.dataset.bookTime || null);
  if (target.dataset.slot) return selectSlot(target.dataset.slot);
  if (target.dataset.feature) return openFeature(target.dataset.feature);
  if (target.dataset.courtFilter) { state.courtFilter = target.dataset.courtFilter; return renderCourts(); }
  if (target.dataset.court) return openCourt(target.dataset.court);
  const actions = { booking: openBooking, profile: openProfile, notifications: openNotifications, event: openEvent, programmes: openProgrammes, 'rsvp-demo': previewRSVP, 'finish-demo': finishBookingPreview, 'edit-booking': editBookingPreview, settings: openSettings, more: openMore, close: () => dialog.close(), 'reset-brand': async () => { state.business = await repository.getBusiness(); applyBranding(); renderStats(); renderCourts(); dialog.close(); showToast('Default business preview restored.'); } };
  actions[target.dataset.action]?.();
});

document.addEventListener('submit', event => {
  if (event.target.id === 'booking-form') { event.preventDefault(); return reviewBookingPreview(); }
  if (event.target.id !== 'brand-form') return;
  event.preventDefault();
  const form = new FormData(event.target);
  const primary = form.get('primaryColor'), accent = form.get('accentColor'), name = form.get('businessName').trim();
  const error = document.querySelector('#brand-error');
  if (!name || contrastRatio(primary, '#ffffff') < 4.5 || contrastRatio(primary, accent) < 4.5) {
    error.textContent = 'Enter a business name and choose a dark primary color with a light accent. Both text combinations must meet a 4.5:1 contrast ratio.';
    error.hidden = false; return;
  }
  state.business.name = name;
  state.business.colors = { primary, primaryHover: primary, accent, accentInk: primary };
  const count = Number(form.get('courtCount'));
  state.business.courts = Array.from({ length: count }, (_, i) => state.business.courts[i] || { id: `court-${i + 1}`, name: `Court ${String(i + 1).padStart(2, '0')}`, type: 'Outdoor', environment: 'outdoor', formats: ['Doubles', 'Singles'], hourlyRate: 400 });
  applyBranding(); renderStats(); renderCourts(); dialog.close();
  showToast('Business preview updated for this page. Nothing was saved to a server.');
});

async function init() {
  hydrateIcons();
  try {
    const [business, dashboard] = await Promise.all([repository.getBusiness(), repository.getDashboard()]);
    state.business = business; state.dashboard = dashboard;
    applyBranding(); renderDashboard();
  } catch (error) {
    document.querySelector('#dashboard-content').hidden = true;
    const notice = document.querySelector('#load-error');
    notice.hidden = false; notice.textContent = 'The dashboard could not load. Refresh to retry. If this continues, check the configured data source.';
    console.error('Dashboard initialization failed:', error);
  }
}
init();

```

## dist/js/config/business.js

Place at: `courtline-app/dist/js/config/business.js`.

```javascript
/** Tenant configuration. Replace with a validated backend response at integration.
 * Courtline is a sample tenant, not the application identity.
 * logoUrl accepts a local/HTTPS image path; null uses the shared pickleball symbol.
 * Court count is derived from courts.length; never duplicate it in layout code.
 */
export const businessConfig = {
  id: 'sample-club',
  name: 'Courtline',
  logoUrl: null,
  heroArtwork: { src: 'assets/hero-blue-court.jpg', alt: 'Overhead view of two pickleball players rallying on a blue court.' },
  colors: { primary: '#163663', primaryHover: '#1e4985', accent: '#d9f93d', accentInk: '#0d1b2a' },
  information: {
    tagline: 'Built around your game.',
    address: '18 Park Avenue, Metro Manila',
    email: 'hello@example.com',
    phone: '+63 900 000 0000',
    timezone: 'Asia/Manila',
    locale: 'en-PH',
    currency: 'PHP',
  },
  operatingHours: { open: '06:00', close: '22:00', days: [0, 1, 2, 3, 4, 5, 6] },
  bookingRules: { slotMinutes: 60, minDurationMinutes: 60, maxDurationMinutes: 120, advanceDays: 14, maxPlayers: 4, cancellationNoticeHours: 12 },
  courts: [
    { id: 'court-1', name: 'Court 01', type: 'Outdoor', environment: 'outdoor', formats: ['Doubles', 'Singles'], hourlyRate: 400 },
    { id: 'court-2', name: 'Court 02', type: 'Outdoor', environment: 'outdoor', formats: ['Doubles'], hourlyRate: 400 },
    { id: 'court-3', name: 'Court 03', type: 'Covered', environment: 'indoor', formats: ['Doubles', 'Singles'], hourlyRate: 500 },
    { id: 'court-4', name: 'Court 04', type: 'Covered', environment: 'indoor', formats: ['Singles'], hourlyRate: 500 },
  ],
};

```

## dist/js/data/mock-data.js

Place at: `courtline-app/dist/js/data/mock-data.js`.

```javascript
/** Fixed, clearly labeled fixtures. All dates use explicit offsets; no host timezone assumptions. */
export const mockDashboard = {
  source: 'mock',
  snapshotAt: '2026-11-20T15:00:00+08:00',
  player: { id: 'player-demo', firstName: 'Alex', lastName: 'Lee', level: 'Intermediate', joined: 'August 2026', homeClub: 'Sample clubhouse' },
  communityCount: 32,
  upcomingBooking: { id: 'BK-DEMO-1042', courtId: 'court-3', startsAt: '2026-11-20T18:00:00+08:00', endsAt: '2026-11-20T19:00:00+08:00', format: 'Doubles', players: 4, status: 'Sample confirmed', total: 500 },
  stats: [
    { label: 'Matches played', value: '24', unit: 'games', caption: '6 games this month', icon: 'paddle', positive: false },
    { label: 'Win rate', value: '68', unit: '%', caption: '+8% vs. last month', icon: 'chart', positive: true },
    { label: 'Current ranking', value: '#12', unit: 'in club', caption: 'Up 3 places this month', icon: 'trophy', positive: true },
    { label: 'Time on court', value: '18.5', unit: 'hrs', caption: 'This month so far', icon: 'clock', positive: false },
  ],
  courtSnapshots: [
    { courtId: 'court-1', status: 'available', label: 'Available', note: 'Open for your next rally' },
    { courtId: 'court-2', status: 'in-use', label: 'In play', note: 'Session ends at 4:00 PM' },
    { courtId: 'court-3', status: 'available', label: 'Available', note: 'Open for your next rally' },
    { courtId: 'court-4', status: 'in-use', label: 'In play', note: 'Session ends at 3:30 PM' },
  ],
  activity: [ { day: 'Sat', hours: .5 }, { day: 'Sun', hours: 1 }, { day: 'Mon', hours: 0 }, { day: 'Tue', hours: 1.5 }, { day: 'Wed', hours: 0 }, { day: 'Thu', hours: 1 }, { day: 'Fri', hours: 0 } ],
  previousWeekHours: 2,
  bookingBusyPeriods: [
    { courtId: 'court-2', day: '2026-11-20', from: '14:00', to: '16:00' },
    { courtId: 'court-3', day: '2026-11-20', from: '18:00', to: '19:00' },
    { courtId: 'court-4', day: '2026-11-20', from: '14:30', to: '15:30' },
  ],
  event: { id: 'event-demo', name: 'Saturday Social Doubles', category: 'Social play', summary: 'Good rallies. New friends. All levels.', startsAt: '2026-11-28T08:00:00+08:00', endsAt: '2026-11-28T12:00:00+08:00', level: 'All levels welcome', description: 'A relaxed morning of rotating doubles. Bring a friend or meet a new playing partner. This is a sample event; registration is not open.' },
};

```

## dist/js/design-system.js

Place at: `courtline-app/dist/js/design-system.js`.

```javascript
import { hydrateIcons } from './shared/icons.js';
import { createDialogController, showToast } from './shared/components.js';
import { repository } from './services/repository.js';

const business = await repository.getBusiness();
const vars = { '--brand': business.colors.primary, '--brand-hover': business.colors.primaryHover, '--accent': business.colors.accent, '--accent-ink': business.colors.accentInk };
Object.entries(vars).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
hydrateIcons();
const dialog = createDialogController(document.querySelector('#app-dialog'));
document.querySelectorAll('[data-demo-toast]').forEach(button => button.addEventListener('click', () => showToast(`${button.dataset.demoToast} · no data submitted.`)));
document.querySelector('[data-open-demo]').addEventListener('click', () => dialog.open('A shared dialog', '<div class="notice">Frontend demonstration · Nothing is submitted.</div><p>Tab stays inside this dialog. Press Escape, click outside, or use the close button to return. Focus returns to the button that opened it.</p>'));
document.querySelectorAll('[data-sample-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-sample-filter]').forEach(item => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
  showToast(`Example filter: ${button.textContent}. No court data on this reference page.`);
}));
document.querySelector('#sample-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-result').textContent = 'Example validated locally. Nothing was saved or sent. The email field illustrates an error style only.';
});

```

## dist/js/services/booking-preview.js

Place at: `courtline-app/dist/js/services/booking-preview.js`.

```javascript
/** Pure mock slot adapter. Replace repository.getBookingSlots with a server call.
 * All day/time strings below are business-local, independent of the browser zone.
 * No write, storage, reservation, or payment happens here.
 */
export function previewDateRange(business, dashboard) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: business.information.timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(dashboard.snapshotAt));
  const get = type => parts.find(p => p.type === type).value;
  const min = `${get('year')}-${get('month')}-${get('day')}`;
  const limit = new Date(`${min}T00:00:00Z`);
  limit.setUTCDate(limit.getUTCDate() + business.bookingRules.advanceDays);
  return { min, max: limit.toISOString().slice(0, 10) };
}

export function generatePreviewSlots(business, dashboard, input) {
  const { courtId, day, durationMinutes } = input;
  const court = business.courts.find(c => c.id === courtId);
  const { min, max } = previewDateRange(business, dashboard);
  const rules = business.bookingRules, hours = business.operatingHours;
  const parsed = new Date(`${day}T00:00:00Z`);
  if (!court || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !Number.isFinite(+parsed) || parsed.toISOString().slice(0, 10) !== day || day < min || day > max) return [];
  if (!Number.isInteger(durationMinutes) || durationMinutes < rules.minDurationMinutes || durationMinutes > rules.maxDurationMinutes || (durationMinutes - rules.minDurationMinutes) % rules.slotMinutes) return [];
  if (!hours.days.includes(parsed.getUTCDay())) return [];
  const minutes = value => { const [h, m] = value.split(':').map(Number); return h * 60 + m; };
  const clock = value => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
  const timeParts = new Intl.DateTimeFormat('en-GB', { timeZone: business.information.timezone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date(dashboard.snapshotAt));
  const now = Number(timeParts.find(p => p.type === 'hour').value) * 60 + Number(timeParts.find(p => p.type === 'minute').value);
  const busy = (dashboard.bookingBusyPeriods || []).filter(p => p.courtId === courtId && p.day === day);
  const slots = [];
  for (let start = minutes(hours.open); start + durationMinutes <= minutes(hours.close); start += rules.slotMinutes) {
    if (day === min && start < now) continue;
    const end = start + durationMinutes;
    const available = !busy.some(p => start < minutes(p.to) && end > minutes(p.from));
    slots.push({ start: clock(start), end: clock(end), available, total: court.hourlyRate * durationMinutes / 60, source: 'mock' });
  }
  return slots;
}

```

## dist/js/services/repository.js

Place at: `courtline-app/dist/js/services/repository.js`.

```javascript
import { businessConfig } from '../config/business.js';
import { mockDashboard } from '../data/mock-data.js';
import { generatePreviewSlots } from './booking-preview.js';

/** The only data boundary used by the UI.
 * Backend handoff: implement these async methods with fetch, validate the
 * payload, preserve this view-model shape, and change source to 'api'.
 * No authentication, booking writes, payments, or live subscriptions exist yet.
 */
export const repository = {
  async getBusiness() { return structuredClone(businessConfig); },
  async getDashboard() { return structuredClone(mockDashboard); },
  async getBookingSlots(input) { return generatePreviewSlots(businessConfig, mockDashboard, input); },
};

```

## dist/js/shared/branding.js

Place at: `courtline-app/dist/js/shared/branding.js`.

```javascript
/** Default editable tenant logo. Brand artwork is separate from Iconsax UI icons. */
export function brandMark() {
  return '<svg class="brand-symbol" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="15" fill="currentColor"/><g fill="var(--brand)"><ellipse cx="11" cy="9" rx="2.1" ry="2.7" transform="rotate(-30 11 9)"/><ellipse cx="22" cy="11" rx="2.3" ry="2.6" transform="rotate(35 22 11)"/><circle cx="15" cy="18" r="2.7"/><ellipse cx="7" cy="21" rx="1.8" ry="2.5" transform="rotate(-25 7 21)"/><ellipse cx="23" cy="24" rx="2" ry="2.5" transform="rotate(40 23 24)"/></g></svg>';
}

```

## dist/js/shared/components.js

Place at: `courtline-app/dist/js/shared/components.js`.

```javascript
import { hydrateIcons } from './icons.js';

/** Escape external text before interpolating into component HTML. */
export function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }

export function badge(label, tone = 'neutral', dot = false) {
  const safeTone = ['success', 'warning', 'neutral'].includes(tone) ? tone : 'neutral';
  return `<span class="badge badge-${safeTone}">${dot ? '<span class="status-dot"></span>' : ''}${escapeHTML(label)}</span>`;
}

export function createDialogController(dialog) {
  let opener;
  const close = () => dialog.close();
  dialog.querySelector('[data-close-dialog]').addEventListener('click', close);
  // Keep the loop explicit, including dialogs with only a close button.
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')].filter(el => !el.hidden && el.getClientRects().length);
    const first = focusable[0], last = focusable.at(-1);
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
  });
  dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus(); });
  return {
    open(title, html) {
      if (!dialog.open) opener = document.activeElement;
      dialog.querySelector('#dialog-title').textContent = title;
      dialog.querySelector('#dialog-content').innerHTML = html;
      hydrateIcons(dialog);
      dialog.scrollTop = 0;
      if (!dialog.open) dialog.showModal();
      dialog.querySelector('[data-close-dialog]').focus();
    },
    close,
  };
}

export function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  clearTimeout(showToast.timer);
  toast.textContent = message;
  toast.hidden = false;
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 4500);
}

/** Contrast utility used by the live branding preview. */
export function contrastRatio(hexA, hexB) {
  const luminance = hex => {
    const channels = hex.match(/[a-f\d]{2}/gi).map(c => parseInt(c, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  const a = luminance(hexA), b = luminance(hexB);
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}

```

## dist/js/shared/icons.js

Place at: `courtline-app/dist/js/shared/icons.js`.

```javascript
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

```

## dist/js/shared/iconsax-linear.js

Place at: `courtline-app/dist/js/shared/iconsax-linear.js`.

```javascript
/** Iconsax Linear · selected free icons from official iconsax@0.1.1.
 * Copyright Iconsax. https://iconsax.io/ · See THIRD_PARTY_NOTICES.md.
 * Generated by scripts/sync-icons.mjs; retain the Linear variant.
 */
export const iconsaxLinear = Object.freeze({
  "category": "<path d=\"M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "calendar": "<path d=\"M8 2V5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M16 2V5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M3.5 9.08984H20.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.6947 13.6992H15.7037\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.6947 16.6992H15.7037\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.9955 13.6992H12.0045\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.9955 16.6992H12.0045\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M8.29431 13.6992H8.30329\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M8.29431 16.6992H8.30329\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "people": "<path d=\"M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M16.9699 14.4402C18.3399 14.6702 19.8499 14.4302 20.9099 13.7202C22.3199 12.7802 22.3199 11.2402 20.9099 10.3002C19.8399 9.59016 18.3099 9.35016 16.9399 9.59016\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M6.99994 14.4402C5.62994 14.6702 4.11994 14.4302 3.05994 13.7202C1.64994 12.7802 1.64994 11.2402 3.05994 10.3002C4.12994 9.59016 5.65994 9.35016 7.02994 9.59016\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12.0001 14.6297C11.9401 14.6197 11.8701 14.6197 11.8101 14.6297C10.4301 14.5797 9.33008 13.4497 9.33008 12.0497C9.33008 10.6197 10.4801 9.46973 11.9101 9.46973C13.3401 9.46973 14.4901 10.6297 14.4901 12.0497C14.4801 13.4497 13.3801 14.5897 12.0001 14.6297Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M9.09021 17.7794C7.68021 18.7194 7.68021 20.2594 9.09021 21.1994C10.6902 22.2694 13.3102 22.2694 14.9102 21.1994C16.3202 20.2594 16.3202 18.7194 14.9102 17.7794C13.3202 16.7194 10.6902 16.7194 9.09021 17.7794Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "monitor": "<path d=\"M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12 17.2207V22.0007\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 13H22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.5 22H16.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "cup": "<path d=\"M12.15 16.5V18.6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"/> <path d=\"M6.15002 22H18.15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5.47004 11.6496C4.72004 11.4096 4.06004 10.9696 3.54004 10.4496C2.64004 9.44961 2.04004 8.24961 2.04004 6.84961C2.04004 5.44961 3.14004 4.34961 4.54004 4.34961H5.19004C4.99004 4.80961 4.89004 5.31961 4.89004 5.84961V8.84961C4.89004 9.84961 5.10004 10.7896 5.47004 11.6496Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M18.53 11.6496C19.28 11.4096 19.94 10.9696 20.46 10.4496C21.36 9.44961 21.96 8.24961 21.96 6.84961C21.96 5.44961 20.86 4.34961 19.46 4.34961H18.81C19.01 4.80961 19.11 5.31961 19.11 5.84961V8.84961C19.11 9.84961 18.9 10.7896 18.53 11.6496Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "flag": "<path d=\"M5.15002 2V22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "ticket": "<path d=\"M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M10 4L10 20\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"5 5\"/>",
  "chart-2": "<path d=\"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "user": "<path d=\"M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "layer": "<path d=\"M13.01 2.92031L18.91 5.54031C20.61 6.29031 20.61 7.53031 18.91 8.28031L13.01 10.9003C12.34 11.2003 11.24 11.2003 10.57 10.9003L4.67002 8.28031C2.97002 7.53031 2.97002 6.29031 4.67002 5.54031L10.57 2.92031C11.24 2.62031 12.34 2.62031 13.01 2.92031Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "setting-2": "<path d=\"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 12.8794V11.1194C2 10.0794 2.85 9.21945 3.9 9.21945C5.71 9.21945 6.45 7.93945 5.54 6.36945C5.02 5.46945 5.33 4.29945 6.24 3.77945L7.97 2.78945C8.76 2.31945 9.78 2.59945 10.25 3.38945L10.36 3.57945C11.26 5.14945 12.74 5.14945 13.65 3.57945L13.76 3.38945C14.23 2.59945 15.25 2.31945 16.04 2.78945L17.77 3.77945C18.68 4.29945 18.99 5.46945 18.47 6.36945C17.56 7.93945 18.3 9.21945 20.11 9.21945C21.15 9.21945 22.01 10.0694 22.01 11.1194V12.8794C22.01 13.9194 21.16 14.7794 20.11 14.7794C18.3 14.7794 17.56 16.0594 18.47 17.6294C18.99 18.5394 18.68 19.6994 17.77 20.2194L16.04 21.2094C15.25 21.6794 14.23 21.3994 13.76 20.6094L13.65 20.4194C12.75 18.8494 11.27 18.8494 10.36 20.4194L10.25 20.6094C9.78 21.3994 8.76 21.6794 7.97 21.2094L6.24 20.2194C5.33 19.6994 5.02 18.5294 5.54 17.6294C6.45 16.0594 5.71 14.7794 3.9 14.7794C2.85 14.7794 2 13.9194 2 12.8794Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "notification": "<path d=\"M12.02 2.91016C8.70997 2.91016 6.01997 5.60016 6.01997 8.91016V11.8002C6.01997 12.4102 5.75997 13.3402 5.44997 13.8602L4.29997 15.7702C3.58997 16.9502 4.07997 18.2602 5.37997 18.7002C9.68997 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702L18.58 13.8602C18.28 13.3402 18.02 12.4102 18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M13.87 3.19945C13.56 3.10945 13.24 3.03945 12.91 2.99945C11.95 2.87945 11.03 2.94945 10.17 3.19945C10.46 2.45945 11.18 1.93945 12.02 1.93945C12.86 1.93945 13.58 2.45945 13.87 3.19945Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.02 19.0605C15.02 20.7105 13.67 22.0605 12.02 22.0605C11.2 22.0605 10.44 21.7205 9.90002 21.1805C9.36002 20.6405 9.02002 19.8805 9.02002 19.0605\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"/>",
  "arrow-down-02": "<path d=\"M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "add": "<path d=\"M6 12H18\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12 18V6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "clock": "<path d=\"M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.71 15.1798L12.61 13.3298C12.07 13.0098 11.63 12.2398 11.63 11.6098V7.50977\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "location": "<path d=\"M12 13.4295C13.7231 13.4295 15.12 12.0326 15.12 10.3095C15.12 8.58633 13.7231 7.18945 12 7.18945C10.2769 7.18945 8.88 8.58633 8.88 10.3095C8.88 12.0326 10.2769 13.4295 12 13.4295Z\" stroke=\"currentColor\" stroke-width=\"1.5\"/> <path d=\"M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z\" stroke=\"currentColor\" stroke-width=\"1.5\"/>",
  "medal": "<path d=\"M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.51999 13.5198L7.51001 20.8998C7.51001 21.7998 8.14001 22.2398 8.92001 21.8698L11.6 20.5999C11.82 20.4899 12.19 20.4899 12.41 20.5999L15.1 21.8698C15.87 22.2298 16.51 21.7998 16.51 20.8998V13.3398\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "info-circle": "<path d=\"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12 8V13\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.9945 16H12.0035\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "close-circle": "<path d=\"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M9.17004 14.8299L14.83 9.16992\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M14.83 14.8299L9.17004 9.16992\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "more-square": "<path d=\"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.9965 12H16.0054\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.9955 12H12.0045\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.99451 12H8.00349\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "tick-circle": "<path d=\"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.75 11.9999L10.58 14.8299L16.25 9.16992\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "sun": "<path d=\"M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
});

```

## package.json

Place at: `courtline-app/package.json`.

```json
{
  "name": "pickleball-frontend-starter",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "description": "Stage 1 configurable pickleball frontend, without runtime dependencies",
  "scripts": {
    "dev": "node scripts/serve.mjs",
    "check": "node scripts/check.mjs",
    "code": "node scripts/export-code.mjs"
  },
  "engines": { "node": ">=20" }
}

```

## scripts/check.mjs

Place at: `courtline-app/scripts/check.mjs`.

```javascript
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

```

## scripts/export-code.mjs

Place at: `courtline-app/scripts/export-code.mjs`.

```javascript
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

```

## scripts/serve.mjs

Place at: `courtline-app/scripts/serve.mjs`.

```javascript
/** Development-only static file server. No backend APIs or persistence. */
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.json': 'application/json' };
const port = Number(process.env.PORT || 4173);
const server = http.createServer(async (req, res) => {
  try {
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end('Method not allowed'); return; }
    const url = new URL(req.url, 'http://localhost');
    const requested = decodeURIComponent(url.pathname);
    const file = path.resolve(root, `.${requested.endsWith('/') ? `${requested}index.html` : requested}`);
    const relative = path.relative(root, file);
    if (relative.startsWith('..') || path.isAbsolute(relative)) { res.writeHead(403); res.end('Forbidden'); return; }
    const content = await fs.readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) { res.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 400); res.end('File not found'); }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}\nServing dist/ · development only`));

```

## scripts/sync-icons.mjs

Place at: `courtline-app/scripts/sync-icons.mjs`.

```javascript
/** Imports selected free Linear SVGs from the official, pinned Iconsax package.
 * npm pack iconsax@0.1.1 --ignore-scripts --pack-destination .preview
 * node scripts/sync-icons.mjs .preview/iconsax-0.1.1.tgz
 * No package code executes and no runtime dependency is installed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
const root = fileURLToPath(new URL('../', import.meta.url));
const expectedIntegrity = '/HXomG+SuhytKH/Yw4ZdunDGyWP02Osuk/pjony1k9CCMOsg7dUpnomu7HZUOHNu0yK0b3phErjH2IgUTJFjPA==';
if (!process.argv[2]) throw new Error('Provide the local iconsax-0.1.1.tgz path.');
const archive = await fs.readFile(process.argv[2]);
if (createHash('sha512').update(archive).digest('base64') !== expectedIntegrity) throw new Error('Archive does not match pinned iconsax@0.1.1.');
// Read regular tar entries in memory; never extract archive paths to disk.
const tar = gunzipSync(archive), files = new Map();
for (let offset = 0; offset + 512 <= tar.length;) {
  const header = tar.subarray(offset, offset + 512);
  const name = header.toString('utf8', 0, 100).replace(/\0.*$/, '');
  if (!name) break;
  const size = parseInt(header.toString('ascii', 124, 136).replace(/\0.*$/, '').trim(), 8) || 0;
  if (header[156] === 0 || header[156] === 48) files.set(name, tar.toString('utf8', offset + 512, offset + 512 + size));
  offset += 512 + Math.ceil(size / 512) * 512;
}
const manifest = JSON.parse(files.get('package/dist/manifest.json'));
const names = ['category', 'calendar', 'people', 'monitor', 'cup', 'flag', 'ticket', 'chart-2', 'user', 'layer', 'setting-2', 'notification', 'arrow-down-02', 'add', 'clock', 'location', 'medal', 'info-circle', 'close-circle', 'more-square', 'tick-circle', 'sun'];
const selected = {};
for (const name of names) {
  const metadata = manifest[name];
  if (!metadata?.styles.includes('linear')) throw new Error(`Missing Linear icon: ${name}`);
  const category = JSON.parse(files.get(`package/dist/data/${metadata.category}.json`));
  const svg = category[name].linear;
  // Remove redundant 24x24 viewport clips and repeated IDs. Preserve geometry.
  const body = svg.replace(/<svg\b[^>]*>|<\/svg>/g, '').replace(/<defs>[\s\S]*?<\/defs>/g, '').replace(/\sclip-path="[^"]*"/g, '').replace(/<\/?g\b[^>]*>/g, '').replace(/(stroke|fill)="white"/g, '$1="currentColor"').trim();
  if (/\bid=|url\(|<script|<image|<foreignObject|\bon\w+=/i.test(body)) throw new Error(`Unexpected SVG content: ${name}`);
  selected[name] = body;
}
const header = '/** Iconsax Linear · selected free icons from official iconsax@0.1.1.\n * Copyright Iconsax. https://iconsax.io/ · See THIRD_PARTY_NOTICES.md.\n * Generated by scripts/sync-icons.mjs; retain the Linear variant.\n */\n';
await fs.writeFile(path.join(root, 'dist/js/shared/iconsax-linear.js'), `${header}export const iconsaxLinear = Object.freeze(${JSON.stringify(selected, null, 2)});\n`);
// Native select uses the same official chevron, embedded in the application CSS.
const selectSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">${selected['arrow-down-02'].replaceAll('currentColor', '#68766f')}</svg>`;
const cssPath = path.join(root, 'dist/css/components.css');
const css = await fs.readFile(cssPath, 'utf8');
const pattern = /(\.field select \{[^\n]*background-image: )url\("[^"]*"\)/;
if (!pattern.test(css)) throw new Error('Cannot locate the select icon background.');
await fs.writeFile(cssPath, css.replace(pattern, (_, prefix) => `${prefix}url("data:image/svg+xml,${encodeURIComponent(selectSVG)}")`));
console.log(`Imported ${names.length} Iconsax Linear icons and matching select chevron.`);

```

## vercel.json

Place at: `courtline-app/vercel.json`.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "dist"
}

```

