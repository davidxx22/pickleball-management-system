import { repository } from './services/repository.js';
import { icon, hydrateIcons } from './shared/icons.js';
import { brandMark } from './shared/branding.js';
import { previewDateRange } from './services/booking-preview.js';
import { badge, escapeHTML as esc, createDialogController, showToast, contrastRatio } from './shared/components.js';

const dialog = createDialogController(document.querySelector('#app-dialog'));
const state = { business: null, dashboard: null, courtFilter: 'all' };
const features = {
  booking: { title: 'Book a court', stage: 2, icon: 'calendar', description: 'Choose a day, find an open time, and review your reservation.', items: ['Availability calendar and time slots', 'Booking review and booking history', 'Booking rules from business configuration'], handoff: 'Your backend will provide availability and validate and save reservations.' },
  queue: { title: 'Live queue', stage: 3, icon: 'queue', description: 'Know where you stand before you step on court.', items: ['Waiting list and player position', 'Join and leave interactions with a labeled simulation', 'Court assignment and next players'], handoff: 'Your backend will own queue order and broadcast updates.' },
  scoring: { title: 'Live matches', stage: 4, icon: 'score', description: 'Follow each rally and keep every point in view.', items: ['Match cards and court assignments', 'Frontend scoreboard controls', 'Scoring format and match state'], handoff: 'Your backend will authorize scorers, persist scores, and publish match updates.' },
  leaderboard: { title: 'Leaderboard', stage: 5, icon: 'trophy', description: 'A friendly bit of competition, all in one place.', items: ['Player rankings and filters', 'Ranking movement and player details'], handoff: 'Your backend will calculate and serve official rankings.' },
  statistics: { title: 'Your game, in numbers', stage: 6, icon: 'chart', description: 'Look back at your matches and see your progress.', items: ['Player statistics and match history', 'Date filters and match detail views'], handoff: 'Your backend will supply match records and aggregated statistics.' },
  tournaments: { title: 'Tournaments', stage: 7, icon: 'flag', description: 'Find your next challenge, from social play to championship day.', items: ['Tournament information and brackets', 'Registration UI and registration status'], handoff: 'Your backend will validate entries, enforce capacity, and store registrations.' },
};

function time(value) { return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: state.business.information.timezone, hour: 'numeric', minute: '2-digit' }).format(new Date(value)); }
function date(value, options) { return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: state.business.information.timezone, ...options }).format(new Date(value)); }
function money(value) { return new Intl.NumberFormat(state.business.information.locale, { style: 'currency', currency: state.business.information.currency, maximumFractionDigits: 0 }).format(value); }
function details(rows) { return `<dl class="detail-list">${rows.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`; }

