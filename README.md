# Pickleball frontend · Stage 1

A reusable HTML5, CSS3, and vanilla JavaScript foundation and Customer Home Dashboard. **Courtline is an editable sample business**, not a permanent product identity. There are no JavaScript runtime dependencies, tracking scripts, production APIs, or backend services. Plus Jakarta Sans (600/700) and Inter (400/500) load from Google Fonts with system fallbacks.

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
    assets/mark.svg             Default vector court symbol/favicon
    css/
      tokens.css                Colors, typography, spacing, base accessibility
      components.css            Buttons, fields, cards, badges, dialogs, feedback
      dashboard.css             App shell and responsive dashboard layout
      design-system.css         Component reference layout
    js/
      config/business.js        Tenant identity, courts, colors, business rules
      data/mock-data.js         Fixed fictional dashboard fixtures
      services/repository.js    Async data boundary to replace with APIs
      services/booking-preview.js Pure fictional slot generation and date bounds
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

- Responsive blue-and-lime Customer Home Dashboard with desktop top navigation and mobile bottom navigation. The configurable tenant name/logo remain separate from UI icons.
- Full-bleed supplied blue-court artwork (`dist/assets/hero-blue-court.jpg`) in a single 20px rounded hero, overlay top navigation, white availability pill at the court baseline, centered headline and dual pill CTAs. The navy footer band has four evenly spaced metrics; greeting, avatars, overlay captions and upcoming-session card are removed. Set `heroArtwork` in business configuration to swap imagery for another business.
- One flat `#FFFFF7` dashboard surface contains court availability rows, the activity chart and community event, separated by thin `#E2E8F0` rules. All / Indoor / Outdoor filters have pressed states and announced result counts. Show Availability toggles hourly columns; open hours preselect the court/time in the demo booking modal. Court names still open details. The timeline scrolls within its own region on mobile, with sticky court labels.
- Interactive **frontend booking preview**: court, date, duration and player selection; fictional slots; sample price; review/edit; and a demo-only finish. No reservation is written, held, or added to history. The fixed snapshot date drives the date range.
- Sample community programme and RSVP preview, 7-day activity chart, and retained session/profile/notification dialogs. Queue, scoring, rankings and later module explanations remain reachable from My Corner.
- Native dialog focus containment, Escape dismissal, a visible close button, and focus restoration. Customer navigation omits the Component library and Business preview; the component reference remains directly available at `/design-system.html`.
- Component reference with buttons, forms, badges, cards, dialogs, layout breakpoints, and browser-only form validation.
- Reduced-motion support, skip links, semantic landmarks, visible focus styles, labeled fields, and icons with text alternatives on icon-only controls.
- Iconsax Linear throughout navigation, statistics, buttons, dialogs, and select controls. Selected SVGs are bundled locally and inherit app colors. See `THIRD_PARTY_NOTICES.md` for source and attribution. Tenant logos, favicon, and court illustrations are separate branding/artwork.

## Frontend-only demonstration

All people, reservations, prices, notifications, statistics, availability, and events are fictional. The fixed demo day is November 20, 2026, in the sample tenant's timezone. The dashboard does not claim these are real-time values. A court shown as available is not reserved by interacting with the page.

Future modules open a “Planned stage” explanation. Booking and RSVP previews explicitly finish as simulations; they submit no data and do not change the sample upcoming session, availability or event. There is no authentication, payment, cancellation, persistent tenant settings, or production registration.

**This stage is not yet installable or offline-capable.** As requested, manifest, application icons, service worker, caching, offline page, and install behavior will be added after the interfaces. The current SVG is a favicon, not the completed PWA icon set.

## Customize a tenant

Edit `dist/js/config/business.js`. Court count comes from the courts array. Every court has a stable ID, editable name, type, supported `formats`, and hourly rate. Set `environment` to `indoor` or `outdoor` for the environment filters; the display type may still read Covered. Supported formats remain court metadata and do not create separate inventories. Business identity, logo URL, colors, address, contact information, locale, currency, timezone, operating hours, and booking rules live together. The optional logo accepts a safe local or HTTPS image; a failed image falls back to the shared symbol.

Use a dark primary color with light accent and white text. The retained preview validation requires a contrast ratio of 4.5:1. Keep sample fixtures synchronized with stable court IDs. Newly added courts without fixture records show “No sample data.” The temporary business preview is hidden from customer navigation; the owner-facing branding/settings interface belongs to the Admin stage.

For the backend integration and next stages, see the documents in `docs/`.

## Redesign and booking handoff

The default palette uses court blue `#1E4985` / `#163663`, navy `#0D1B2A`, and lime `#D9F93D`. Display text uses Plus Jakarta Sans with -0.02em tracking; body and controls use Inter. The hero expands at 600 CSS pixels; desktop navigation and the split lower row appear at 900px. The lower surface uses warm off-white `#FFFFF7`, navy text `#0F172A`, and dividers `#E2E8F0`. Respect reduced motion and retain textual status and demo labels.

`repository.getBookingSlots({ courtId, day, durationMinutes })` returns fictional `{ start, end, available, total, source: 'mock' }` records. Day/time are business-local strings, total is in configured currency major units. Mock conflict periods live in `mockDashboard.bookingBusyPeriods`. `previewDateRange()` uses the business timezone and fixed snapshot; slots respect opening days/hours, duration, booking window, and sample overlaps. These calculations demonstrate the UI and are **not authoritative availability**.

Your backend will replace that read method, revalidate availability/prices/rules at submission, and add a real booking write endpoint. The current Finish demo button has no write method or persistence. For real time data, add subscriptions/polling and freshness/error handling at the data boundary; update all demo labels and date sources together. Event RSVP requires its own authenticated registration endpoint and capacity validation.

## Hero proportions and flat dashboard

The supplied 1024px square artwork is cropped in CSS to x=89..935, y=226..719 so the blue court fills the hero scene without an outer frame. The scene aspect ratio is 846:493 on tablet/desktop; the white status badge centers on the top court baseline. The stats band is separate from the artwork and uses the same card clipping. Mobile uses a taller crop and two-by-two metrics for readable controls. To use artwork with a different composition, adjust the documented crop percentages in `dashboard.css` together with `heroArtwork.src`.

The mock weekly activity totals 4 hours and previous-week activity is 2 hours, so both chart and hero show a +2-hour trend. All data remains fictional and the visible sample labels are retained. Upcoming-session details remain accessible under Sessions; only the hero quick-view card was removed.
