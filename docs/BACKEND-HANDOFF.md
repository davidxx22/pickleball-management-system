# Backend handoff · Stage 1

## Boundary

The frontend imports `repository.getBusiness()`, `repository.getDashboard()` and `repository.getBookingSlots(input)` for data. These return promises and independent copies of fixtures. Replace their implementations in `dist/js/services/repository.js` with API requests and validated responses. Do not put fetch calls in card renderers or duplicate business rules in view code. Handle loading, empty, and rejected responses at this boundary and in the screen.

The current screen has a loading label, `aria-busy`, empty states for missing sessions/courts, and an initialization error notice. Before production integration, add request cancellation, payload validation, refresh/retry behavior, and real session-aware route loading as needed.

## Read models

| Method | Required response | Notes |
| --- | --- | --- |
| `getBusiness()` | `id`, `name`, `logoUrl`, `colors`, `heroArtwork`, `information`, `operatingHours`, `bookingRules`, `courts[]` | Full example in `config/business.js`. Courts use stable IDs. No separate court count. |
| `getBookingSlots({ courtId, day, durationMinutes })` | `{ start, end, available, total, source }[]` | Business-local day (`YYYY-MM-DD`) and times (`HH:mm`). Fictional read only. Replace with authoritative availability; revalidate again during a real write. |
| `getDashboard()` | `source`, `snapshotAt`, `player`, `communityCount`, `upcomingBooking`, `stats[]`, `courtSnapshots[]`, `activity[]`, `bookingBusyPeriods[]`, `event` | Full example in `data/mock-data.js`. `upcomingBooking` may be null. `courtSnapshots` reference configured court IDs. |

Dates are ISO 8601 timestamps with an offset. Format using the business timezone and locale; do not rely on the user's OS timezone. Monetary values are in the currency identified by the tenant configuration; the backend must define whether production API amounts use major or minor units and normalize them at the repository boundary.

`source: 'mock'` currently means fictional data. When using production data, update the data source labels, snapshot wording, fixed demo day, and feature notices together. Real data should display its freshness, stale/disconnected states, and the source's actual status. Do not merely remove the demo banner while retaining fixtures.

## Backend ownership

- Tenant lookup, configuration validation, tenant isolation, permissions, and authoritative business rules.
- Authentication, registration, session management, password recovery, and authorized profile updates. Never put secrets in frontend files.
- Availability, booking creation/cancellation, capacity, overlap validation, payments if required, and concurrent booking protection. UI availability is advisory; the server must validate every reservation.
- Queue order, assignments, join/leave writes, and live update transport.
- Scorer authorization, canonical match state, score persistence, tournament progression, official rankings, and statistics aggregation.
- Tournament capacity, registration validation, player records, admin reports, branding storage, and access to facility-display feeds.

Stage 1 contains **no write methods**. New modules should add explicit methods such as `createBooking(input)` only when their UI is implemented. Any temporary simulation must be labeled, isolated behind the repository, and return no production success claim.

## Reuse and tenant configuration

The architecture uses a single tenant configuration at runtime. It does not implement a multi-tenant backend or guarantee tenant security. Do not treat the business preview as an access-controlled settings screen. Validate allowed logo URLs and color combinations server-side as well as in the frontend. A future PWA manifest and icon set must be generated or configured per deployed business; changing a dashboard name alone will not change an installed application's identity.

## Customer, admin, and facility separation

Shared visual tokens and components can serve all three interfaces. Authoritative role checks belong to the backend. Do not hide a sidebar link and assume the resource is secured. Display-only screens should use a scoped, read-only feed and exclude player contact details. These interfaces are planned; they are not implemented in this stage.

## Redesign interactions

The compact booking modal selects a court/date/duration/player count, reads fictional slots from the repository, and supports review/edit. `Finish demo` shows an explicit non-reservation message and clears only the transient UI draft. It does not change the dashboard. RSVP also completes as a non-submitted preview. These are deliberate read-only frontend interactions; do not treat a demo finish as a booking or event registration record.

Court `environment` is retained as `indoor` or `outdoor` metadata. `type` remains the business-facing label, e.g. Covered. Court `formats` is an array (for example `['Doubles', 'Singles']`) used by the restored grid's format filters. The metric strip is derived from dashboard activity, configured courts/snapshots, community count and previous-week hours. Original player stats remain in the read model for the future statistics screen. Branding includes configurable hero artwork; verify image URLs and appropriate alt text in the production tenant response.

## Restored court card grid

The dashboard uses the original illustrated court cards and All / Available / Doubles / Singles filters. Card details are built from configured courts and `courtSnapshots`; booking buttons open the same mock booking modal as the hero CTA. The hourly timeline and its display toggle have been removed from the dashboard. Slot generation remains in the repository for the booking modal.

The page backdrop, stats band and lower dashboard stay warm off-white. This presentation change does not alter reservations, court snapshots or any API contract. The hero status still describes fictional snapshot data; real availability needs a fresh authoritative feed before production.
