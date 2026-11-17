/* Sample data for the prototype. Replace with API calls when the backend is ready. */
(function () {
  let seed = 24810;
  const rnd = () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const pick = a => a[Math.floor(rnd() * a.length)];
  const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));
  const FIRST = ['Noah', 'Mia', 'Lucas', 'Isabella', 'Ethan', 'Amelia', 'Mason', 'Harper', 'Logan', 'Ella', 'Jacob', 'Grace', 'Henry', 'Chloe', 'Owen', 'Zoe', 'Caleb', 'Layla', 'Wyatt', 'Nora', 'Leo', 'Hazel', 'Aria', 'Julian'];
  const LAST = ['Miller', 'Davis', 'Martinez', 'Lopez', 'Clark', 'Lewis', 'Walker', 'Hall', 'Young', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson'];
  const AREA = ['718', '347', '929', '646', '212', '917'];
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const phone = () => `+1 (${pick(AREA)}) 555-01${int(10, 99)}`;
  const mail = n => n.toLowerCase().replace(' ', '.') + '@gmail.com';
  const used = new Set();
  const name = () => { let n; do { n = pick(FIRST) + ' ' + pick(LAST); } while (used.has(n)); used.add(n); return n; };

  const CATS = ['Cleaning', 'Plumbing', 'Electrical', 'Handyman'];
  const categories = [
    { id: 'cat1', icon: 'sparkle', name: 'Cleaning', desc: 'Home, deep and move-out cleaning', services: 12, pros: 86, bookings: 1655, active: true, pricing: 'Fixed price' },
    { id: 'cat2', icon: 'drop', name: 'Plumbing', desc: 'Leaks, faucets, sinks and water heaters', services: 9, pros: 48, bookings: 1025, active: true, pricing: 'Estimated range' },
    { id: 'cat3', icon: 'zap', name: 'Electrical', desc: 'Fixtures, outlets, wiring and panels', services: 8, pros: 41, bookings: 749, active: true, pricing: 'Fixed price' },
    { id: 'cat4', icon: 'wrench', name: 'Handyman', desc: 'Mounting, assembly and small repairs', services: 11, pros: 41, bookings: 513, active: true, pricing: 'Hourly' },
    { id: 'cat5', icon: 'settings', name: 'Appliance repair', desc: 'Washer, dryer and dishwasher repair', services: 4, pros: 0, bookings: 0, active: false, pricing: 'Estimated range' },
  ];
  const prices = [
    ['Standard home cleaning', 'Cleaning', 'Fixed', 120, 150, null, null], ['Deep cleaning', 'Cleaning', 'Hourly', 35, 45, 105, 210],
    ['Kitchen faucet repair', 'Plumbing', 'Estimate', null, null, 85, 120], ['Bathroom sink installation', 'Plumbing', 'Fixed', 140, 175, null, null],
    ['Light fixture replacement', 'Electrical', 'Fixed', 95, 120, null, null], ['Outlet wiring', 'Electrical', 'Hourly', 60, 75, 60, 180],
    ['TV wall mounting', 'Handyman', 'Fixed', 85, 105, null, null], ['Furniture assembly', 'Handyman', 'Hourly', 40, 50, 40, 160],
    ['Move-out cleaning', 'Cleaning', 'Fixed', 220, 260, null, null], ['Water heater maintenance', 'Plumbing', 'Estimate', null, null, 120, 200],
    ['Ceiling fan installation', 'Electrical', 'Fixed', 130, 160, null, null], ['Shelf and curtain mounting', 'Handyman', 'Hourly', 45, 55, 45, 135],
  ].map((p, i) => ({ id: 'pr' + (i + 1), service: p[0], cat: p[1], type: p[2], day: p[3], night: p[4], from: p[5], to: p[6] }));
  const promos = [
    ['Welcome offer', 'WELCOME10', 'Percentage', 10, 'All services', 'Oct 01', 'Dec 31', 412, 1000, 'Active'],
    ['Cleaning week', 'CLEAN20', 'Fixed amount', 20, 'Cleaning', 'Nov 01', 'Nov 30', 96, 300, 'Active'],
    ['Night owl', 'NIGHT15', 'Percentage', 15, 'Electrical', 'Dec 01', 'Dec 15', 0, 200, 'Scheduled'],
    ['Fix it fall', 'FIXIT25', 'Fixed amount', 25, 'Handyman', 'Sep 01', 'Sep 30', 188, 200, 'Expired'],
    ['Plumbing rescue', 'PIPES10', 'Percentage', 10, 'Plumbing', 'Aug 01', 'Aug 31', 143, 150, 'Expired'],
  ].map((p, i) => ({ id: 'pm' + (i + 1), name: p[0], code: p[1], type: p[2], value: p[3], applies: p[4], start: p[5], end: p[6], used: p[7], limit: p[8], status: p[9] }));

  const customers = [
    ['Daniel Brooks', '+1 (718) 555-0142', 14, 'Oct 02, 2026', 'Active'], ['Emily Chen', '+1 (347) 555-0198', 9, 'Sep 21, 2026', 'Active'],
    ['Nathan Patel', '+1 (929) 555-0117', 22, 'Aug 30, 2026', 'Active'], ['Ava Johnson', '+1 (646) 555-0163', 3, 'Aug 14, 2026', 'Blocked'],
    ['Liam Smith', '+1 (212) 555-0181', 7, 'Jul 28, 2026', 'Active'], ['Olivia Brown', '+1 (718) 555-0125', 11, 'Jul 09, 2026', 'Active'],
    ['James Wilson', '+1 (917) 555-0109', 1, 'Jun 17, 2026', 'Blocked'], ['Sophia Garcia', '+1 (347) 555-0176', 18, 'May 03, 2026', 'Active'],
  ].map(c => ({ name: c[0], phone: c[1], bookings: c[2], joined: c[3], status: c[4] }));
  for (let i = 0; i < 30; i++) customers.push({ name: name(), phone: phone(), bookings: int(0, 24), joined: `${MON[Math.max(0, 4 - Math.floor(i / 6))]} ${String(int(1, 28)).padStart(2, '0')}, 2026`, status: rnd() < 0.1 ? 'Blocked' : 'Active' });
  customers.forEach((c, i) => { c.id = 'cus-' + (10482 - i); c.email = mail(c.name); c.address = i ? `${int(12, 480)} ${pick(['Bedford Ave', 'Kent Ave', 'Atlantic Ave', 'Court St', '7th Ave', 'Graham Ave'])}, Brooklyn, NY 112${int(10, 49)}` : '85 North 6th Street, Brooklyn, NY 11249'; c.spent = c.bookings * int(90, 130); });
  customers[0].spent = 1640;

  const pros = [
    ['Sushil Hemron', 'Plumbing', 0, null, 'Pending', 'Inactive'], ['Mark Johnson', 'Electrical', 128, 4.9, 'Approved', 'Active'],
    ['Olivia Brown', 'Cleaning', 96, 4.8, 'Approved', 'Active'], ['James Wilson', 'Handyman', 0, null, 'Pending', 'Inactive'],
    ['Liam Smith', 'Plumbing', 54, 4.6, 'Approved', 'Inactive'], ['Ava Johnson', 'Cleaning', 31, 3.2, 'Approved', 'Blocked'],
    ['Nathan Patel', 'Electrical', 0, null, 'Rejected', 'Inactive'], ['Emily Chen', 'Handyman', 72, 4.7, 'Approved', 'Active'],
  ].map(p => ({ name: p[0], cat: p[1], jobs: p[2], rating: p[3], verification: p[4], status: p[5] }));
  for (let i = 0; i < 20; i++) { const pend = rnd() < 0.2; pros.push({ name: name(), cat: pick(CATS), jobs: pend ? 0 : int(4, 150), rating: pend ? null : Math.round((3.6 + rnd() * 1.4) * 10) / 10, verification: pend ? 'Pending' : 'Approved', status: pend ? 'Inactive' : (rnd() < 0.08 ? 'Blocked' : rnd() < 0.15 ? 'Inactive' : 'Active') }); }
  const DOCSETS = { Plumbing: ['Plumbing license', 'NYC DOB'], Electrical: ['Electrician license', 'NYC DOB'], Cleaning: ['Cleaning certificate', 'ISSA'], Handyman: ['Home improvement license', 'NYC DCWP'] };
  const SKILLS = { Plumbing: ['Faucet repair', 'Sink installation', 'Water heater', 'Leak detection'], Electrical: ['Light fixtures', 'Outlet wiring', 'Ceiling fans', 'Panel checks'], Cleaning: ['Home cleaning', 'Deep cleaning', 'Move-out cleaning'], Handyman: ['TV mounting', 'Furniture assembly', 'Shelves', 'Small repairs'] };
  pros.forEach((p, i) => {
    p.id = 'pro-' + (2091 - i); p.email = mail(p.name); p.phone = i ? phone() : '+1 (929) 555-0134';
    p.area = pick(['Brooklyn and Queens, NY', 'Manhattan, NY', 'Brooklyn, NY', 'Queens and Bronx, NY']); p.applied = `${pick(['Sep', 'Oct'])} ${String(int(1, 24)).padStart(2, '0')}, 2026`; p.exp = int(2, 12) + ' years';
    if (!i) { p.area = 'Brooklyn and Queens, NY'; p.applied = 'Oct 22, 2026'; p.exp = '6 years'; }
    p.rate = int(8, 14) * 5; p.skills = SKILLS[p.cat];
    p.about = `${p.cat} professional with ${p.exp} of residential experience. ${p.skills.slice(0, 3).join(', ').toLowerCase()} and emergency call-outs.`;
    const ok = p.verification === 'Approved';
    p.docs = [{ name: 'Government ID', meta: 'Driver license · JPG · 1.2 MB', status: ok || !i ? 'Verified' : 'To review' }, { name: DOCSETS[p.cat][0], meta: DOCSETS[p.cat][1] + ' · PDF · 840 KB', status: ok ? 'Verified' : 'To review' }, { name: 'Safety certificate', meta: 'OSHA 10 · PDF · 620 KB', status: ok ? 'Verified' : 'To review' }];
    p.earned = p.jobs * int(80, 96); p.paid = Math.round(p.earned * 0.9 * (0.86 + rnd() * 0.12)); p.request = 'None';
  });
  [[1, 11240, 9270, 'Requested'], [2, 12480, 10984, 'None'], [7, 5940, 4826, 'Requested'], [4, 2760, 2484, 'Paid']].forEach(([i, e, pd, rq]) => { pros[i].earned = e; pros[i].paid = pd; pros[i].request = rq; });
  pros.filter((p, i) => i > 8 && p.jobs > 60).slice(0, 3).forEach(p => p.request = 'Requested');

  const C = n => customers.find(c => c.name === n).id, P = n => n ? pros.find(p => p.name === n).id : null;
  const bookings = [
    ['Daniel Brooks', 'Mark Johnson', 'Bathroom light fixture', 'Electrical', 'Oct 24, 2026', '2:00 PM', 95, 'Accepted', 'Active', 'Replace two vanity lights and check the dimmer switch.'],
    ['Emily Chen', null, 'Bathroom sink installation', 'Plumbing', 'Oct 25, 2026', '10:00 AM', 140, 'Waiting', 'Pending', 'Install a new vanity sink and connect the drain.'],
    ['Nathan Patel', 'Olivia Brown', 'Deep home cleaning', 'Cleaning', 'Oct 25, 2026', '4:00 PM', 120, 'Accepted', 'Upcoming', 'Two bedroom apartment, focus on kitchen and bathrooms.'],
    ['Ava Johnson', 'Emily Chen', 'Dishwasher setup', 'Handyman', 'Oct 23, 2026', '1:00 PM', 85, 'Accepted', 'Completed', 'Unbox and connect a new dishwasher.'],
    ['Liam Smith', 'Mark Johnson', 'Garbage disposal repair', 'Plumbing', 'Oct 23, 2026', '11:30 AM', 110, 'Accepted', 'Completed', 'Disposal hums but does not spin.'],
    ['Olivia Brown', null, 'Water heater maintenance', 'Plumbing', 'Oct 26, 2026', '3:00 PM', 160, 'Declined', 'Pending', 'Annual flush and inspection.'],
    ['James Wilson', 'Emily Chen', 'TV wall mounting', 'Handyman', 'Oct 22, 2026', '9:00 AM', 85, 'Accepted', 'Cancelled', 'Mount a 55 inch TV on drywall.'],
    ['Sophia Garcia', 'Mark Johnson', 'Outlet wiring', 'Electrical', 'Oct 22, 2026', '5:30 PM', 180, 'Accepted', 'Completed', 'Add two outlets in the home office.'],
  ].map(b => ({ cust: C(b[0]), pro: P(b[1]), service: b[2], cat: b[3], date: b[4], time: b[5], price: b[6], resp: b[7], status: b[8], desc: b[9] }));
  const activePros = pros.filter(p => p.verification === 'Approved' && p.status !== 'Blocked');
  const TIMES = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM', '8:30 PM'];
  for (let i = 0; i < 40; i++) {
    const pr = pick(prices), day = 21 - Math.floor(i / 3), st = i < 4 ? pick(['Upcoming', 'Pending']) : pick(['Completed', 'Completed', 'Completed', 'Completed', 'Cancelled', 'Active']);
    const pool = activePros.filter(p => p.cat === pr.cat), waiting = st === 'Pending';
    bookings.push({ cust: pick(customers).id, pro: waiting || !pool.length ? null : pick(pool).id, service: pr.service, cat: pr.cat, date: `Oct ${String(Math.max(1, day)).padStart(2, '0')}, 2026`, time: pick(TIMES), price: pr.day || pr.from || 90, resp: waiting ? pick(['Waiting', 'Declined']) : 'Accepted', status: st, desc: 'Booked from the mobile app.' });
  }
  bookings.forEach((b, i) => { b.id = 'job-' + (24810 - i); b.paid = b.status === 'Cancelled' ? 'Refunded' : b.status === 'Completed' ? 'Paid' : b.status === 'Pending' ? null : 'Held'; });

  const reviews = [
    ['Daniel Brooks', 'Mark Johnson', 'job-24712', 'Oct 12, 2026', 5, 'Arrived on time, fixed the kitchen faucet in 40 minutes and cleaned up afterwards. Very professional.', false, 'Plumbing'],
    ['Ava Johnson', 'Emily Chen', 'job-24807', 'Oct 23, 2026', 1, 'This review contains offensive language about the professional and was reported by 3 users.', true, 'Handyman'],
    ['Nathan Patel', 'Olivia Brown', 'job-24655', 'Sep 30, 2026', 5, 'The deep cleaning was spotless. Booking again next month.', false, 'Cleaning'],
    ['Liam Smith', 'Mark Johnson', 'job-24806', 'Oct 23, 2026', 4, 'Good work on the garbage disposal. Arrived 15 minutes late but kept me updated.', false, 'Plumbing'],
    ['Sophia Garcia', 'Mark Johnson', 'job-24803', 'Oct 22, 2026', 5, 'New outlets work perfectly and the wiring is tidy.', false, 'Electrical'],
    ['Emily Chen', 'Olivia Brown', 'job-24790', 'Oct 18, 2026', 2, 'Spam link posted instead of a real review. Reported by the professional.', true, 'Cleaning'],
    ['Olivia Brown', 'Emily Chen', 'job-24771', 'Oct 15, 2026', 4, 'Shelves are level and solid. Would book again.', false, 'Handyman'],
    ['James Wilson', 'Mark Johnson', 'job-24766', 'Oct 14, 2026', 3, 'Job was fine but took longer than the estimate.', false, 'Electrical'],
    ['Daniel Brooks', 'Olivia Brown', 'job-24655', 'Sep 30, 2026', 5, 'Friendly, fast and thorough.', false, 'Cleaning'],
  ].map((r, i) => ({ id: 'rv' + (i + 1), cust: r[0], pro: r[1], job: r[2], date: r[3], stars: r[4], text: r[5], flagged: r[6], cat: r[7], removed: false }));

  const notifications = [
    ['Booking accepted', 'Your professional accepted JOB-24810', 'One user', 'Booking update', 'Oct 23, 4:12 PM', 'Sent'],
    ['Account approved', 'You can now start accepting jobs', 'Professionals', 'Account update', 'Oct 22, 10:00 AM', 'Sent'],
    ['Payout processed', 'Your weekly payout is on its way', 'Professionals', 'Account update', 'Oct 17, 9:00 AM', 'Sent'],
    ['New: Handyman services', 'Book mounting, assembly and repairs', 'Customers', 'Announcement', 'Oct 15, 6:00 PM', 'Sent'],
    ['Holiday schedule', 'Bookings on Dec 25 are limited', 'Customers', 'Announcement', 'Dec 20, 9:00 AM', 'Scheduled'],
    ['Terms updated', 'We updated our Terms and Conditions', 'Everyone', 'Announcement', 'Oct 01, 12:00 PM', 'Sent'],
  ].map((n, i) => ({ id: 'n' + i, title: n[0], msg: n[1], audience: n[2], type: n[3], date: n[4], status: n[5] }));

  const appReports = [
    ['rpt-1042', 'Daniel Brooks', 'Customer', 'Professional arrived late', 'Service issue', 'Oct 24, 2026', 'Replied', 'job-24810', 'The professional came 45 minutes after the booked time for JOB-24810 and did not message me. I had to move a meeting. I would like this to be looked into.', '3:20 PM',
      [{ text: 'Hi Daniel, we are sorry about the delay. We spoke with the professional and added a $15 credit to your account for your next booking. Thank you for letting us know.', time: 'Oct 24, 4:05 PM', seen: 'Oct 24, 4:18 PM' }]],
    ['rpt-1041', 'Mark Johnson', 'Professional', 'Payout not received', 'Payment', 'Oct 24, 2026', 'Open', null, 'My weekly payout has not arrived yet. The app shows it as requested since Friday.', '11:02 AM', []],
    ['rpt-1040', 'Emily Chen', 'Customer', 'Charged twice for one job', 'Payment', 'Oct 23, 2026', 'Open', 'job-24809', 'I see two charges of $140 on my card for the sink installation. Please refund one of them.', '6:44 PM', []],
    ['rpt-1039', 'Olivia Brown', 'Professional', 'Customer was abusive', 'User behaviour', 'Oct 23, 2026', 'Open', 'job-24808', 'The customer used abusive language in chat before the job. I would like the account reviewed.', '2:15 PM', []],
    ['rpt-1038', 'Nathan Patel', 'Customer', 'App crashed during booking', 'App problem', 'Oct 22, 2026', 'Replied', null, 'The app closed when I selected a time slot. It happened twice on Android.', '9:30 AM', [{ text: 'Thanks Nathan, our team found the issue and a fix is in the next update. You can book from the web in the meantime.', time: 'Oct 22, 1:10 PM', seen: null }]],
    ['rpt-1037', 'Liam Smith', 'Professional', 'Cannot upload certificate', 'App problem', 'Oct 21, 2026', 'Replied', null, 'Upload fails with an error message when I add my license PDF.', '4:05 PM', [{ text: 'Hi Liam, PDFs up to 10 MB are supported now. Please try again and tell us if it still fails.', time: 'Oct 21, 5:40 PM', seen: 'Oct 21, 6:02 PM' }]],
    ['rpt-1036', 'Sophia Garcia', 'Customer', 'Wrong price shown', 'Pricing', 'Oct 20, 2026', 'Closed', 'job-24803', 'Estimated price was different at checkout than on the service page.', '10:20 AM', [{ text: 'Hi Sophia, the night rate applied because the booking was after 8 PM. We have made this clearer on the service page.', time: 'Oct 20, 12:00 PM', seen: 'Oct 20, 12:30 PM' }]],
  ].map(r => ({ id: r[0], from: r[1], role: r[2], subject: r[3], cat: r[4], date: r[5], status: r[6], job: r[7], msg: r[8], time: r[9], replies: r[10] }));

  const pages = {
    about: { title: 'About Us', sub: 'Tell customers and professionals who you are', updated: 'Oct 01, 2026', html: '<h2>About Done</h2><p>Done connects customers with trusted local professionals for cleaning, plumbing, electrical and handyman work.</p><p>Every professional is reviewed by our team before they can accept a job. We check identity documents and certificates so you can book with confidence.</p><p>Prices are shown before you book, and you can follow every job from request to completion in the app.</p>' },
    terms: { title: 'Terms and Conditions', sub: 'The rules customers and professionals accept when they sign up', updated: 'Oct 01, 2026', html: '<h2>Terms and Conditions</h2><p>1. Using the platform. By creating an account you agree to provide accurate information and to use Done only for lawful purposes.</p><p>2. Bookings and payments. Prices are shown before booking. Payment is collected through the app and a platform commission is deducted before the professional is paid.</p><p>3. Account suspension. Accounts that violate platform rules may be blocked by the platform owner.</p>' },
    privacy: { title: 'Privacy Policy', sub: 'How user data is collected, used and protected', updated: 'Oct 01, 2026', html: '<h2>Privacy Policy</h2><p>1. Information we collect. We collect your name, contact details, address and booking history to provide the service.</p><p>2. How we use it. Your details are shared with the professional or customer on a booking only as needed to complete the job.</p><p>3. Your choices. You can request a copy of your data or ask us to delete your account at any time.</p>' },
  };

  window.DB = {
    CATS, categories, prices, promos, customers, pros, bookings, reviews, notifications, appReports, pages,
    commission: 10,
    admin: { name: 'Admin', role: 'Platform owner', email: 'admin@homeservice.com', phone: '+1 (718) 555-0100', photo: 'assets/admin.png', password: 'admin123', prefs: [true, true, false] },
    kpis: { customers: '1,284', pros: '216', bookings: '3,942', revenue: '$18,460', active: '37', completed: '3,512', transactions: '$184,600' },
    months: [['Jan', 92], ['Feb', 110], ['Mar', 104], ['Apr', 128], ['May', 142], ['Jun', 136], ['Jul', 158], ['Aug', 150], ['Sep', 172], ['Oct', 184], ['Nov', 166], ['Dec', 60]],
    months2025: [['Jan', 48], ['Feb', 55], ['Mar', 61], ['Apr', 70], ['May', 66], ['Jun', 82], ['Jul', 90], ['Aug', 97], ['Sep', 88], ['Oct', 104], ['Nov', 112], ['Dec', 96]],
    usage: [['Cleaning', 42, 173], ['Plumbing', 26, 107], ['Electrical', 19, 78], ['Handyman', 13, 54]],
    reports: {
      week: { label: 'Oct 19 - Oct 25, 2026', stats: ['96', '$478', '11', '142'], subs: ['Bookings', 'Commission earned', 'New customers', 'Active professionals'], bars: [['Mon', 14, 2], ['Tue', 12, 1], ['Wed', 16, 3], ['Thu', 13, 1], ['Fri', 18, 2], ['Sat', 15, 2], ['Sun', 8, 1]], pay: [4780, 80, 4230, 3900], scale: 0.23, booked: 71, share: 0.07 },
      month: { label: 'Oct 01 - Oct 31, 2026', stats: ['412', '$2,046', '48', '164'], subs: ['Bookings', 'Commission earned', 'New customers', 'Active professionals'], bars: [['Week 1', 120, 18], ['Week 2', 148, 12], ['Week 3', 136, 22], ['Week 4', 164, 14], ['Week 5', 70, 6]], pay: [20460, 340, 18074, 16920], scale: 1, booked: 286, share: 0.28 },
      year: { label: 'Jan 01 - Dec 31, 2026', stats: ['3,942', '$18,460', '512', '198'], subs: ['Bookings', 'Commission earned', 'New customers', 'Active professionals'], bars: [['Q1', 306, 31], ['Q2', 406, 38], ['Q3', 480, 44], ['Q4', 410, 36]], pay: [184600, 2960, 166140, 158300], scale: 9.6, booked: 1104, share: 1 },
    },
  };
})();
