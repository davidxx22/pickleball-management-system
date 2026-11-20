import { repository } from './services/repository.js';
import { icon, hydrateIcons } from './shared/icons.js';
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
  // Accept safe local/HTTPS logo URLs, and use the shared symbol if invalid.
  document.querySelectorAll('.brand-mark').forEach(el => {
    el.innerHTML = icon('brand');
    if (!b.logoUrl) return;
    let url;
    try { url = new URL(b.logoUrl, location.href); } catch { return; }
    if (url.protocol !== 'https:' && url.origin !== location.origin) return;
    const img = document.createElement('img');
    img.src = url.href; img.alt = ''; img.addEventListener('error', () => { el.innerHTML = icon('brand'); }, { once: true });
    el.replaceChildren(img);
  });
}

function renderBooking() {
  const booking = state.dashboard.upcomingBooking;
  const root = document.querySelector('#next-booking');
  const court = state.business.courts.find(c => c.id === booking?.courtId);
  if (!booking || !court) { root.innerHTML = '<div class="empty-state">No sample session for these courts.</div>'; return; }
  const minutes = Math.round((new Date(booking.endsAt) - new Date(booking.startsAt)) / 60000);
  root.innerHTML = `<div class="booking-date"><div class="date-tile"><span>${esc(date(booking.startsAt, { month: 'short' }).toUpperCase())}</span><strong>${esc(date(booking.startsAt, { day: 'numeric' }))}</strong></div><div><h3>${esc(court.name)}</h3><p>${esc(court.type)} court · ${esc(booking.format)}</p></div></div><div class="booking-info">${icon('clock')}<span>${esc(time(booking.startsAt))} – ${esc(time(booking.endsAt))}</span></div><div class="booking-info">${icon('queue')}<span>${esc(booking.players)} players · ${minutes}-minute session</span></div><div class="booking-bottom">${badge(booking.status, 'success', true)}<span class="booking-format">${esc(money(booking.total))} / session</span></div><button class="button button-outline button-full" data-action="booking">View booking</button>`;
}

function renderStats() {
  document.querySelector('#stats-grid').innerHTML = state.dashboard.stats.map(stat => `<article class="stat-card"><h2 class="stat-top"><span class="stat-icon">${icon(stat.icon)}</span>${esc(stat.label)}</h2><div class="stat-value"><strong>${esc(stat.value)}</strong><span>${esc(stat.unit)}</span></div><p class="stat-caption ${stat.positive ? 'positive' : ''}">${esc(stat.caption)}</p></article>`).join('');
}

