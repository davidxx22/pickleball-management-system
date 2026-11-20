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

## Court card photographs

The sample court images are illustrative stock photographs, not photographs of a real tenant's Court 01–04. They are bundled locally as functional image content in this application under the [Pexels License](https://www.pexels.com/license/).

- `dist/assets/courts/outdoor.jpg`: Pexels photo 37143606, an outdoor overview with blue/green pickleball courts, daylight, fencing, and trees. [Source photo](https://www.pexels.com/photo/37143606/).
- `dist/assets/courts/covered.jpg`: Xuân Nguyễn, Pexels photo 37618103, covered pickleball courts beneath a metal roof. [Source photo](https://www.pexels.com/photo/indoor-tennis-court-with-pickleball-branding-37618103/).

Images are cropped only through CSS `object-fit: cover` and configurable focal positions. No photographer or depicted facility endorses this demo. Businesses can replace these images through tenant configuration.
