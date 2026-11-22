/** Pure mock slot adapter. Replace repository.getBookingSlots with a server call.
 * All day/time strings below are business-local, independent of the browser zone.
 * No write, storage, reservation, or payment happens here.
 */
export function previewDateRange(business, dashboard) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: business.information.timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(dashboard.snapshotAt));
  const get = type => parts.find(p => p.type === type).value;
  const min = `${get('year')}-${get('month')}-${get('day')}`;
  const limit = new Date(`${min}T00:00:00Z`);
  limit.setUTCDate(limit.getUTCDate() + business.bookingRules.advanceDays);
  return { min, max: limit.toISOString().slice(0, 10) };
}

export function generatePreviewSlots(business, dashboard, input) {
  const { courtId, day, durationMinutes } = input;
  const court = business.courts.find(c => c.id === courtId);
  const { min, max } = previewDateRange(business, dashboard);
  const rules = business.bookingRules, hours = business.operatingHours;
  const parsed = new Date(`${day}T00:00:00Z`);
  if (!court || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !Number.isFinite(+parsed) || parsed.toISOString().slice(0, 10) !== day || day < min || day > max) return [];
  if (!Number.isInteger(durationMinutes) || durationMinutes < rules.minDurationMinutes || durationMinutes > rules.maxDurationMinutes || (durationMinutes - rules.minDurationMinutes) % rules.slotMinutes) return [];
  if (!hours.days.includes(parsed.getUTCDay())) return [];
  const minutes = value => { const [h, m] = value.split(':').map(Number); return h * 60 + m; };
  const clock = value => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
  const timeParts = new Intl.DateTimeFormat('en-GB', { timeZone: business.information.timezone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date(dashboard.snapshotAt));
  const now = Number(timeParts.find(p => p.type === 'hour').value) * 60 + Number(timeParts.find(p => p.type === 'minute').value);
  const busy = (dashboard.bookingBusyPeriods || []).filter(p => p.courtId === courtId && p.day === day);
  const slots = [];
  for (let start = minutes(hours.open); start + durationMinutes <= minutes(hours.close); start += rules.slotMinutes) {
    if (day === min && start < now) continue;
    const end = start + durationMinutes;
    const available = !busy.some(p => start < minutes(p.to) && end > minutes(p.from));
    slots.push({ start: clock(start), end: clock(end), available, total: court.hourlyRate * durationMinutes / 60, source: 'mock' });
  }
  return slots;
}