function renderCourts() {
  const courts = state.business.courts.map(c => ({ ...c, ...(state.dashboard.courtSnapshots.find(s => s.courtId === c.id) || { status: 'unavailable', label: 'No sample data', note: 'Availability not connected' }) }));
  const filtered = state.courtFilter === 'all' ? courts : courts.filter(c => c.status === state.courtFilter);
  document.querySelector('#court-count').textContent = `${courts.length} ${courts.length === 1 ? 'court' : 'courts'}`;
  document.querySelector('#court-grid').innerHTML = filtered.length ? filtered.map(c => `<article class="court-card"><div class="court-visual ${esc(c.status)}"><div class="court-diagram" aria-hidden="true"><div class="court-lines"><i></i></div></div>${badge(c.label, c.status === 'available' ? 'success' : c.status === 'in-use' ? 'warning' : 'neutral', true)}</div><div class="court-details"><div class="court-title-row"><h3>${esc(c.name)}</h3><span class="court-type">${esc(c.type)}</span></div><p>${esc(c.note)}</p><div class="court-card-footer"><span class="court-price">${esc(money(c.hourlyRate))}<small> / hr</small></span><button class="text-button" data-court="${esc(c.id)}" aria-label="View ${esc(c.name)} details">View court</button></div></div></article>`).join('') : '<div class="empty-state">No courts match this filter. Try All courts.</div>';
  document.querySelector('#court-results').textContent = `${filtered.length} of ${courts.length} courts shown.`;
  document.querySelectorAll('[data-court-filter]').forEach(button => { const selected = button.dataset.courtFilter === state.courtFilter; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
}

function renderDashboard() {
  const { dashboard: d } = state;
  document.querySelectorAll('[data-player-name]').forEach(el => { el.textContent = `${d.player.firstName} ${d.player.lastName}`; });
  document.querySelectorAll('[data-player-first]').forEach(el => { el.textContent = d.player.firstName; });
  document.querySelectorAll('[data-player-initials]').forEach(el => { el.textContent = `${d.player.firstName[0]}${d.player.lastName[0]}`; });
  document.querySelector('#demo-date').textContent = date(d.snapshotAt, { weekday: 'long', month: 'long', day: 'numeric' });
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
  if (!f) return;
  dialog.open(f.title, `<div class="dialog-feature-icon">${icon(f.icon)}</div>${badge(`Planned · Stage ${f.stage}`)}<p class="feature-description">${esc(f.description)}</p><ul class="feature-list">${f.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul><div class="notice"><strong>Frontend development preview</strong><p>This module is not built yet. No action has been submitted.</p><p>${esc(f.handoff)}</p></div><button class="button button-primary" data-action="close">Back to dashboard</button>`);
}

function openBooking() {
  const b = state.dashboard.upcomingBooking;
  const court = state.business.courts.find(c => c.id === b?.courtId);
  if (!b || !court) { dialog.open('My bookings', '<div class="empty-state">No sample bookings for this court configuration.</div>'); return; }
  dialog.open('Your sample booking', `<div class="notice">This is a fictional reservation for UI development. No court is reserved and no payment has been taken.</div>${details([['Reference', b.id], ['Court', `${court.name} · ${court.type}`], ['Date', date(b.startsAt, { dateStyle: 'full' })], ['Time', `${time(b.startsAt)} – ${time(b.endsAt)}`], ['Players', `${b.players} · ${b.format}`], ['Sample total', money(b.total)], ['Status', b.status]])}<p>Booking history, cancellation, and rescheduling will be developed in the Booking stage.</p><button class="button button-primary" data-action="close">Got it</button>`);
}

function openCourt(id) {
  const c = state.business.courts.find(c => c.id === id);
  if (!c) return;
  const s = state.dashboard.courtSnapshots.find(s => s.courtId === id);
  const { operatingHours: h, bookingRules: r } = state.business;
  dialog.open(c.name, `<div class="notice">Sample court details · This snapshot does not guarantee availability.</div>${details([['Court', c.name], ['Type', c.type], ['Sample status', s?.label || 'No sample data'], ['Hourly rate', money(c.hourlyRate)], ['Business hours', `${h.open} – ${h.close}`], ['Session duration', `${r.minDurationMinutes}–${r.maxDurationMinutes} minutes`], ['Book ahead', `${r.advanceDays} days`], ['Maximum players', r.maxPlayers]])}<p>The full booking calendar is planned for Stage 2.</p><button class="button button-primary" data-feature="booking">About the booking stage</button>`);
}

function openProfile() {
  const p = state.dashboard.player;
  dialog.open('Your player profile', `<div class="notice">Demo player · No account is signed in. Login and registration will need your classmate’s authentication service.</div>${details([['Name', `${p.firstName} ${p.lastName}`], ['Playing level', p.level], ['Joined', p.joined], ['Club', state.business.name]])}<p>Profile editing and account access are planned for a later stage.</p><button class="button button-outline" data-feature="statistics">About player statistics</button>`);
}

function openNotifications() {
  document.querySelector('.notification-dot').hidden = true;
  const b = state.dashboard.upcomingBooking, e = state.dashboard.event;
  dialog.open('Clubhouse updates', `<div class="notice">Sample notifications · No messages have been sent.</div><ul class="notification-list">${b ? `<li><span class="icon-soft">${icon('calendar')}</span><div><strong>Your next game is on the calendar</strong><p>Sample session on ${esc(date(b.startsAt, { month: 'short', day: 'numeric' }))}, ${esc(time(b.startsAt))}. Open My bookings to see the example.</p></div></li>` : ''}${e ? `<li><span class="icon-soft">${icon('flag')}</span><div><strong>${esc(e.name)}</strong><p>Explore the sample community event on ${esc(date(e.startsAt, { month: 'long', day: 'numeric' }))}.</p></div></li>` : ''}</ul>${!b && !e ? '<p>No sample updates.</p>' : ''}`);
}

function openEvent() {
  const e = state.dashboard.event;
  if (!e) return;
  dialog.open(e.name, `<div class="notice">Fictional community event · No registration is submitted from this preview.</div><p>${esc(e.description)}</p>${details([['Date', date(e.startsAt, { dateStyle: 'full' })], ['Time', `${time(e.startsAt)} – ${time(e.endsAt)}`], ['Level', e.level], ['Club', state.business.name]])}<button class="button button-primary" data-feature="tournaments">About tournaments & registration</button>`);
}

function openSettings() {
  const b = state.business;
  dialog.open('Business preview', `<div class="notice">Try the shared design with different branding. Changes affect this page only and reset on reload. This is not the Admin Dashboard.</div><form id="brand-form"><div class="field"><label for="business-name">Business name</label><input id="business-name" name="businessName" required maxlength="40" value="${esc(b.name)}" autocomplete="organization"></div><div class="form-row"><div class="field"><label for="primary-color">Primary color</label><input type="color" id="primary-color" name="primaryColor" value="${esc(b.colors.primary)}"></div><div class="field"><label for="accent-color">Accent color</label><input type="color" id="accent-color" name="accentColor" value="${esc(b.colors.accent)}"></div></div><div class="field"><label for="court-number">Number of sample courts</label><select id="court-number" name="courtCount">${[1,2,3,4,6,8].map(n => `<option ${n === b.courts.length ? 'selected' : ''}>${n}</option>`).join('')}</select><small>New courts show “No sample data” until fixtures or API data are provided.</small></div><div id="brand-error" class="notice error-notice" role="alert" hidden></div><p class="subtle">Logo, court names, business information, hours, currency, and booking rules are configured in <code>js/config/business.js</code>.</p><div class="form-actions"><button type="submit" class="button button-primary">Apply preview</button><button type="button" class="button button-outline" data-action="reset-brand">Reset defaults</button></div></form>`);
}

function openMore() {
  dialog.open('Your clubhouse', `<div class="more-menu"><button class="button button-outline" data-feature="leaderboard">${icon('trophy')}Leaderboard</button><button class="button button-outline" data-feature="tournaments">${icon('flag')}Tournaments</button><button class="button button-outline" data-action="booking">${icon('ticket')}My bookings</button><button class="button button-outline" data-feature="statistics">${icon('chart')}My statistics</button><button class="button button-outline" data-action="profile">${icon('user')}My profile</button></div>`);
}

document.addEventListener('click', async event => {
  const target = event.target.closest('[data-feature], [data-action], [data-court], [data-court-filter]');
  if (!target || !state.dashboard) return;
  if (target.dataset.feature) return openFeature(target.dataset.feature);
  if (target.dataset.courtFilter) { state.courtFilter = target.dataset.courtFilter; return renderCourts(); }
  if (target.dataset.court) return openCourt(target.dataset.court);
  const actions = { booking: openBooking, profile: openProfile, notifications: openNotifications, event: openEvent, settings: openSettings, more: openMore, close: () => dialog.close(), 'reset-brand': async () => { state.business = await repository.getBusiness(); applyBranding(); renderBooking(); renderCourts(); dialog.close(); showToast('Default business preview restored.'); } };
  actions[target.dataset.action]?.();
});

document.addEventListener('submit', event => {
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
  applyBranding(); renderBooking(); renderCourts(); dialog.close();
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
