# Backend handoff · Stage 1

## Boundary

The frontend imports only `repository.getBusiness()` and `repository.getDashboard()` for data. Both return promises and independent copies of fixtures. Replace their implementations in `dist/js/services/repository.js` with API requests and validated responses. Do not put fetch calls in card renderers or duplicate business rules in view code. Handle loading, empty, and rejected responses at this boundary and in the screen.

The current screen has a loading label, `aria-busy`, empty states for missing sessions/courts, and an initialization error notice. Before production integration, add request cancellation, payload validation, refresh/retry behavior, and real session-aware route loading as needed.

## Read models

| Method | Required response | Notes |
| --- | --- | --- |
| `getBusiness()` | `id`, `name`, `logoUrl`, `colors`, `information`, `operatingHours`, `bookingRules`, `courts[]` | Full example in `config/business.js`. Courts use stable IDs. No separate court count. |
| `getDashboard()` | `source`, `snapshotAt`, `player`, `communityCount`, `upcomingBooking`, `stats[]`, `courtSnapshots[]`, `activity[]`, `event` | Full example in `data/mock-data.js`. `upcomingBooking` may be null. `courtSnapshots` reference configured court IDs. |

Dates are ISO 8601 timestamps with an offset. Format using the business timezone and locale; do not rely on the user's OS timezone. Monetary values are in the currency identified by the tenant configuration; the backend must define whether production API amounts use major or minor units and normalize them at the repository boundary.

`source: 'mock'` currently means fictional data. When using production data, update the data source labels, snapshot wording, fixed demo day, and feature notices together. Real data should display its freshness, stale/disconnected states, and the source's actual status. Do not merely remove the demo banner while retaining fixtures.

## Backend ownership

Court photographs are optional data: `courtPhotos` maps an environment label to `{ src, alt, position }`, while `courts[].image` overrides its environment default with the same shape. `src` can be a local asset or HTTPS URL; `position` is a CSS object-position value. Replace illustrative stock images with the business's actual court photographs when integrating. Missing/failed images show a neutral placeholder and preserve the status badge and court details.

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
