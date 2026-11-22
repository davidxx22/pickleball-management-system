# Progressive delivery

Preserve completed shared components. Extend them when a concrete screen requires a new state. Each stage ships complete files, a copy/paste code companion, short usage notes, labeled simulations, and integration boundaries.

| Stage | Scope | Status |
| --- | --- | --- |
| 1 | Folder structure, tokens, typography, buttons, forms, cards, navigation, responsive layout, shared utilities, Customer Home Dashboard | Complete |
| 2 | Customer availability calendar, slot selection, booking review, booking history; isolated frontend booking simulation | Next |
| 3 | Live queue, join/leave UI, queue position, assignment preview, explicit simulation controls | Planned |
| 4 | Match overview, live scoring UI, scoreboard controls and scoring rules | Planned |
| 5 | Leaderboard, filters, player ranking details | Planned |
| 6 | Player profile editing UI, statistics, match history, detail views; login/registration UI with no authentication server | Planned |
| 7 | Tournament information, registration UI, bracket views | Planned |
| 8 | Owner/admin overview, court/booking/queue/player/match/score/leaderboard management, tournament creation, statistics, reports, settings, branding | Planned |
| 9 | TV/monitor display, assignments, ongoing matches, scores, queue, next players, available courts | Planned |
| 10 | Tenant-aware manifest and icons, splash-compatible branding, standalone display, service worker, versioned static caching, custom offline page, install behavior | Planned |

## Stage 2 acceptance outline

- Date and court filters, configured operating hours and booking limits.
- Select a sample available slot, review duration/players/price, and confirm a **demo** booking only.
- Display booking history and empty/validation/conflict states.
- Keep simulated writes in a dedicated data adapter with no network side effects.
- Define request/response contracts and authoritative server validation for the backend developer.
- Test narrow/mobile, tablet, desktop, keyboard flow, and stable configuration with a different number of courts.

## Final PWA stage

Installability and offline behavior are intentionally deferred to the final stage. Cache only public app assets initially; do not cache authentication responses, private profiles, or booking mutations by accident. The offline view must not imply that stale availability is current, and cannot confirm real bookings offline. Test browser installation support, HTTPS deployment, update handling, asset revisioning, and custom offline navigation.
