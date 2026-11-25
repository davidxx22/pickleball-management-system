# Courtline Overview refinement

Approved scope: prioritize a returning player’s next session, court availability, and booking entry point without changing navigation or booking behavior.

## Direction

- Product: weekly court planning for returning players.
- Character: friendly, practical, energetic.
- World: court markings and the clubhouse noticeboard.
- Moments: availability information and one small photograph crop.
- Signature: quiet court-line dividers between information groups.

## Audit resolved

- The oversized promotional banner displaced actionable information: replaced with the next-session panel and header booking action.
- Upcoming session details stretched across a tall card: grouped date, time, court, players, price, and View booking in about 192px on wide desktop.
- Four large, unlabeled statistic cards competed with availability: moved below courts as a compact strip with visible descriptive labels.
- Avatar count, greeting subtitle, sidebar slogan, and event badge did not help a booking decision: removed.
- The court count was a separate badge: replaced with a count derived from configured courts and snapshots.
- Marketing court notes and the missing statistic period were unclear: shortened to “Available now” and “Hours this month”.

## Nine design passes

1. Spacing: 16/20/24/32px rhythm for the changed modules, 80px court illustration headers, and smaller gaps within information groups. Existing navigation dimensions remain stable.
2. Color: retained green/lime branding, white surfaces, navy primary text, and muted secondary text; removed the large photographic color field.
3. Icons: kept Iconsax Linear and the logo artwork. No new decorative icons or statistic icons.
4. Copy: Overview names the page; session details replace marketing copy. One prominent demo-data note remains. All reservations and availability are still fictional.
5. Type: kept the Plus Jakarta Sans brand wordmark at 750; page/module hierarchy uses 500/600 with tabular figures. Supporting labels use readable sizes.
6. Layout: header action, next session, courts, statistics, then the existing activity/event row. On mobile, the primary action is full-width and the decorative photo is hidden.
7. Details: meaningful status badges remain, counters become quiet text, and the statistics use semantic definition lists and thin dividers. Filters keep pressed states and announced results.
8. Visuals: reused the supplied court image as a 144px crop on wide desktop and 112px on tablets. No image was generated; existing court diagrams remain.
9. Motion: court hover feedback uses a border-color change, without card movement. Existing focus, dialog Escape dismissal/focus restoration, and reduced-motion support remain.

## Backend boundary

All displayed values still come from the asynchronous repository. The availability summary is derived from configured court IDs and their snapshots, never a hardcoded court total. Existing labels and values drive the stat strip. No API, data submission, payment, or real reservation was introduced. Replace repository implementations and update source/freshness labels together when the backend is connected.

## Validation

Source checks cover JavaScript syntax, HTML assets and duplicate IDs, fixture consistency, isolated configuration copies, escaping, and brand contrast. Browser checks cover desktop, tablet, narrow phone layout, availability filters, the booking-stage explanation, booking/court-detail dialogs, Escape dismissal/focus restoration, and mobile More navigation.

Design process adapted from unslop by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source: https://github.com/heydamir/unslop.
