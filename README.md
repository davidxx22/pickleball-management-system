# Pickleball frontend · Stage 1

A reusable HTML5, CSS3, and vanilla JavaScript foundation and Customer Home Dashboard. **Courtline is an editable sample business**, not a permanent product identity. There are no JavaScript runtime dependencies, tracking scripts, production APIs, or backend services. Google Fonts supplies Plus Jakarta Sans 600/700 and Inter 400/500, with system fallbacks.

## Run

With Node.js 20 or later, open a terminal in this folder and run:

```powershell
npm run dev
```

Open http://127.0.0.1:4173/. No `npm install` or build is needed. The Node script serves static files for development only. Alternatively, run `python -m http.server 4173 --directory dist`.

- Home dashboard: `/`
- Shared component reference: `/design-system.html`
- Check source and data invariants: `npm run check`
- Regenerate the filename-labeled copy/paste guide: `npm run code`

Serve over HTTP; JavaScript modules will not load correctly from `file://`.

## Deploy to Vercel from GitHub

Import `davidxx22/pickleball-management-system` in Vercel and select the `main` branch. The contents of this folder are at the repository root, so leave Root Directory at `./` (do not select `dist` or enter `courtline-app`).

The included `vercel.json` sets Framework Preset to Other, Output Directory to `dist`, and skips both the install and build steps. This frontend has no dependencies to install and no build step. No environment variables are required for the current mock-data preview. You can review those settings and click Deploy yourself.

Only `dist/` is served publicly. Documentation, helper scripts, and hosting metadata are outside the served output. Deployment makes the Stage 1 preview available; it does not add the future backend, booking transactions, authentication, or PWA installation/offline support.

## Folder structure

```text
courtline-app/
  dist/                         Editable, deployable static source
    index.html                  Customer Home Dashboard and navigation shell
    design-system.html          Interactive shared component reference
    assets/mark.svg             Default lime pickleball logo/favicon
    css/
      tokens.css                Colors, typography, spacing, base accessibility
      components.css            Buttons, fields, cards, badges, dialogs, feedback
      dashboard.css             App shell and responsive dashboard layout
      design-system.css         Component reference layout
    js/
      config/business.js        Tenant identity, courts, colors, business rules
      data/mock-data.js         Fixed fictional dashboard fixtures
      services/repository.js    Async data boundary to replace with APIs
      shared/icons.js           Semantic mappings and Iconsax Linear renderer
      shared/iconsax-linear.js  Selected official Iconsax Linear SVG paths
      shared/branding.js        Default tenant logo, separate from UI symbols
      shared/components.js      Safe text, badge, dialog, toast, contrast utilities
      app.js                    Dashboard rendering and frontend interactions
      design-system.js          Component reference interactions
  docs/
    BACKEND-HANDOFF.md          Data contracts and ownership
    ROADMAP.md                  Progressive delivery order
    STAGE-01-COMPLETE-CODE.md   Full code with filenames and placement instructions
  scripts/
    serve.mjs                   Development-only static server
    check.mjs                   Syntax, assets, data and shared utility checks
    export-code.mjs             Rebuild complete code companion
  package.json
  vercel.json                    Static Vercel deployment configuration
```

`dist/` is the source for this buildless project. Edit it directly. It can be served by any static HTTP host. `.openai/hosting.json` binds this working copy to its private preview host; that service-specific identity is not required to reuse the frontend and is excluded from the source ZIP.

## What works in this stage

- Customer Home Dashboard with a sports app layout and responsive desktop sidebar/mobile bottom navigation.
- Minimal white top bar with notification bell, circular initials avatar, and chevron aligned right; mobile retains the business logo on the left.
- Hero featuring the user-supplied court photograph with a light horizontal fade, the original headline/subtext and player row, and a text-only “Book a court” CTA. The eyebrow and watermark are omitted. The photograph is bundled at `dist/assets/hero-padel-court.png`. The dashboard also includes a sample upcoming session, configurable court cards, activity chart, and community event.
- Court status filters with pressed state and an announced result count.
- Court/session/event/profile/notification dialogs. Native dialog focus containment, Escape dismissal, a visible close button, and focus restoration.
- Customer navigation omits the Component library, Business preview, and Frontend demo/version footer. The component reference remains available directly at `/design-system.html`; temporary branding-preview code is retained for future development.
- Component reference with buttons, forms, badges, cards, dialogs, layout breakpoints, and browser-only form validation.
- Reduced-motion support, skip links, semantic landmarks, visible focus styles, labeled fields, and icons with text alternatives on icon-only controls.
- Iconsax Linear throughout navigation, statistics, buttons, dialogs, and select controls. Selected SVGs are bundled locally and inherit app colors. See `THIRD_PARTY_NOTICES.md` for source and attribution. Tenant logos, favicon, and court illustrations are separate branding/artwork.

## Frontend-only demonstration

All people, reservations, prices, notifications, statistics, availability, and events are fictional. The fixed demo day is November 20, 2026, in the sample tenant's timezone. The dashboard does not claim these are real-time values. A court shown as available is not reserved by interacting with the page.

Navigation for future modules opens a “Planned stage” explanation; it does not simulate success. There is no authentication, data submission, payment, booking cancellation, tournament registration, or persistent tenant settings. The sample booking and event cannot be modified.

**This stage is not yet installable or offline-capable.** As requested, manifest, application icons, service worker, caching, offline page, and install behavior will be added after the interfaces. The current SVG is a favicon, not the completed PWA icon set.

## Customize a tenant

Edit `dist/js/config/business.js`. Court count comes from the courts array. Every court has a stable ID, editable name, type, and hourly rate. Business identity, logo URL, colors, address, contact information, locale, currency, timezone, operating hours, and booking rules live together. The optional logo accepts a safe local or HTTPS image; a failed image falls back to the shared pickleball symbol.

Use a dark primary color with light accent and white text. The retained preview validation requires a contrast ratio of 4.5:1. Keep sample fixtures synchronized with stable court IDs. Newly added courts without fixture records show “No sample data.” The temporary business preview is hidden from customer navigation; the owner-facing branding/settings interface belongs to the Admin stage.

For the backend integration and next stages, see the documents in `docs/`.

## Typography from bed6397

The restored sidebar dashboard keeps its layout, imagery, card structure and mock interactions. Typography follows commit `bed6397`: Plus Jakarta Sans for display headings/metric numbers (600/700, -0.02em tracking), and Inter for body copy/controls (400/500). Light-surface text uses navy `#0F172A` and secondary `#526075`; the photo hero uses white copy with lime `#D9F93D` emphasis. Semantic status colors and existing surface colors retain readable contrast. Shared font and text-color tokens live in `dist/css/tokens.css`.

## Dashboard cleanup

The dashboard keeps the greeting, photo hero, upcoming session, court grid, activity chart and event details. The sidebar tagline, greeting eyebrow/sun/date badge, four-card player summary row, sample-confirmed status, activity header icon, court subtitle, sample event label and page footer are removed. The player row reads “32 players in the clubhouse”; its count still comes from the repository. Dates, stats and status fields remain in the read model for later modules, but removed widgets no longer have renderers or DOM queries. Mobile bottom spacing keeps the last card above navigation; event details and sample booking dialogs remain available.

The pickleball logo and favicon use transparent cutouts for the ball holes. The hero CTA, logo fill and headline emphasis share the configurable lime accent (`#D9F93D` by default). The upcoming-session header has no calendar icon.
