import React, { useEffect, useMemo, useState } from 'react';

// EventSchedule component
// - shows sample events (name, date, time, location, description, category)
// - supports filtering by day and category
// - renders responsive scrollable cards (mobile-first)
// - includes placeholders to integrate with Firebase Firestore in the future

const SAMPLE_EVENTS = [
  {
    id: 'e1',
    name: 'Registration & Welcome',
    date: '2027-05-20',
    time: '09:00',
    location: 'Main Hall',
    category: 'General',
    description: 'Attendee registration, welcome tea, and opening notes.'
  },
  {
    id: 'e2',
    name: 'Opening Keynote: Heritage & Future',
    date: '2027-05-20',
    time: '10:00',
    location: 'Auditorium A',
    category: 'Keynote',
    description: 'A deep dive into Assam\'s cultural heritage and how to preserve it.'
  },
  {
    id: 'e3',
    name: 'Bihu Dance Performance',
    date: '2027-05-20',
    time: '14:00',
    location: 'Open Stage',
    category: 'Cultural',
    description: 'Traditional Bihu dance performance by local artists.'
  },
  {
    id: 'e4',
    name: 'Workshop: Handloom Techniques',
    date: '2027-05-21',
    time: '11:00',
    location: 'Workshop Room 2',
    category: 'Workshop',
    description: 'Hands-on workshop on traditional handloom and weaving.'
  },
  {
    id: 'e5',
    name: 'Panel: Youth & Culture',
    date: '2027-05-21',
    time: '15:00',
    location: 'Meeting Room B',
    category: 'Panel',
    description: 'Discussion with young leaders on engaging youth in cultural preservation.'
  }
];

export default function EventSchedule({ useFirestore = false }) {
  const [events, setEvents] = useState(SAMPLE_EVENTS);
  const [dayFilter, setDayFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Derive unique days and categories from events
  const days = useMemo(() => {
    const setDays = new Set(events.map(e => e.date));
    return Array.from(setDays).sort();
  }, [events]);

  const categories = useMemo(() => {
    const setCats = new Set(events.map(e => e.category));
    return Array.from(setCats).sort();
  }, [events]);

  // Placeholder: fetch events from Firestore (replace with real implementation)
  useEffect(() => {
    if (!useFirestore) return;

    // Example placeholder code:
    // import { getFirestore, collection, getDocs } from 'firebase/firestore'
    // const db = getFirestore();
    // (async function fetch() {
    //   const snapshot = await getDocs(collection(db, 'events'));
    //   const remote = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    //   setEvents(remote);
    // })();

    // For now we keep sample events. Replace above with actual Firestore calls.
  }, [useFirestore]);

  // Filter logic
  const filtered = events.filter(e => {
    if (dayFilter !== 'all' && e.date !== dayFilter) return false;
    if (categoryFilter !== 'all' && e.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="event-schedule">
      <style>{`
        .event-schedule { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #1a202c; padding: 12px; }
        .es-header { display:flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
        .filters { display:flex; gap:8px; flex-wrap:wrap; }
        .filters select { padding:8px 10px; border-radius:6px; border:1px solid #e2e8f0; background:#fff; }
        .list { display:flex; flex-direction:column; gap:10px; max-height:60vh; overflow:auto; padding-right:6px; }

        .card { background:#fff; border-radius:8px; padding:12px; box-shadow:0 1px 6px rgba(15,23,42,0.06); display:flex; flex-direction:column; gap:6px; }
        .card .meta { display:flex; justify-content:space-between; align-items:center; gap:10px; font-size:0.95rem; color:#4a5568; }
        .card h4 { margin:0; font-size:1.03rem; color:#2d3748; }
        .card p { margin:0; color:#4a5568; font-size:0.95rem; }
        .chip { background:#edf2f7; padding:6px 8px; border-radius:6px; font-size:0.85rem; }

        /* Table fallback for wider screens */
        @media (min-width: 880px) {
          .list { display:block; max-height: none; }
          table.schedule-table { width:100%; border-collapse:collapse; }
          table.schedule-table th, table.schedule-table td { text-align:left; padding:10px; border-bottom:1px solid #edf2f7; }
        }
      `}</style>

      <header className="es-header">
        <h2>Event Schedule — Assamese Convention 2027</h2>

        <div className="filters" role="region" aria-label="Filters">
          <label>
            Day:{' '}
            <select value={dayFilter} onChange={e => setDayFilter(e.target.value)}>
              <option value="all">All</option>
              {days.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>

          <label>
            Category:{' '}
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
              <option value="all">All</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
      </header>

      {/* Responsive: cards on mobile, table on wide screens */}
      <section className="list" aria-live="polite">
        {/* Mobile / narrow: cards */}
        {filtered.length === 0 && <div className="card">No events match the selected filters.</div>}

        {filtered.map(ev => (
          <article key={ev.id} className="card" aria-labelledby={`title-${ev.id}`}>
            <div className="meta">
              <div className="left">
                <h4 id={`title-${ev.id}`}>{ev.name}</h4>
                <div style={{display:'flex',gap:8,marginTop:6}}>
                  <div className="chip">{ev.date} • {ev.time}</div>
                  <div className="chip">{ev.location}</div>
                  <div className="chip">{ev.category}</div>
                </div>
              </div>
            </div>
            <p>{ev.description}</p>
          </article>
        ))}
      </section>

      {/* Wide layout: table view for easier scanning */}
      <div style={{marginTop:16}}>
        <div className="wide-table" aria-hidden={false}>
          <style>{`@media (min-width:880px) { .wide-table { display:block } } @media (max-width:879px) { .wide-table { display:none } }`}</style>
          {filtered.length > 0 && (
            <table className="schedule-table" role="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Location</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(ev => (
                  <tr key={`row-${ev.id}`}>
                    <td>{ev.date} {ev.time}</td>
                    <td>{ev.name}</td>
                    <td>{ev.location}</td>
                    <td>{ev.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
