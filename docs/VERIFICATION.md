# Stage 1 verification

Verified November 20, 2026.

## Automated source checks

`npm run check` passed: all seven browser JavaScript modules parse; both HTML pages have unique IDs and valid local file references; fixture court IDs and booking references are consistent; activity totals match; repository copies do not mutate default configuration; external text is escaped; default primary/white and primary/accent contrast meets 4.5:1.

## Browser checks

- Customer dashboard and component reference load with no observed console warnings or errors.
- Desktop, phone (390 CSS pixels), tablet (approximately 769 CSS pixels), and a narrow view (approximately 342 CSS pixels) were inspected. Document width stayed within the tested viewports. The Windows browser preview includes a persistent scrollbar.
- Desktop uses the sidebar and split dashboard. Tablet uses two court columns and bottom navigation. Phone stacks the hero, next session, summary, and court cards; More exposes the remaining navigation.
- Court filter reduces four courts to two available courts and announces the result count. Pressed state updates.
- Court details open with the configured rate and rules. Escape closes the dialog and restores focus to the trigger.
- Planned booking navigation says Stage 2 and explains no action was submitted.
- Branding changes to a different business name, a valid alternate primary color, and one court work. A light primary color is rejected with a contrast error. A missing sample session shows an empty state.
- Eight configured courts render without changing the layout code. Four added courts show “No sample data.” Reset restores defaults.
- Component form validates locally and explicitly reports that nothing was sent.
- A single-button dialog keeps Tab focus inside the dialog after an explicit focus-loop fix.

## Iconsax Linear update

- Source checks passed with nine browser JavaScript modules.
- Every icon referenced by the current views, dialogs, and fixture data resolves to the locally bundled Iconsax Linear subset.
- Browser inspection found no empty UI SVGs, non-Linear UI icons, or duplicate SVG IDs.
- Desktop navigation, notification dialog, mobile More menu, and component reference were checked. The native select uses the same official Linear chevron embedded in CSS.
- No browser console errors or warnings were observed during these checks. Tenant logos and court illustrations remain separate branding/artwork.

## Limits

This is browser preview QA, not an exhaustive accessibility audit or testing on physical iOS/Android devices. There is no backend, authentication, actual live feed, write transaction, installability, service worker, or offline behavior to validate in Stage 1. Dedicated large-screen facility behavior belongs to its later stage.
