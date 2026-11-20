# Stage 1 · Complete code

Create `courtline-app/`, then place every file at the relative path shown below. No npm dependencies are required. Run `npm run dev` inside that folder and open http://127.0.0.1:4173/. Do not open the HTML using file:// because it uses JavaScript modules.

This is a frontend preview. All data is fictional. Business preview changes live only in memory. Booking, queue, scoring, leaderboard, tournaments, authentication, admin, facility display, and PWA installation are later stages.

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

## dist/assets/mark.svg

Place at: `courtline-app/dist/assets/mark.svg`.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#183d35"/><g transform="rotate(-25 32 32)" fill="none" stroke="#d5ee95" stroke-width="3"><rect x="17" y="11" width="30" height="42" rx="2"/><path d="M17 26h30M17 38h30M32 11v15m0 12v15M13 32h38"/></g></svg>

```

## dist/css/components.css

Place at: `courtline-app/dist/css/components.css`.

```css
.icon { width: 1.25rem; height: 1.25rem; flex: 0 0 auto; }
[data-icon] { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.button { display: inline-flex; justify-content: center; align-items: center; gap: .6rem; min-height: 2.875rem; padding: .7rem 1.15rem; border: 1px solid transparent; border-radius: var(--radius-sm); text-decoration: none; font-size: .875rem; font-weight: 650; transition: background var(--transition), transform var(--transition), box-shadow var(--transition); }
.button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 3px 10px #173b3110; }
.button:active:not(:disabled) { transform: translateY(0); }
.button-primary { color: white; background: var(--brand); }
.button-primary:hover { background: var(--brand-hover); }
.button-lime { color: var(--accent-ink); background: var(--accent); }
.button-lime:hover { filter: brightness(1.04); }
.button-outline { border-color: var(--line); color: var(--ink); background: transparent; }
.button-outline:hover { background: var(--canvas); }
.button-full { width: 100%; }
.text-button { border: 0; background: transparent; padding: .5rem 0; color: var(--brand); font-size: .875rem; font-weight: 650; text-decoration: underline; text-underline-offset: .25rem; text-decoration-color: transparent; transition: text-decoration-color var(--transition); }
.text-button:hover { text-decoration-color: currentColor; }
.icon-button { display: inline-flex; align-items: center; justify-content: center; width: 2.75rem; height: 2.75rem; border: 1px solid var(--line); border-radius: 50%; background: var(--surface); }
.icon-button:hover { background: var(--brand-soft); }
.icon-soft { color: var(--muted); }
.icon-soft .icon { width: 1.125rem; height: 1.125rem; }
.badge { display: inline-flex; align-items: center; gap: .375rem; padding: .3rem .6rem; border-radius: .375rem; font-size: .75rem; font-weight: 600; white-space: nowrap; line-height: 1.4; }
.badge-success { color: var(--success); background: var(--success-bg); }
.badge-warning { color: var(--warning); background: var(--warning-bg); }
.badge-neutral { color: var(--muted); background: #f0f3f1; }
.status-dot { display: inline-block; width: .375rem; height: .375rem; flex: 0 0 auto; border-radius: 50%; background: currentColor; }
.panel { padding: 1.4rem; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.card-heading { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.card-heading h2 { font-size: 1rem; letter-spacing: -.02em; }
.card-heading p { margin-top: .4rem; color: var(--muted); font-size: .875rem; }
.segmented-control { display: inline-flex; padding: .25rem; gap: .125rem; background: #e9eeeb; border-radius: .65rem; }
.segmented-control button { min-height: 2.375rem; border: 0; padding: .45rem .9rem; border-radius: .45rem; background: transparent; color: var(--muted); font-size: .875rem; font-weight: 550; white-space: nowrap; }
.segmented-control button.selected { background: white; color: var(--brand); box-shadow: 0 1px 5px #173b310d; }
.segmented-control button:hover { color: var(--brand); }
.avatar { display: inline-flex; justify-content: center; align-items: center; width: 2.375rem; height: 2.375rem; border-radius: 50%; color: var(--brand); background: #e8ecdf; font-size: .8rem; font-weight: 650; border: 2px solid white; }
.avatar-stack { display: inline-flex; padding-left: 0; }
.avatar-stack b { display: inline-flex; align-items: center; justify-content: center; width: 1.8rem; height: 1.8rem; background: #c9d6c0; border: 2px solid #254b3e; color: #244336; border-radius: 50%; font-size: .75rem; margin-left: -.45rem; }
.avatar-stack b:first-child { margin-left: 0; background: #ead4b8; }
.avatar-stack b:last-child { background: #b7c6d9; }
.subtle { color: var(--muted); }
.eyebrow { font-size: .75rem; font-weight: 650; letter-spacing: .14em; color: var(--muted); }
.notice { padding: 1rem; border-radius: var(--radius-sm); background: var(--brand-soft); color: var(--brand); font-size: .875rem; }
.error-notice { background: var(--danger-bg); color: var(--danger); margin-bottom: 1rem; }
.notice p + p { margin-top: .5rem; }
.noscript-notice { position: fixed; bottom: 1rem; left: 1rem; right: 1rem; z-index: 90; }
.field { display: grid; gap: .45rem; margin-bottom: 1.1rem; }
.field label, .field-label { font-size: .875rem; font-weight: 600; }
.field input, .field select, .field textarea { width: 100%; border: 1px solid #cbd5ce; background: white; color: var(--ink); border-radius: var(--radius-sm); padding: .7rem .85rem; min-height: 2.875rem; }
.field input[type="color"] { padding: .3rem; }
.field select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%2368766f' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right .7rem center; padding-right: 2.5rem; }
.field textarea { resize: vertical; min-height: 5rem; }
.field small { color: var(--muted); font-size: .8125rem; }
.field [aria-invalid="true"] { border-color: var(--danger); }
.field .field-error { color: var(--danger); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1.5rem; }
.dialog { width: min(34rem, calc(100% - 2rem)); max-height: calc(100dvh - 3rem); padding: 0; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: var(--radius-lg); box-shadow: 0 24px 100px #09221e44; }
.dialog::backdrop { background: #102c2766; backdrop-filter: blur(3px); }
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
.detail-list dd { margin: 0; text-align: right; font-weight: 600; }
.dialog-feature-icon { width: 3.5rem; height: 3.5rem; display: grid; place-items: center; margin-bottom: 1rem; border-radius: .875rem; color: var(--brand); background: var(--brand-soft); }
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

```

## dist/css/dashboard.css

Place at: `courtline-app/dist/css/dashboard.css`.

```css
.sidebar { display: none; }
.app-content { min-width: 0; }
.topbar { height: 4.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; background: var(--surface); border-bottom: 1px solid var(--line); padding: 0 1rem; }
.brand { display: flex; align-items: center; gap: .55rem; color: var(--brand); font-size: 1.45rem; font-weight: 750; letter-spacing: -.06em; text-decoration: none; }
.brand-mark .icon { width: 1.65rem; height: 1.65rem; }
.brand img { max-width: 2rem; max-height: 2rem; object-fit: contain; }
.brand [data-business-name] { min-width: 0; overflow-wrap: anywhere; line-height: 1.15; }
.mobile-brand [data-business-name] { max-width: 8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.brand-period { color: #799b50; margin-left: -.55rem; }
.breadcrumb { display: none; color: var(--muted); font-size: .875rem; }
.breadcrumb span { color: #a8b4ad; padding: 0 .8rem; }
.breadcrumb strong { color: var(--ink); font-weight: 500; }
.topbar-actions { display: flex; align-items: center; gap: .8rem; }
.demo-pill { border: 1px solid var(--line); color: var(--muted); border-radius: 2rem; font-size: .75rem; padding: .3rem .6rem; white-space: nowrap; }
.notification-button { position: relative; border: 0; }
.notification-dot { position: absolute; right: .8rem; top: .7rem; width: .35rem; height: .35rem; background: #c06e46; border: 1px solid white; border-radius: 50%; }
.profile-trigger { display: flex; align-items: center; gap: .65rem; padding: .2rem; background: transparent; border: 0; }
.profile-name, .profile-chevron { display: none; font-size: .875rem; }
main { max-width: 100rem; margin: 0 auto; padding: 1.5rem 1rem 1rem; }
.page-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.65rem; }
.page-heading h1 { margin-top: .35rem; }
.greeting-wave { display: inline-block; margin-left: .55rem; font-size: 1.8rem; font-weight: 400; color: #7b9957; vertical-align: .15rem; }
.page-heading p { margin-top: .5rem; color: var(--muted); font-size: .9375rem; }
.today-label { display: none; align-items: center; gap: .5rem; color: var(--muted); font-size: .8125rem; }
.today-label .subtle { padding-left: .5rem; border-left: 1px solid #cbd5ce; font-size: .75rem; }
.hero-grid { display: grid; gap: 1rem; }
.play-hero { overflow: hidden; min-height: 21rem; position: relative; border-radius: var(--radius-lg); background: var(--brand); color: white; isolation: isolate; }
.hero-copy { position: relative; z-index: 1; padding: 1.75rem; }
.hero-tag { display: inline-flex; align-items: center; gap: .5rem; color: #d2e2c1; font-size: .75rem; font-weight: 600; letter-spacing: .14em; }
.hero-tag .status-dot { width: .3rem; height: .3rem; background: var(--accent); }
.play-hero h2 { margin-top: .8rem; font-size: clamp(2.5rem, 5vw, 3.1rem); font-weight: 550; letter-spacing: -.055em; line-height: 1.04; }
.play-hero h2 em { font-style: normal; color: var(--accent); }
.play-hero p { margin-top: .9rem; max-width: 16rem; font-size: .875rem; color: #c7d8d0; line-height: 1.65; }
.play-hero .button { margin-top: 1.2rem; padding: .6rem 1rem; min-height: 2.75rem; }
.hero-footnote { display: flex; align-items: center; gap: .6rem; margin-top: 1.35rem; font-size: .75rem; color: #d7e2dc; }
.hero-footnote > span:last-child { max-width: 10rem; }
.hero-footnote strong { color: white; font-weight: 600; }
.hero-art { position: absolute; width: 26rem; right: -15rem; top: .7rem; opacity: .55; z-index: -1; }
.hero-art svg { width: 100%; }
.art-caption { position: absolute; bottom: .8rem; right: 3rem; font-size: .75rem; letter-spacing: .18em; color: #bdd0be; }
.next-session { display: flex; flex-direction: column; padding: 1.4rem; }
#next-booking { display: flex; flex-direction: column; flex: 1; }
.booking-date { display: flex; align-items: center; gap: 1rem; padding: 1.4rem 0 1rem; }
.date-tile { display: grid; place-items: center; min-width: 3.25rem; height: 3.5rem; padding: .4rem; border-radius: .6rem; color: var(--brand); background: var(--brand-soft); }
.date-tile span { font-size: .75rem; line-height: 1; letter-spacing: .06em; }
.date-tile strong { font-size: 1.5rem; font-weight: 650; line-height: 1.2; }
.booking-date h3 { font-size: 1.125rem; }
.booking-date p { font-size: .875rem; color: var(--muted); margin-top: .3rem; }
.booking-info { display: flex; align-items: center; gap: .55rem; margin-top: .6rem; color: var(--muted); font-size: .875rem; }
.booking-info .icon { width: 1rem; height: 1rem; }
.booking-bottom { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; margin-top: .9rem; border-top: 1px solid var(--line); }
.booking-bottom .badge { font-size: .75rem; }
.booking-format { color: var(--muted); font-size: .8125rem; }
.next-session .button { margin-top: auto; min-height: 2.65rem; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin-top: 1rem; }
.stat-card { padding: 1.1rem; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
.stat-top { display: flex; align-items: center; gap: .55rem; font-size: .75rem; color: var(--muted); }
.stat-icon { display: inline-flex; color: var(--brand); }
.stat-icon .icon { width: 1rem; height: 1rem; }
.stat-value { display: flex; align-items: baseline; gap: .45rem; margin-top: .65rem; }
.stat-value strong { font-size: 1.8rem; line-height: 1; font-weight: 600; letter-spacing: -.05em; }
.stat-value span { color: var(--muted); font-size: .8125rem; }
.stat-caption { margin-top: .55rem; color: var(--muted); font-size: .75rem; }
.stat-caption.positive { color: var(--success); }
.court-section { margin-top: 2rem; }
.section-heading { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.15rem; }
.section-title-line { display: flex; align-items: center; gap: .7rem; }
.section-title-line h2 { font-size: 1.25rem; }
.section-title-line .badge { font-size: .75rem; }
.section-heading p { color: var(--muted); font-size: .875rem; margin-top: .4rem; }
.court-grid { display: grid; gap: .85rem; }
.court-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; transition: box-shadow var(--transition), transform var(--transition); }
.court-card:hover { box-shadow: 0 5px 22px #173b3110; transform: translateY(-2px); }
.court-visual { position: relative; display: grid; place-items: center; height: 8rem; background: #edf1ed; }
.court-visual.in-use { background: #f1f0ea; }
.court-visual.maintenance { background: #eef0f1; }
.court-visual > .badge { position: absolute; right: .65rem; top: .65rem; font-size: .875rem; background: #ffffffed; }
.court-diagram { width: 8.75rem; height: 5.3rem; padding: .6rem; border-radius: .25rem; background: #b1c3a6; transform: rotate(-9deg); box-shadow: 0 5px 0 #a1b396; }
.court-visual.in-use .court-diagram { background: #c0c4ab; box-shadow: 0 5px 0 #acb098; }
.court-visual.maintenance .court-diagram { background: #bdc6c7; box-shadow: 0 5px 0 #aab5b6; }
.court-lines { position: relative; display: flex; width: 100%; height: 100%; border: 1.5px solid #ffffffe0; background: #5d8064; }
.court-lines::before { content: ""; position: absolute; inset: -5px auto -5px 50%; z-index: 1; width: 2px; background: #fff; box-shadow: 2px 0 0 #34534144; }
.court-lines::after { content: ""; position: absolute; left: 34%; right: 34%; top: 0; bottom: 0; background: #a5b88a; border-left: 1px solid #ffffffe0; border-right: 1px solid #ffffffe0; }
.court-lines i { position: absolute; height: 1px; width: 100%; top: 50%; background: #ffffffe0; }
.court-visual.in-use .court-lines { background: #7e8468; }
.court-visual.in-use .court-lines::after { background: #b5b995; }
.court-visual.maintenance .court-lines { background: #849697; }
.court-visual.maintenance .court-lines::after { background: #adbdbe; }
.court-details { padding: 1rem 1.1rem .8rem; }
.court-title-row { display: flex; justify-content: space-between; align-items: center; gap: .5rem; }
.court-type { font-size: .75rem; color: var(--muted); }
.court-details > p { margin-top: .4rem; color: var(--muted); font-size: .8125rem; }
.court-card-footer { display: flex; justify-content: space-between; align-items: center; gap: .5rem; padding-top: .7rem; margin-top: .7rem; border-top: 1px solid var(--line); }
.court-price { font-size: .8125rem; font-weight: 650; }
.court-price small { font-size: .75rem; color: var(--muted); font-weight: 400; }
.court-card .text-button { font-size: .8125rem; min-height: 2rem; }
.section-footnote { display: flex; gap: .4rem; align-items: center; color: var(--muted); font-size: .75rem; margin-top: .85rem; }
.section-footnote .icon { width: .875rem; height: .875rem; }
.lower-grid { display: grid; gap: 1rem; margin-top: 1.75rem; }
.activity-body { display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: end; margin-top: 1.5rem; }
.activity-summary { flex: 1; }
.activity-summary strong { font-size: 2rem; font-weight: 600; line-height: 1; letter-spacing: -.05em; }
.activity-summary strong span { font-size: .875rem; color: var(--muted); font-weight: 400; margin-left: .4rem; letter-spacing: 0; }
.activity-summary p { font-size: .8125rem; color: var(--muted); margin-top: .4rem; }
.positive-chip { display: block; margin: .8rem 0 .35rem; font-size: .75rem; color: var(--success); }
.activity-summary .text-button { font-size: .8125rem; }
.activity-chart { display: flex; gap: .5rem; height: 8rem; flex: 1.3; min-width: 10rem; }
.chart-column { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: .55rem; }
.chart-track { height: 6rem; width: 100%; display: flex; align-items: flex-end; border-radius: .25rem; background-image: repeating-linear-gradient(to top, transparent 0, transparent calc(33.3% - 1px), #edf0ed calc(33.3% - 1px), #edf0ed 33.3%); }
.chart-bar { width: 70%; max-width: 1.65rem; margin: 0 auto; border-radius: .25rem .25rem 0 0; background: #c4d4b8; height: var(--bar-height); min-height: 3px; }
.chart-column:last-child .chart-bar { background: var(--brand); }
.chart-column span { color: var(--muted); font-size: .75rem; }
.chart-column:last-child span { color: var(--brand); font-weight: 600; }
.community-panel .badge { font-size: .75rem; letter-spacing: .04em; }
.event-content { display: flex; align-items: flex-start; gap: 1rem; margin-top: 1.5rem; }
.event-date { min-width: 3.4rem; padding: .65rem .5rem; display: grid; text-align: center; border-radius: .6rem; background: #f1f3ed; }
.event-date strong { font-size: 1.6rem; line-height: 1; font-weight: 600; }
.event-date span { color: var(--muted); font-size: .75rem; margin-top: .25rem; letter-spacing: .1em; }
.event-category { display: block; margin-bottom: .35rem; color: var(--success); font-size: .75rem; letter-spacing: .08em; font-weight: 600; }
.event-content h3 { font-size: .9375rem; }
.event-content p { color: var(--muted); margin-top: .3rem; font-size: .8125rem; }
.event-meta { display: flex; gap: .35rem; align-items: center; color: var(--muted); font-size: .75rem; margin-top: .65rem; }
.event-meta .icon { width: .875rem; height: .875rem; }
.event-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: .5rem; margin-top: 1.25rem; padding-top: .85rem; border-top: 1px solid var(--line); }
.event-footer > span { display: inline-flex; gap: .4rem; align-items: center; color: var(--muted); font-size: .75rem; }
.event-footer .text-button { font-size: .8125rem; }
.page-footer { display: flex; justify-content: space-between; gap: .7rem; flex-wrap: wrap; margin: 1.75rem 0 5rem; color: var(--muted); font-size: .75rem; }
.footer-dot { padding: 0 .4rem; }
.bottom-nav { display: flex; align-items: center; justify-content: space-around; position: fixed; bottom: 0; left: 0; right: 0; z-index: 20; min-height: 4.5rem; padding: .4rem .5rem max(.4rem, env(safe-area-inset-bottom)); border-top: 1px solid var(--line); background: #fffffffa; backdrop-filter: blur(16px); }
.bottom-nav > * { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .25rem; min-height: 3rem; min-width: 3rem; border: 0; background: transparent; text-decoration: none; font-size: .75rem; color: var(--muted); border-radius: .5rem; }
.bottom-nav > [aria-current] { color: var(--brand); font-weight: 650; }
.bottom-nav > [aria-current] > span { border-radius: 2rem; background: var(--brand-soft); padding: .2rem .8rem; }
.bottom-nav .icon { width: 1.2rem; height: 1.2rem; }
.more-menu { display: grid; gap: .5rem; }
.more-menu .button { justify-content: flex-start; }
@media (min-width: 600px) {
  main { padding: 2rem; }
  .topbar { padding: 0 2rem; }
  .profile-name, .profile-chevron { display: inline-flex; }
  .hero-art { right: -2rem; width: 25rem; top: -.5rem; opacity: .9; }
  .hero-copy { padding: 2rem; }
  .hero-footnote > span:last-child { max-width: none; }
  .play-hero p { max-width: 16rem; }
  .court-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .next-session { padding: 1.5rem; }
  .booking-date { padding-top: 1.25rem; }
  .activity-body { flex-wrap: nowrap; }
}
@media (min-width: 900px) {
  .app-shell { display: grid; grid-template-columns: var(--sidebar-width) minmax(0,1fr); }
  .sidebar { display: flex; flex-direction: column; height: 100dvh; position: sticky; top: 0; padding: 2rem 1rem 1rem; background: var(--surface); border-right: 1px solid var(--line); overflow-y: auto; }
  .sidebar .brand { margin-left: .8rem; font-size: 1.8rem; }
  .sidebar .brand-mark .icon { width: 1.9rem; height: 1.9rem; }
  .workspace-label { margin: .65rem .8rem 2.25rem; font-size: .75rem; color: var(--muted); letter-spacing: .13em; font-weight: 600; }
  .primary-nav { display: grid; gap: .3rem; }
  .nav-item { display: flex; align-items: center; gap: .8rem; width: 100%; min-height: 2.9rem; padding: .7rem .9rem; border: 0; background: transparent; border-radius: .55rem; text-align: left; text-decoration: none; font-size: .875rem; color: var(--muted); }
  .nav-item .icon { width: 1.15rem; height: 1.15rem; }
  .nav-item:hover { color: var(--brand); background: #f4f6f3; }
  .nav-item.active { background: var(--brand); color: white; font-weight: 550; }
  .nav-soon { margin-left: auto; border-radius: .25rem; color: var(--muted); background: #f0f3ee; padding: .1rem .3rem; font-size: .75rem; }
  .nav-section-label { margin: 2rem .9rem .6rem; font-size: .75rem; letter-spacing: .1em; color: #7b8881; font-weight: 650; }
  .sidebar-bottom { margin-top: auto; padding-top: 2.5rem; }
  .sidebar-note { position: relative; overflow: hidden; padding: 1rem .9rem; margin: 0 .3rem .85rem; background: #f1f4ec; border-radius: .7rem; }
  .sidebar-note strong { display: block; max-width: 8rem; font-size: .875rem; line-height: 1.4; font-weight: 600; letter-spacing: -.02em; }
  .sidebar-note p { margin-top: .5rem; color: var(--muted); font-size: .75rem; }
  .small-court { position: absolute; width: 3rem; height: 4rem; border: 1px solid #cad6bc; top: -.5rem; right: -.75rem; transform: rotate(30deg); }
  .small-court::before { content: ""; position: absolute; inset: 40% 0; border-block: 1px solid #cad6bc; }
  .mobile-brand { display: none; }
  .breadcrumb { display: block; }
  .topbar { height: 4.75rem; }
  .bottom-nav { display: none; }
  .page-footer { margin-bottom: 0; }
  .hero-grid { grid-template-columns: minmax(0,1fr); }
  .stats-grid { grid-template-columns: repeat(4,minmax(0,1fr)); }
  .stat-card { padding: 1.1rem; }
  .stat-top { font-size: .75rem; }
  .today-label { display: flex; }
  .today-label .subtle { display: none; }
}
@media (min-width: 1200px) {
  main { padding: 2rem 2.25rem; }
  .topbar { padding: 0 2.25rem; }
  .hero-grid { grid-template-columns: minmax(0, 1.95fr) minmax(16.5rem,1fr); gap: 1.25rem; }
  .next-session { display: flex; }
  .hero-copy { padding: 1.8rem; }
  .hero-art { width: 26rem; right: -7rem; top: -1.8rem; }
  .play-hero { min-height: 22rem; }
  .hero-footnote { margin-top: 1.2rem; }
  .hero-footnote > span:last-child { max-width: 9.5rem; }
  .stats-grid { gap: 1.1rem; margin-top: 1.25rem; }
  .stat-card { padding: 1.15rem 1.25rem; }
  .stat-top { font-size: .8125rem; }
  .stat-value strong { font-size: 2rem; }
  .court-grid { grid-template-columns: repeat(4,minmax(0,1fr)); gap: 1.1rem; }
  .court-type { font-size: .75rem; }
  .lower-grid { grid-template-columns: 1.12fr 1fr; gap: 1.25rem; }
  .today-label .subtle { display: inline; }
}
@media (min-width: 1450px) {
  :root { --sidebar-width: 16rem; }
  main { padding: 2rem 2.75rem; }
  .topbar { padding-inline: 2.75rem; }
  .hero-copy { padding: 2rem; }
  .hero-art { right: -1rem; width: 27rem; }
  .play-hero { min-height: 22.5rem; }
  .play-hero h2 { font-size: 3.2rem; }
  .hero-footnote > span:last-child { max-width: none; }
  .court-visual { height: 8.75rem; }
  .court-diagram { width: 9.25rem; height: 5.5rem; }
  .court-type { font-size: .75rem; }
}
@media (min-width: 1800px) { .hero-art { right: 1rem; width: 30rem; } }
@media (max-width: 360px) { .demo-pill { display: none; } .hero-copy { padding: 1.4rem; } .hero-art { right: -16rem; } .stat-card { padding: .9rem; } .activity-body { display: block; } .activity-chart { margin-top: 1rem; } }

```

## dist/css/design-system.css

Place at: `courtline-app/dist/css/design-system.css`.

```css
.library-header { max-width: 76rem; margin: auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.5rem; }
.library-main { max-width: 72rem; margin: 0 auto; padding: 1.5rem 1.5rem 4rem; }
.library-intro { max-width: 42rem; padding-block: 1rem; }
.library-intro h1 { font-size: clamp(2.5rem,7vw,4.5rem); margin-top: .75rem; color: var(--brand); }
.library-intro p { color: var(--muted); margin-top: 1.25rem; }
.library-nav { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; margin: 1.5rem 0 3rem; padding: 1rem 0; border-block: 1px solid var(--line); }
.library-nav a { padding: .5rem 0; font-size: .875rem; text-underline-offset: .25rem; color: var(--brand); }
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
/* Business colors are set from js/config/business.js. These are safe defaults. */
:root {
  color-scheme: light;
  --brand: #183d35;
  --brand-hover: #245347;
  --brand-soft: #eaf0eb;
  --accent: #d5ee95;
  --accent-ink: #183d35;
  --canvas: #f5f7f8;
  --surface: #ffffff;
  --ink: #202e2b;
  --muted: #68766f;
  --line: #e5eae7;
  --success: #397247;
  --success-bg: #edf5e8;
  --warning: #89611c;
  --warning-bg: #fff5df;
  --danger: #aa3636;
  --danger-bg: #fff0ef;
  --radius-sm: .5rem;
  --radius: .875rem;
  --radius-lg: 1.125rem;
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --font: "Segoe UI", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --shadow: 0 4px 24px #173b3109;
  --sidebar-width: 15.5rem;
  --transition: 160ms ease;
}
/* Layout breakpoints: 600px, 900px, 1200px, 1600px. */
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scrollbar-gutter: stable; }
body { margin: 0; background: var(--canvas); color: var(--ink); font: 1rem/1.5 var(--font); -webkit-font-smoothing: antialiased; }
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea { -webkit-tap-highlight-color: transparent; }
button, a { touch-action: manipulation; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; opacity: .5; }
a { color: inherit; }
button { color: inherit; }
h1, h2, h3, p { margin: 0; }
h1, h2, h3 { line-height: 1.2; }
h1 { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 650; letter-spacing: -.055em; }
h2 { font-size: 1.25rem; font-weight: 650; letter-spacing: -.035em; }
h3 { font-size: 1rem; font-weight: 650; letter-spacing: -.015em; }
svg { display: block; }
img { max-width: 100%; }
[hidden] { display: none !important; }
:focus-visible { outline: 3px solid #427fcb; outline-offset: 4px; }
::selection { background: var(--accent); color: var(--accent-ink); }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.skip-link { position: fixed; z-index: 100; top: -5rem; left: 1rem; background: var(--brand); color: white; padding: .8rem 1rem; border-radius: var(--radius-sm); }
.skip-link:focus { top: 1rem; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
}

```

## dist/design-system.html

Place at: `courtline-app/dist/design-system.html`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#183d35">
  <title>Component library · Pickleball frontend</title>
  <link rel="icon" href="assets/mark.svg" type="image/svg+xml">
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
    <section id="typography" class="library-section"><h2>Clear at every size</h2><p>System sans-serif fonts load immediately, without a third-party font request. Body copy starts at 16px. Rem units respect browser text settings.</p><div class="panel typography-sample"><span class="eyebrow">EYEBROW · A MOMENT TO PLAY</span><h1>Your next great game.</h1><h2>A little better, every game.</h2><h3>Ready when you are.</h3><p>Find a court, bring your people, and enjoy the rally.</p><span class="subtle">Secondary copy keeps the focus on your game.</span></div></section>
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
  <meta name="theme-color" content="#183d35">
  <meta name="description" content="Your pickleball day, all in one place. A configurable frontend dashboard demonstration.">
  <title>Home · Courtline</title>
  <link rel="icon" href="assets/mark.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/dashboard.css">
  <script type="module" src="js/app.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to dashboard</a>
  <div class="app-shell">
    <aside class="sidebar" aria-label="Application sidebar">
      <a class="brand" href="./" aria-label="Home"><span class="brand-mark" data-icon="brand"></span><span data-business-name>Courtline</span><span class="brand-period">.</span></a>
      <div class="workspace-label">YOUR GAME. YOUR COMMUNITY.</div>
      <nav aria-label="Main navigation" class="primary-nav">
        <a class="nav-item active" href="./" aria-current="page"><span data-icon="grid"></span>Overview</a>
        <button class="nav-item" data-feature="booking"><span data-icon="calendar"></span>Book a court<span class="nav-soon">Next</span></button>
        <button class="nav-item" data-feature="queue"><span data-icon="queue"></span>Live queue</button>
        <button class="nav-item" data-feature="scoring"><span data-icon="score"></span>Live matches</button>
        <button class="nav-item" data-feature="leaderboard"><span data-icon="trophy"></span>Leaderboard</button>
        <button class="nav-item" data-feature="tournaments"><span data-icon="flag"></span>Tournaments</button>
      </nav>
      <div class="nav-section-label">MY CORNER</div>
      <nav aria-label="Player navigation" class="primary-nav">
        <button class="nav-item" data-action="booking"><span data-icon="ticket"></span>My bookings</button>
        <button class="nav-item" data-feature="statistics"><span data-icon="chart"></span>My statistics</button>
        <button class="nav-item" data-action="profile"><span data-icon="user"></span>My profile</button>
      </nav>
      <div class="sidebar-bottom">
        <div class="sidebar-note"><span class="small-court" aria-hidden="true"></span><strong>A little play. A better day.</strong><p>Your next rally is waiting.</p></div>
      </div>
    </aside>

    <div class="app-content">
      <header class="topbar">
        <a class="mobile-brand brand" href="./"><span class="brand-mark" data-icon="brand"></span><span data-business-name>Courtline</span><span class="brand-period">.</span></a>
        <div class="breadcrumb">Your clubhouse <span>/</span> <strong>Overview</strong></div>
        <div class="topbar-actions"><span class="demo-pill">Sample data</span><button class="icon-button notification-button" data-action="notifications" aria-label="View sample notifications"><span data-icon="bell"></span><span class="notification-dot"></span></button><button class="profile-trigger" data-action="profile" aria-label="Open player profile"><span class="avatar" data-player-initials>AL</span><span class="profile-name" data-player-name>Alex Lee</span><span class="profile-chevron" data-icon="chevron"></span></button></div>
      </header>

      <main id="main" tabindex="-1">
        <div class="page-heading"><div><div class="eyebrow">LET’S GET YOU ON COURT</div><h1>Hey, <span data-player-first>Alex</span><span class="greeting-wave" aria-hidden="true">✳</span></h1><p>A good day starts with a great game.</p></div><div class="today-label"><span data-icon="calendar"></span><time id="demo-date" datetime="2026-11-20">Friday, November 20</time><span class="subtle">Demo day</span></div></div>

        <div id="load-error" class="notice error-notice" role="alert" hidden></div>
        <div id="dashboard-content" aria-busy="true">
          <section class="hero-grid" aria-label="Start playing">
            <div class="play-hero">
              <div class="hero-copy"><span class="hero-tag"><span class="status-dot"></span>MAKE TIME FOR PLAY</span><h2>Less scrolling.<br>More <em>rallying.</em></h2><p>Find your court, bring your people,<br class="desktop-break"> and make your next game a good one.</p><button class="button button-lime" data-feature="booking"><span data-icon="plus"></span>Book a court</button><div class="hero-footnote"><span class="avatar-stack" aria-hidden="true"><b>JM</b><b>KC</b><b>SR</b></span><span><strong id="community-count">32</strong> players in the sample clubhouse</span></div></div>
              <div class="hero-art" aria-hidden="true"><svg viewBox="0 0 500 440" fill="none"><defs><pattern id="dot-grid" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#FFFFFF" opacity=".10"/></pattern><linearGradient id="court-gradient" x1="40" y1="0" x2="370" y2="440" gradientUnits="userSpaceOnUse"><stop stop-color="#5B8A65"/><stop offset="1" stop-color="#2F614D"/></linearGradient></defs><path fill="url(#dot-grid)" d="M0 0h500v440H0z"/><g transform="translate(110 10) rotate(26 155 205)"><rect x="4" y="30" width="284" height="400" rx="5" fill="#0C3028" opacity=".6"/><rect x="-8" y="10" width="284" height="400" rx="5" fill="url(#court-gradient)"/><path d="M17 35h234v350H17z" fill="#3B7155" stroke="#C7DABB" stroke-width="3"/><path d="M17 153h234v114H17z" fill="#A6BE7D" fill-opacity=".75"/><path d="M17 153h234M17 267h234M134 35v118m0 114v118" stroke="#DCE7CF" stroke-width="3"/><path d="M-19 210h306" stroke="#D9E7CF" stroke-width="5"/><path d="M-19 210h306" stroke="#102F28" stroke-width="2" stroke-dasharray="2 3"/><circle cx="202" cy="105" r="13" fill="#DBF38F"/><circle cx="199" cy="100" r="2" fill="#5C7847"/><circle cx="206" cy="107" r="2" fill="#5C7847"/><circle cx="197" cy="110" r="2" fill="#5C7847"/><g transform="translate(22 290) rotate(-26)"><rect x="24" y="49" width="13" height="57" rx="5" fill="#D5B993"/><rect width="62" height="69" rx="23" fill="#D4EB8B"/><path d="M8 18c7-14 36-14 46 0" stroke="#9EBF5E" stroke-width="2"/><path d="M27 79h7m-7 8h7m-7 8h7" stroke="#1B4035" stroke-width="2"/></g></g><path d="M382 325l12 9m-1-25l5 8m3 29l14 1" stroke="#D9EF9C" stroke-width="2" stroke-linecap="round"/></svg><span class="art-caption">MEET YOU AT THE KITCHEN.</span></div>
            </div>
            <article class="panel next-session" aria-labelledby="next-session-title"><div class="card-heading"><h2 id="next-session-title">Your next session</h2><span class="icon-soft" data-icon="calendar"></span></div><div id="next-booking" class="loading-placeholder">Loading sample session…</div></article>
          </section>

          <section class="stats-grid" id="stats-grid" aria-label="Your pickleball at a glance"></section>

          <section class="court-section" aria-labelledby="courts-title"><div class="section-heading"><div><div class="section-title-line"><h2 id="courts-title">Find your court</h2><span class="badge badge-neutral" id="court-count">4 courts</span></div><p>A snapshot of what’s happening at the clubhouse.</p></div><div class="segmented-control" role="group" aria-label="Filter courts"><button class="selected" data-court-filter="all" aria-pressed="true">All courts</button><button data-court-filter="available" aria-pressed="false">Available</button><button data-court-filter="in-use" aria-pressed="false">In play</button></div></div><div class="court-grid" id="court-grid"></div><p id="court-results" class="sr-only" role="status"></p><div class="section-footnote"><span data-icon="info"></span>Demo snapshot · Availability is not connected to a live booking system.</div></section>

          <div class="lower-grid">
            <section class="panel activity-panel" aria-labelledby="activity-title"><div class="card-heading"><div><h2 id="activity-title">A little better, every game.</h2><p>Your last 7 days on court</p></div><span class="icon-soft" data-icon="chart"></span></div><div class="activity-body"><div class="activity-summary"><div><strong>4.5<span>hrs</span></strong><p>Time well spent</p></div><span class="positive-chip">+1.5 hrs vs. last week</span><button class="text-button" data-feature="statistics">Explore your stats</button></div><div class="activity-chart" id="activity-chart" role="img" aria-label="Sample court hours by day: Saturday 0.5, Sunday 1, Monday 0, Tuesday 1.5, Wednesday 0, Thursday 1, Friday 0.5. Total 4.5 hours."></div></div></section>
            <section class="panel community-panel" aria-labelledby="community-title"><div class="card-heading"><h2 id="community-title">Around the clubhouse</h2><span class="badge badge-neutral">UP NEXT</span></div><div class="event-content"><div class="event-date"><strong>28</strong><span>NOV</span></div><div><span class="event-category">SOCIAL PLAY</span><h3>Saturday Social Doubles</h3><p>Good rallies. New friends. All levels.</p><div class="event-meta"><span data-icon="clock"></span>8:00 AM – 12:00 PM</div></div></div><div class="event-footer"><span><span class="status-dot"></span>Sample community event</span><button class="text-button" data-action="event">View details</button></div></section>
          </div>
          <footer class="page-footer"><span><span data-business-name>Courtline</span> · Built around your game.</span><span>Frontend preview <span class="footer-dot">·</span> No real reservations or payments</span></footer>
        </div>
      </main>
    </div>
  </div>

  <nav class="bottom-nav" aria-label="Mobile navigation"><a href="./" aria-current="page"><span data-icon="grid"></span>Home</a><button data-feature="booking"><span data-icon="calendar"></span>Book</button><button data-feature="queue"><span data-icon="queue"></span>Queue</button><button data-feature="scoring"><span data-icon="score"></span>Matches</button><button data-action="more"><span data-icon="more"></span>More</button></nav>
  <dialog id="app-dialog" class="dialog" aria-labelledby="dialog-title"><div class="dialog-header"><h2 id="dialog-title"></h2><button class="icon-button" data-close-dialog aria-label="Close dialog"><span data-icon="close"></span></button></div><div id="dialog-content" class="dialog-content"></div></dialog>
  <div id="toast" class="toast" role="status" hidden></div>
  <noscript><div class="notice noscript-notice">Enable JavaScript to load the sample dashboard. This frontend uses JavaScript modules and must be served over HTTP.</div></noscript>
</body>
</html>

```

## dist/js/app.js

Place at: `courtline-app/dist/js/app.js`.

```javascript
import { repository } from './services/repository.js';
import { icon, hydrateIcons } from './shared/icons.js';
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
  // Accept safe local/HTTPS logo URLs, and use the shared symbol if invalid.
  document.querySelectorAll('.brand-mark').forEach(el => {
    el.innerHTML = icon('brand');
    if (!b.logoUrl) return;
    let url;
    try { url = new URL(b.logoUrl, location.href); } catch { return; }
    if (url.protocol !== 'https:' && url.origin !== location.origin) return;
    const img = document.createElement('img');
    img.src = url.href; img.alt = ''; img.addEventListener('error', () => { el.innerHTML = icon('brand'); }, { once: true });
    el.replaceChildren(img);
  });
}

function renderBooking() {
  const booking = state.dashboard.upcomingBooking;
  const root = document.querySelector('#next-booking');
  const court = state.business.courts.find(c => c.id === booking?.courtId);
  if (!booking || !court) { root.innerHTML = '<div class="empty-state">No sample session for these courts.</div>'; return; }
  const minutes = Math.round((new Date(booking.endsAt) - new Date(booking.startsAt)) / 60000);
  root.innerHTML = `<div class="booking-date"><div class="date-tile"><span>${esc(date(booking.startsAt, { month: 'short' }).toUpperCase())}</span><strong>${esc(date(booking.startsAt, { day: 'numeric' }))}</strong></div><div><h3>${esc(court.name)}</h3><p>${esc(court.type)} court · ${esc(booking.format)}</p></div></div><div class="booking-info">${icon('clock')}<span>${esc(time(booking.startsAt))} – ${esc(time(booking.endsAt))}</span></div><div class="booking-info">${icon('queue')}<span>${esc(booking.players)} players · ${minutes}-minute session</span></div><div class="booking-bottom">${badge(booking.status, 'success', true)}<span class="booking-format">${esc(money(booking.total))} / session</span></div><button class="button button-outline button-full" data-action="booking">View booking</button>`;
}

function renderStats() {
  document.querySelector('#stats-grid').innerHTML = state.dashboard.stats.map(stat => `<article class="stat-card"><h2 class="stat-top"><span class="stat-icon">${icon(stat.icon)}</span>${esc(stat.label)}</h2><div class="stat-value"><strong>${esc(stat.value)}</strong><span>${esc(stat.unit)}</span></div><p class="stat-caption ${stat.positive ? 'positive' : ''}">${esc(stat.caption)}</p></article>`).join('');
}

function renderCourts() {
  const courts = state.business.courts.map(c => ({ ...c, ...(state.dashboard.courtSnapshots.find(s => s.courtId === c.id) || { status: 'unavailable', label: 'No sample data', note: 'Availability not connected' }) }));
  const filtered = state.courtFilter === 'all' ? courts : courts.filter(c => c.status === state.courtFilter);
  document.querySelector('#court-count').textContent = `${courts.length} ${courts.length === 1 ? 'court' : 'courts'}`;
  document.querySelector('#court-grid').innerHTML = filtered.length ? filtered.map(c => `<article class="court-card"><div class="court-visual ${esc(c.status)}"><div class="court-diagram" aria-hidden="true"><div class="court-lines"><i></i></div></div>${badge(c.label, c.status === 'available' ? 'success' : c.status === 'in-use' ? 'warning' : 'neutral', true)}</div><div class="court-details"><div class="court-title-row"><h3>${esc(c.name)}</h3><span class="court-type">${esc(c.type)}</span></div><p>${esc(c.note)}</p><div class="court-card-footer"><span class="court-price">${esc(money(c.hourlyRate))}<small> / hr</small></span><button class="text-button" data-court="${esc(c.id)}" aria-label="View ${esc(c.name)} details">View court</button></div></div></article>`).join('') : '<div class="empty-state">No courts match this filter. Try All courts.</div>';
  document.querySelector('#court-results').textContent = `${filtered.length} of ${courts.length} courts shown.`;
  document.querySelectorAll('[data-court-filter]').forEach(button => { const selected = button.dataset.courtFilter === state.courtFilter; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
}

function renderDashboard() {
  const { dashboard: d } = state;
  document.querySelectorAll('[data-player-name]').forEach(el => { el.textContent = `${d.player.firstName} ${d.player.lastName}`; });
  document.querySelectorAll('[data-player-first]').forEach(el => { el.textContent = d.player.firstName; });
  document.querySelectorAll('[data-player-initials]').forEach(el => { el.textContent = `${d.player.firstName[0]}${d.player.lastName[0]}`; });
  document.querySelector('#demo-date').textContent = date(d.snapshotAt, { weekday: 'long', month: 'long', day: 'numeric' });
  document.querySelector('#demo-date').dateTime = d.snapshotAt;
  document.querySelector('#community-count').textContent = d.communityCount;
  renderBooking(); renderStats(); renderCourts();
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
  if (!f) return;
  dialog.open(f.title, `<div class="dialog-feature-icon">${icon(f.icon)}</div>${badge(`Planned · Stage ${f.stage}`)}<p class="feature-description">${esc(f.description)}</p><ul class="feature-list">${f.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="notice"><strong>Frontend development preview</strong><p>This module is not built yet. No action has been submitted.</p><p>${esc(f.handoff)}</p></div><button class="button button-primary" data-action="close">Back to dashboard</button>`);
}

function openBooking() {
  const b = state.dashboard.upcomingBooking;
  const court = state.business.courts.find(c => c.id === b?.courtId);
  if (!b || !court) { dialog.open('My bookings', '<div class="empty-state">No sample bookings for this court configuration.</div>'); return; }
  dialog.open('Your sample booking', `<div class="notice">This is a fictional reservation for UI development. No court is reserved and no payment has been taken.</div>${details([['Reference', b.id], ['Court', `${court.name} · ${court.type}`], ['Date', date(b.startsAt, { dateStyle: 'full' })], ['Time', `${time(b.startsAt)} – ${time(b.endsAt)}`], ['Players', `${b.players} · ${b.format}`], ['Sample total', money(b.total)], ['Status', b.status]])}<p>Booking history, cancellation, and rescheduling will be developed in the Booking stage.</p><button class="button button-primary" data-action="close">Got it</button>`);
}

function openCourt(id) {
  const c = state.business.courts.find(c => c.id === id);
  if (!c) return;
  const s = state.dashboard.courtSnapshots.find(s => s.courtId === id);
  const { operatingHours: h, bookingRules: r } = state.business;
  dialog.open(c.name, `<div class="notice">Sample court details · This snapshot does not guarantee availability.</div>${details([['Court', c.name], ['Type', c.type], ['Sample status', s?.label || 'No sample data'], ['Hourly rate', money(c.hourlyRate)], ['Business hours', `${h.open} – ${h.close}`], ['Session duration', `${r.minDurationMinutes}–${r.maxDurationMinutes} minutes`], ['Book ahead', `${r.advanceDays} days`], ['Maximum players', r.maxPlayers]])}<p>The full booking calendar is planned for Stage 2.</p><button class="button button-primary" data-feature="booking">About the booking stage</button>`);
}

function openProfile() {
  const p = state.dashboard.player;
  dialog.open('Your player profile', `<div class="notice">Demo player · No account is signed in. Login and registration will need your classmate’s authentication service.</div>${details([['Name', `${p.firstName} ${p.lastName}`], ['Playing level', p.level], ['Joined', p.joined], ['Club', state.business.name]])}<p>Profile editing and account access are planned for a later stage.</p><button class="button button-outline" data-feature="statistics">About player statistics</button>`);
}

function openNotifications() {
  document.querySelector('.notification-dot').hidden = true;
  const b = state.dashboard.upcomingBooking, e = state.dashboard.event;
  dialog.open('Clubhouse updates', `<div class="notice">Sample notifications · No messages have been sent.</div><ul class="notification-list">${b ? `<li><span class="icon-soft">${icon('calendar')}</span><div><strong>Your next game is on the calendar</strong><p>Sample session on ${esc(date(b.startsAt, { month: 'short', day: 'numeric' }))}, ${esc(time(b.startsAt))}. Open My bookings to see the example.</p></div></li>` : ''}${e ? `<li><span class="icon-soft">${icon('flag')}</span><div><strong>${esc(e.name)}</strong><p>Explore the sample community event on ${esc(date(e.startsAt, { month: 'long', day: 'numeric' }))}.</p></div></li>` : ''}</ul>${!b && !e ? '<p>No sample updates.</p>' : ''}`);
}

function openEvent() {
  const e = state.dashboard.event;
  if (!e) return;
  dialog.open(e.name, `<div class="notice">Fictional community event · No registration is submitted from this preview.</div><p>${esc(e.description)}</p>${details([['Date', date(e.startsAt, { dateStyle: 'full' })], ['Time', `${time(e.startsAt)} – ${time(e.endsAt)}`], ['Level', e.level], ['Club', state.business.name]])}<button class="button button-primary" data-feature="tournaments">About tournaments & registration</button>`);
}

function openSettings() {
  const b = state.business;
  dialog.open('Business preview', `<div class="notice">Try the shared design with different branding. Changes affect this page only and reset on reload. This is not the Admin Dashboard.</div><form id="brand-form"><div class="field"><label for="business-name">Business name</label><input id="business-name" name="businessName" required maxlength="40" value="${esc(b.name)}" autocomplete="organization"></div><div class="form-row"><div class="field"><label for="primary-color">Primary color</label><input type="color" id="primary-color" name="primaryColor" value="${esc(b.colors.primary)}"></div><div class="field"><label for="accent-color">Accent color</label><input type="color" id="accent-color" name="accentColor" value="${esc(b.colors.accent)}"></div></div><div class="field"><label for="court-number">Number of sample courts</label><select id="court-number" name="courtCount">${[1,2,3,4,6,8].map(n => `<option ${n === b.courts.length ? 'selected' : ''}>${n}</option>`).join('')}</select><small>New courts show “No sample data” until fixtures or API data are provided.</small></div><div id="brand-error" class="notice error-notice" role="alert" hidden></div><p class="subtle">Logo, court names, business information, hours, currency, and booking rules are configured in <code>js/config/business.js</code>.</p><div class="form-actions"><button type="submit" class="button button-primary">Apply preview</button><button type="button" class="button button-outline" data-action="reset-brand">Reset defaults</button></div></form>`);
}

function openMore() {
  dialog.open('Your clubhouse', `<div class="more-menu"><button class="button button-outline" data-feature="leaderboard">${icon('trophy')}Leaderboard</button><button class="button button-outline" data-feature="tournaments">${icon('flag')}Tournaments</button><button class="button button-outline" data-action="booking">${icon('ticket')}My bookings</button><button class="button button-outline" data-feature="statistics">${icon('chart')}My statistics</button><button class="button button-outline" data-action="profile">${icon('user')}My profile</button></div>`);
}

document.addEventListener('click', async event => {
  const target = event.target.closest('[data-feature], [data-action], [data-court], [data-court-filter]');
  if (!target || !state.dashboard) return;
  if (target.dataset.feature) return openFeature(target.dataset.feature);
  if (target.dataset.courtFilter) { state.courtFilter = target.dataset.courtFilter; return renderCourts(); }
  if (target.dataset.court) return openCourt(target.dataset.court);
  const actions = { booking: openBooking, profile: openProfile, notifications: openNotifications, event: openEvent, settings: openSettings, more: openMore, close: () => dialog.close(), 'reset-brand': async () => { state.business = await repository.getBusiness(); applyBranding(); renderBooking(); renderCourts(); dialog.close(); showToast('Default business preview restored.'); } };
  actions[target.dataset.action]?.();
});

document.addEventListener('submit', event => {
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
  state.business.courts = Array.from({ length: count }, (_, i) => state.business.courts[i] || { id: `court-${i + 1}`, name: `Court ${String(i + 1).padStart(2, '0')}`, type: 'Outdoor', hourlyRate: 400 });
  applyBranding(); renderBooking(); renderCourts(); dialog.close();
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
 * logoUrl accepts a local/HTTPS image path; null uses the shared court symbol.
 * Court count is derived from courts.length; never duplicate it in layout code.
 */
export const businessConfig = {
  id: 'sample-club',
  name: 'Courtline',
  logoUrl: null,
  colors: { primary: '#183d35', primaryHover: '#245347', accent: '#d5ee95', accentInk: '#183d35' },
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
    { id: 'court-1', name: 'Court 01', type: 'Outdoor', hourlyRate: 400 },
    { id: 'court-2', name: 'Court 02', type: 'Outdoor', hourlyRate: 400 },
    { id: 'court-3', name: 'Court 03', type: 'Covered', hourlyRate: 500 },
    { id: 'court-4', name: 'Court 04', type: 'Covered', hourlyRate: 500 },
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
  activity: [ { day: 'Sat', hours: .5 }, { day: 'Sun', hours: 1 }, { day: 'Mon', hours: 0 }, { day: 'Tue', hours: 1.5 }, { day: 'Wed', hours: 0 }, { day: 'Thu', hours: 1 }, { day: 'Fri', hours: .5 } ],
  previousWeekHours: 3,
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

## dist/js/services/repository.js

Place at: `courtline-app/dist/js/services/repository.js`.

```javascript
import { businessConfig } from '../config/business.js';
import { mockDashboard } from '../data/mock-data.js';

/** The only data boundary used by the UI.
 * Backend handoff: implement these two async methods with fetch, validate the
 * payload, preserve this view-model shape, and change source to 'api'.
 * No authentication, booking writes, payments, or live subscriptions exist yet.
 */
export const repository = {
  async getBusiness() { return structuredClone(businessConfig); },
  async getDashboard() { return structuredClone(mockDashboard); },
};

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
const source = [...await walk(path.join(root, 'dist')), ...await walk(path.join(root, 'scripts')), path.join(root, 'package.json'), path.join(root, 'vercel.json'), path.join(root, '.gitignore')].sort();
let output = '# Stage 1 · Complete code\n\nCreate `courtline-app/`, then place every file at the relative path shown below. No npm dependencies are required. Run `npm run dev` inside that folder and open http://127.0.0.1:4173/. Do not open the HTML using file:// because it uses JavaScript modules.\n\nThis is a frontend preview. All data is fictional. Business preview changes live only in memory. Booking, queue, scoring, leaderboard, tournaments, authentication, admin, facility display, and PWA installation are later stages.\n\n';
for (const file of source) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const ext = path.extname(file);
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
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
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

