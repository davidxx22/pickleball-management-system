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
  // Environment defaults; court.image can override with { src, alt, position }.
  courtPhotos: {
    Outdoor: { src: 'assets/courts/outdoor.jpg', alt: 'Illustrative outdoor pickleball courts with blue and green surfacing, trees, and natural daylight', position: 'center center' },
    Covered: { src: 'assets/courts/covered.jpg', alt: 'Illustrative covered pickleball courts beneath metal roof beams and overhead lighting fixtures', position: 'center 60%' },
  },
  courts: [
    { id: 'court-1', name: 'Court 01', type: 'Outdoor', hourlyRate: 400 },
    { id: 'court-2', name: 'Court 02', type: 'Outdoor', hourlyRate: 400 },
    { id: 'court-3', name: 'Court 03', type: 'Covered', hourlyRate: 500 },
    { id: 'court-4', name: 'Court 04', type: 'Covered', hourlyRate: 500 },
  ],
};
