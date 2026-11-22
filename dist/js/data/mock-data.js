/** Fixed, clearly labeled fixtures. All dates use explicit offsets; no host timezone assumptions. */
export const mockDashboard = {
  source: 'mock',
  snapshotAt: '2026-11-20T15:00:00+08:00',
  player: { id: 'player-demo', firstName: 'Alex', lastName: 'Lee', level: 'Intermediate', joined: 'August 2026', homeClub: 'Sample clubhouse' },
  communityCount: 32,
  upcomingBooking: { id: 'BK-DEMO-1042', courtId: 'court-3', startsAt: '2026-11-20T18:00:00+08:00', endsAt: '2026-11-20T19:00:00+08:00', format: 'Doubles', players: 4, status: 'Sample confirmed', total: 500 },
  stats: [
    { label: 'Matches played', value: '24', unit: 'games', caption: '6 games this month', icon: 'paddle', positive: false },
    { label: 'Win rate', value: '68', unit: '%', caption: '+8% vs. last month', icon: 'chart', positive: true },
    { label: 'Current ranking', value: '#12', unit: 'in club', caption: 'Up 3 places this month', icon: 'trophy', positive: true },
    { label: 'Time on court', value: '18.5', unit: 'hrs', caption: 'This month so far', icon: 'clock', positive: false },
  ],
  courtSnapshots: [
    { courtId: 'court-1', status: 'available', label: 'Available', note: 'Open for your next rally' },
    { courtId: 'court-2', status: 'in-use', label: 'In play', note: 'Session ends at 4:00 PM' },
    { courtId: 'court-3', status: 'available', label: 'Available', note: 'Open for your next rally' },
    { courtId: 'court-4', status: 'in-use', label: 'In play', note: 'Session ends at 3:30 PM' },
  ],
  activity: [ { day: 'Sat', hours: .5 }, { day: 'Sun', hours: 1 }, { day: 'Mon', hours: 0 }, { day: 'Tue', hours: 1.5 }, { day: 'Wed', hours: 0 }, { day: 'Thu', hours: 1 }, { day: 'Fri', hours: .5 } ],
  previousWeekHours: 3,
  event: { id: 'event-demo', name: 'Saturday Social Doubles', category: 'Social play', summary: 'Good rallies. New friends. All levels.', startsAt: '2026-11-28T08:00:00+08:00', endsAt: '2026-11-28T12:00:00+08:00', level: 'All levels welcome', description: 'A relaxed morning of rotating doubles. Bring a friend or meet a new playing partner. This is a sample event; registration is not open.' },
};