function applyBranding() {
  const { business: b } = state;
  const variables = { '--brand': b.colors.primary, '--brand-hover': b.colors.primaryHover, '--accent': b.colors.accent, '--accent-ink': b.colors.accentInk };
  Object.entries(variables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
  document.querySelectorAll('[data-business-name]').forEach(el => { el.textContent = b.name; });
  document.title = `Home · ${b.name}`;
  document.querySelector('meta[name="theme-color"]').content = b.colors.primary;
  const hero = document.querySelector('.hero-photo');
  if (hero && b.heroArtwork?.src) {
    try {
      const url = new URL(b.heroArtwork.src, location.href);
      if (url.protocol === 'https:' || url.origin === location.origin) { hero.src = url.href; hero.alt = b.heroArtwork.alt || ''; }
    } catch { /* Keep the bundled image when configuration is invalid. */ }
  }
  // Accept safe local/HTTPS logo URLs, and use the shared symbol if invalid.
  document.querySelectorAll('.brand-mark').forEach(el => {
    el.innerHTML = brandMark();
    if (!b.logoUrl) return;
    let url;
    try { url = new URL(b.logoUrl, location.href); } catch { return; }
    if (url.protocol !== 'https:' && url.origin !== location.origin) return;
    const img = document.createElement('img');
    img.src = url.href; img.alt = ''; img.addEventListener('error', () => { el.innerHTML = brandMark(); }, { once: true });
    el.replaceChildren(img);
  });
}

function renderBooking() {
  const booking = state.dashboard.upcomingBooking;
  const root = document.querySelector('#next-booking');
  const court = state.business.courts.find(c => c.id === booking?.courtId);
  if (!booking || !court) { root.innerHTML = '<div class="empty-state">No sample session for these courts.</div>'; return; }
  root.innerHTML = `<div class="compact-booking"><div class="date-tile"><span>${esc(date(booking.startsAt, { month: 'short' }).toUpperCase())}</span><strong>${esc(date(booking.startsAt, { day: 'numeric' }))}</strong></div><div><h3>${esc(court.name)} · ${esc(booking.format)}</h3><p>${esc(time(booking.startsAt))} – ${esc(time(booking.endsAt))}</p></div><button class="icon-button" data-action="booking" aria-label="View your sample booking">${icon('ticket')}</button></div>`;
}

function renderStats() {
  const d = state.dashboard;
  const hours = d.activity.reduce((sum, day) => sum + day.hours, 0);
  const difference = hours - d.previousWeekHours;
  const metrics = [
    { label: 'Time Well Spent', value: hours, unit: 'hrs' },
    { label: 'Courts Active', value: state.business.courts.filter(c => d.courtSnapshots.some(s => s.courtId === c.id && ['available', 'in-use'].includes(s.status))).length, unit: '' },
    { label: 'Clubhouse Players', value: d.communityCount, unit: '' },
    { label: 'Weekly Trend', value: `${difference >= 0 ? '+' : ''}${difference}`, unit: 'hrs' },
  ];
  document.querySelector('#stats-grid').innerHTML = metrics.map(stat => `<article class="stat-card"><div class="stat-value"><strong>${esc(stat.value)}</strong><span>${esc(stat.unit)}</span></div><h2 class="stat-top">${esc(stat.label)}</h2></article>`).join('');
}

function renderCourts() {
  const courts = state.business.courts.map(c => ({ ...c, ...(state.dashboard.courtSnapshots.find(s => s.courtId === c.id) || { status: 'unavailable', label: 'No sample data', note: 'Availability not connected' }) }));
  const filtered = state.courtFilter === 'all' ? courts : courts.filter(c => ['doubles', 'singles'].includes(state.courtFilter) ? (c.formats || []).some(f => f.toLowerCase() === state.courtFilter) : c.status === state.courtFilter);
  document.querySelector('#court-count').textContent = `${courts.length} ${courts.length === 1 ? 'court' : 'courts'}`;
  document.querySelector('#court-grid').innerHTML = filtered.length ? filtered.map(c => `<article class="court-card"><div class="court-visual ${esc(c.status)}"><div class="court-diagram" aria-hidden="true"><div class="court-lines"><i></i></div></div>${badge(c.label, c.status === 'available' ? 'success' : c.status === 'in-use' ? 'warning' : 'neutral', true)}</div><div class="court-details"><div class="court-title-row"><h3><button class="court-title-button" data-court="${esc(c.id)}" aria-label="View ${esc(c.name)} details">${esc(c.name)}</button></h3><span class="court-type">${esc(c.type)}</span></div><p>${esc(c.note)}</p><div class="court-formats">${esc((c.formats || []).join(' · '))}</div><div class="court-card-footer"><span class="court-price">${esc(money(c.hourlyRate))}<small> / hr</small></span><button class="text-button" data-book-court="${esc(c.id)}" aria-label="Book ${esc(c.name)}">Book court</button></div></div></article>`).join('') : '<div class="empty-state">No courts match this filter. Try All courts.</div>';
  document.querySelector('#court-results').textContent = `${filtered.length} of ${courts.length} courts shown.`;
  document.querySelectorAll('[data-court-filter]').forEach(button => { const selected = button.dataset.courtFilter === state.courtFilter; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
}

function renderDashboard() {
  const { dashboard: d } = state;
  document.querySelectorAll('[data-player-first]').forEach(el => { el.textContent = d.player.firstName; });
  document.querySelectorAll('[data-player-initials]').forEach(el => { el.textContent = `${d.player.firstName[0]}${d.player.lastName[0]}`; });
  document.querySelector('#demo-date').textContent = date(d.snapshotAt, { weekday: 'short', month: 'short', day: 'numeric' });
  document.querySelector('#demo-date').dateTime = d.snapshotAt;
  document.querySelector('#community-count').textContent = d.communityCount;
  renderBooking(); renderStats(); renderCourts();
  const totalHours = d.activity.reduce((sum, item) => sum + item.hours, 0);
  const maxHours = Math.max(1, ...d.activity.map(item => item.hours));
  const chart = document.querySelector('#activity-chart');
  chart.innerHTML = d.activity.map(item => `<div class="chart-column"><div class="chart-track"><div class="chart-bar" style="--bar-height:${Math.min(100, Math.max(0, item.hours / maxHours * 100))}%"></div></div><span>${esc(item.day)}</span></div>`).join('');
  chart.setAttribute('aria-label', `Sample court hours by day: ${d.activity.map(item => `${item.day} ${item.hours}`).join(', ')}. Total ${totalHours} hours.`);
  document.querySelector('.activity-summary strong').innerHTML = `${esc(totalHours)}<span>hrs</span>`;
  const difference = totalHours - d.previousWeekHours;
  document.querySelector('.positive-chip').textContent = `${difference >= 0 ? '+' : ''}${difference} hrs vs. last week`;
  const eventRoot = document.querySelector('.event-content');
  eventRoot.innerHTML = d.event ? `<div class="event-date"><strong>${esc(date(d.event.startsAt, { day: 'numeric' }))}</strong><span>${esc(date(d.event.startsAt, { month: 'short' }).toUpperCase())}</span></div><div><span class="event-category">${esc(d.event.category)}</span><h3>${esc(d.event.name)}</h3><p>${esc(d.event.summary)}</p><div class="event-meta">${icon('clock')}${esc(time(d.event.startsAt))} – ${esc(time(d.event.endsAt))}</div></div>` : '<p>No sample events to show.</p>';
  document.querySelector('.event-footer').hidden = !d.event;
  document.querySelector('#dashboard-content').setAttribute('aria-busy', 'false');
}

function openFeature(key) {
  const f = features[key];
  if (key === 'booking') return openBookingPreview();
  if (!f) return;
  dialog.open(f.title, `<div class="dialog-feature-icon">${icon(f.icon)}</div>${badge(`Planned · Stage ${f.stage}`)}<p class="feature-description">${esc(f.description)}</p><ul class="feature-list">${f.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="notice"><strong>Frontend development preview</strong><p>This module is not built yet. No action has been submitted.</p><p>${esc(f.handoff)}</p></div><button class="button button-primary" data-action="close">Back to dashboard</button>`);
}

function openBooking() {
  const b = state.dashboard.upcomingBooking;
  const court = state.business.courts.find(c => c.id === b?.courtId);
  if (!b || !court) { dialog.open('My bookings', '<div class="empty-state">No sample bookings for this court configuration.</div>'); return; }
  dialog.open('Your sample booking', `<div class="notice">This is a fictional reservation for UI development. No court is reserved and no payment has been taken.</div>${details([['Reference', b.id], ['Court', `${court.name} · ${court.type}`], ['Date', date(b.startsAt, { dateStyle: 'full' })], ['Time', `${time(b.startsAt)} – ${time(b.endsAt)}`], ['Players', `${b.players} · ${b.format}`], ['Sample total', money(b.total)], ['Status', b.status]])}<p>Booking history, cancellation, and rescheduling will be developed in the Booking stage.</p><button class="button button-primary" data-action="close">Got it</button>`);
}

// Transient UI state only. The repository supplies fictional slots, never a booking write.
let bookingDraft = null;
let slotRequest = 0;
function localClock(value) {
  const [hours, minutes] = value.split(':').map(Number);
  return new Intl.DateTimeFormat(state.business.information.locale, { timeZone: 'UTC', hour: 'numeric', minute: '2-digit' }).format(new Date(Date.UTC(2000, 0, 1, hours, minutes)));
}
function openBookingPreview(courtId, restore = false) {
  const b = state.business;
  if (!b.courts.length) { dialog.open('Book a Court', '<div class="empty-state">No courts are configured.</div>'); return; }
  const range = previewDateRange(b, state.dashboard);
  const r = b.bookingRules;
  if (!restore || !bookingDraft) bookingDraft = { courtId: courtId || b.courts[0].id, day: range.min, durationMinutes: r.minDurationMinutes, players: Math.min(4, r.maxPlayers), start: null };
  const durations = [];
  for (let value = r.minDurationMinutes; value <= r.maxDurationMinutes; value += r.slotMinutes) durations.push(value);
  dialog.open('Book a Court', `<div class="notice"><strong>Frontend booking preview</strong><br>Choose a fictional slot. Dates use the demo day, not today. Nothing is reserved, saved, or charged.</div><form id="booking-form"><div class="form-row"><div class="field"><label for="booking-court">Court</label><select id="booking-court" name="courtId">${b.courts.map(c => `<option value="${esc(c.id)}" ${c.id === bookingDraft.courtId ? 'selected' : ''}>${esc(c.name)} · ${esc(c.type)}</option>`).join('')}</select></div><div class="field"><label for="booking-day">Date</label><input id="booking-day" name="day" type="date" min="${range.min}" max="${range.max}" value="${esc(bookingDraft.day)}" required></div></div><div class="form-row"><div class="field"><label for="booking-duration">Duration</label><select id="booking-duration" name="durationMinutes">${durations.map(value => `<option value="${value}" ${value === bookingDraft.durationMinutes ? 'selected' : ''}>${value} minutes</option>`).join('')}</select></div><div class="field"><label for="booking-players">Players</label><select id="booking-players" name="players">${Array.from({ length: r.maxPlayers }, (_, i) => `<option value="${i + 1}" ${i + 1 === bookingDraft.players ? 'selected' : ''}>${i + 1} ${i ? 'players' : 'player'}</option>`).join('')}</select></div></div><p class="subtle" id="slot-help">Sample slots · ${esc(b.information.timezone)} · ${esc(b.operatingHours.open)}–${esc(b.operatingHours.close)}</p><div id="slot-status" role="status" class="subtle"></div><div id="booking-slots" class="booking-slots" role="group" aria-label="Choose a sample start time" aria-describedby="slot-help"></div><div class="booking-summary"><div><small>Sample session total</small><strong id="booking-price">${esc(money(b.courts.find(c => c.id === bookingDraft.courtId).hourlyRate * bookingDraft.durationMinutes / 60))}</strong></div><button class="button button-lime" id="review-booking" type="submit" disabled>Review demo</button></div></form>`);
  loadBookingSlots();
}
async function loadBookingSlots() {
  const form = document.querySelector('#booking-form');
  if (!form) return;
  const request = ++slotRequest;
  const values = new FormData(form);
  const keep = bookingDraft.start;
  bookingDraft = { courtId: values.get('courtId'), day: values.get('day'), durationMinutes: Number(values.get('durationMinutes')), players: Number(values.get('players')), start: null };
  const root = document.querySelector('#booking-slots');
  const status = document.querySelector('#slot-status');
  document.querySelector('#review-booking').disabled = true;
  root.replaceChildren(); status.textContent = 'Loading fictional slots…';
  try {
    const slots = await repository.getBookingSlots(bookingDraft);
    if (request !== slotRequest || !form.isConnected) return;
    bookingDraft.slots = slots;
    const court = state.business.courts.find(c => c.id === bookingDraft.courtId);
    document.querySelector('#booking-price').textContent = money(court.hourlyRate * bookingDraft.durationMinutes / 60);
    root.innerHTML = slots.map(slot => `<button type="button" data-slot="${esc(slot.start)}" aria-pressed="false" ${slot.available ? '' : 'disabled'} aria-label="${esc(localClock(slot.start))}${slot.available ? '' : ', unavailable in sample'}">${esc(localClock(slot.start))}${slot.available ? '' : '<br><small>Unavailable</small>'}</button>`).join('');
    status.textContent = slots.some(s => s.available) ? 'Select a sample start time.' : 'No sample slots for this date and duration. Try another selection.';
    if (slots.some(s => s.start === keep && s.available)) selectSlot(keep);
  } catch {
    if (request !== slotRequest || !form.isConnected) return;
    status.textContent = 'Slots could not load. Change the date or court to retry.';
  }
}
function selectSlot(start) {
  const slot = bookingDraft?.slots?.find(s => s.start === start && s.available);
  if (!slot) return;
  bookingDraft.start = start;
  document.querySelectorAll('[data-slot]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.slot === start)));
  document.querySelector('#slot-status').textContent = `Sample session: ${localClock(slot.start)} – ${localClock(slot.end)}.`;
  document.querySelector('#review-booking').disabled = false;
}
function reviewBookingPreview() {
  const slot = bookingDraft?.slots?.find(s => s.start === bookingDraft.start && s.available);
  if (!slot) return;
  const court = state.business.courts.find(c => c.id === bookingDraft.courtId);
  dialog.open('Review your demo session', `<div class="notice">Simulation only · This review does not hold a court or submit a reservation.</div>${details([['Court', `${court.name} · ${court.type}`], ['Date', date(`${bookingDraft.day}T12:00:00Z`, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })], ['Time', `${localClock(slot.start)} – ${localClock(slot.end)}`], ['Timezone', state.business.information.timezone], ['Players', bookingDraft.players], ['Duration', `${bookingDraft.durationMinutes} minutes`], ['Sample total', money(slot.total)]])}<div class="form-actions"><button class="button button-lime" data-action="finish-demo">Finish demo</button><button class="button button-outline" data-action="edit-booking">Edit selection</button></div>`);
}
function editBookingPreview() { openBookingPreview(bookingDraft?.courtId, true); }
function finishBookingPreview() {
  bookingDraft = null;
  dialog.open('Demo complete', `<div class="dialog-feature-icon">${icon('calendar')}</div><p>You’ve tried the booking flow. No court was reserved and no payment was taken. The dashboard and your sample upcoming session have not changed.</p><button class="button button-lime" data-action="close">Back to the clubhouse</button>`);
}
function openProgrammes() {
  dialog.open('Find your people', `<div class="notice">Sample programmes · No enrolment or payment is submitted.</div><div class="more-menu"><button class="button button-outline" data-action="event">${icon('queue')}Saturday Social Doubles</button><button class="button button-outline" data-feature="tournaments">${icon('trophy')}Explore tournaments</button></div>`);
}
function previewRSVP() {
  dialog.open('RSVP preview complete', '<div class="notice">No registration was submitted.</div><p>This sample RSVP shows the intended interaction. Real places, player eligibility, and confirmation will come from the backend.</p><button class="button button-lime" data-action="close">Done</button>');
}

document.addEventListener('change', event => {
  if (!event.target.closest('#booking-form')) return;
  if (event.target.name === 'players') { bookingDraft.players = Number(event.target.value); return; }
  bookingDraft.start = null;
  loadBookingSlots();
});

function openCourt(id) {
  const c = state.business.courts.find(c => c.id === id);
  if (!c) return;
  const s = state.dashboard.courtSnapshots.find(s => s.courtId === id);
  const { operatingHours: h, bookingRules: r } = state.business;
  dialog.open(c.name, `<div class="notice">Sample court details · This snapshot does not guarantee availability.</div>${details([['Court', c.name], ['Type', c.type], ['Sample status', s?.label || 'No sample data'], ['Hourly rate', money(c.hourlyRate)], ['Business hours', `${h.open} – ${h.close}`], ['Session duration', `${r.minDurationMinutes}–${r.maxDurationMinutes} minutes`], ['Book ahead', `${r.advanceDays} days`], ['Maximum players', r.maxPlayers]])}<p>Try the sample booking flow to choose a fictional time.</p><button class="button button-lime" data-book-court="${esc(c.id)}">Book this court</button>`);
}

function openProfile() {
  const p = state.dashboard.player;
  dialog.open('Your player profile', `<div class="notice">Demo player · No account is signed in. Login and registration will need your classmate’s authentication service.</div>${details([['Name', `${p.firstName} ${p.lastName}`], ['Playing level', p.level], ['Joined', p.joined], ['Club', state.business.name]])}<p>Profile editing and account access are planned for a later stage.</p><button class="button button-outline" data-feature="statistics">About player statistics</button>`);
}

function openNotifications() {
  document.querySelector('.notification-dot')?.setAttribute('hidden', '');
  const b = state.dashboard.upcomingBooking, e = state.dashboard.event;
  dialog.open('Clubhouse updates', `<div class="notice">Sample notifications · No messages have been sent.</div><ul class="notification-list">${b ? `<li><span class="icon-soft">${icon('calendar')}</span><div><strong>Your next game is on the calendar</strong><p>Sample session on ${esc(date(b.startsAt, { month: 'short', day: 'numeric' }))}, ${esc(time(b.startsAt))}. Open My bookings to see the example.</p></div></li>` : ''}${e ? `<li><span class="icon-soft">${icon('flag')}</span><div><strong>${esc(e.name)}</strong><p>Explore the sample community event on ${esc(date(e.startsAt, { month: 'long', day: 'numeric' }))}.</p></div></li>` : ''}</ul>${!b && !e ? '<p>No sample updates.</p>' : ''}`);
}

function openEvent() {
  const e = state.dashboard.event;
  if (!e) return;
  dialog.open(e.name, `<div class="notice">Fictional community event · No registration is submitted from this preview.</div><p>${esc(e.description)}</p>${details([['Date', date(e.startsAt, { dateStyle: 'full' })], ['Time', `${time(e.startsAt)} – ${time(e.endsAt)}`], ['Level', e.level], ['Club', state.business.name]])}<div class="form-actions"><button class="button button-lime" data-action="rsvp-demo">Try demo RSVP</button><button class="button button-outline" data-feature="tournaments">Tournament information</button></div>`);
}

function openSettings() {
  const b = state.business;
  dialog.open('Business preview', `<div class="notice">Try the shared design with different branding. Changes affect this page only and reset on reload. This is not the Admin Dashboard.</div><form id="brand-form"><div class="field"><label for="business-name">Business name</label><input id="business-name" name="businessName" required maxlength="40" value="${esc(b.name)}" autocomplete="organization"></div><div class="form-row"><div class="field"><label for="primary-color">Primary color</label><input type="color" id="primary-color" name="primaryColor" value="${esc(b.colors.primary)}"></div><div class="field"><label for="accent-color">Accent color</label><input type="color" id="accent-color" name="accentColor" value="${esc(b.colors.accent)}"></div></div><div class="field"><label for="court-number">Number of sample courts</label><select id="court-number" name="courtCount">${[1,2,3,4,6,8].map(n => `<option ${n === b.courts.length ? 'selected' : ''}>${n}</option>`).join('')}</select><small>New courts show “No sample data” until fixtures or API data are provided.</small></div><div id="brand-error" class="notice error-notice" role="alert" hidden></div><p class="subtle">Logo, court names, business information, hours, currency, and booking rules are configured in <code>js/config/business.js</code>.</p><div class="form-actions"><button type="submit" class="button button-primary">Apply preview</button><button type="button" class="button button-outline" data-action="reset-brand">Reset defaults</button></div></form>`);
}

function openMore() {
  dialog.open('Your clubhouse', `<div class="more-menu"><button class="button button-outline" data-feature="booking">${icon('calendar')}Book a Court</button><button class="button button-outline" data-feature="queue">${icon('queue')}Live queue</button><button class="button button-outline" data-feature="scoring">${icon('score')}Live matches</button><button class="button button-outline" data-action="notifications">${icon('bell')}Notifications</button><button class="button button-outline" data-feature="leaderboard">${icon('trophy')}Leaderboard</button><button class="button button-outline" data-feature="tournaments">${icon('flag')}Tournaments</button><button class="button button-outline" data-action="booking">${icon('ticket')}My bookings</button><button class="button button-outline" data-feature="statistics">${icon('chart')}My statistics</button><button class="button button-outline" data-action="profile">${icon('user')}My profile</button></div>`);
}

document.addEventListener('click', async event => {
  const target = event.target.closest('[data-feature], [data-action], [data-court], [data-court-filter], [data-book-court], [data-slot]');
  if (!target || !state.dashboard) return;
  if (target.dataset.bookCourt) return openBookingPreview(target.dataset.bookCourt);
  if (target.dataset.slot) return selectSlot(target.dataset.slot);
  if (target.dataset.feature) return openFeature(target.dataset.feature);
  if (target.dataset.courtFilter) { state.courtFilter = target.dataset.courtFilter; return renderCourts(); }
  if (target.dataset.court) return openCourt(target.dataset.court);
  const actions = { booking: openBooking, profile: openProfile, notifications: openNotifications, event: openEvent, programmes: openProgrammes, 'rsvp-demo': previewRSVP, 'finish-demo': finishBookingPreview, 'edit-booking': editBookingPreview, settings: openSettings, more: openMore, close: () => dialog.close(), 'reset-brand': async () => { state.business = await repository.getBusiness(); applyBranding(); renderBooking(); renderStats(); renderCourts(); dialog.close(); showToast('Default business preview restored.'); } };
  actions[target.dataset.action]?.();
});

document.addEventListener('submit', event => {
  if (event.target.id === 'booking-form') { event.preventDefault(); return reviewBookingPreview(); }
  if (event.target.id !== 'brand-form') return;
  event.preventDefault();
  const form = new FormData(event.target);
  const primary = form.get('primaryColor'), accent = form.get('accentColor'), name = form.get('businessName').trim();
  const error = document.querySelector('#brand-error');
  if (!name || contrastRatio(primary, '#ffffff') < 4.5 || contrastRatio(primary, accent) < 4.5) {
    error.textContent = 'Enter a business name and choose a dark primary color with a light accent. Both text combinations must meet a 4.5:1 contrast ratio.';
    error.hidden = false; return;
  }
  state.business.name = name;
  state.business.colors = { primary, primaryHover: primary, accent, accentInk: primary };
  const count = Number(form.get('courtCount'));
  state.business.courts = Array.from({ length: count }, (_, i) => state.business.courts[i] || { id: `court-${i + 1}`, name: `Court ${String(i + 1).padStart(2, '0')}`, type: 'Outdoor', hourlyRate: 400 });
  applyBranding(); renderBooking(); renderStats(); renderCourts(); dialog.close();
  showToast('Business preview updated for this page. Nothing was saved to a server.');
});

async function init() {
  hydrateIcons();
  try {
    const [business, dashboard] = await Promise.all([repository.getBusiness(), repository.getDashboard()]);
    state.business = business; state.dashboard = dashboard;
    applyBranding(); renderDashboard();
  } catch (error) {
    document.querySelector('#dashboard-content').hidden = true;
    const notice = document.querySelector('#load-error');
    notice.hidden = false; notice.textContent = 'The dashboard could not load. Refresh to retry. If this continues, check the configured data source.';
    console.error('Dashboard initialization failed:', error);
  }
}
init();
