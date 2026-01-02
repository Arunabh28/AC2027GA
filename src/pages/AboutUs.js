import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const organizers = [
    { id: 'o1', name: 'Organiser One', role: 'Lead Coordinator', img: 'https://via.placeholder.com/120?text=Org+1' },
    { id: 'o2', name: 'Organiser Two', role: 'Program Chair', img: 'https://via.placeholder.com/120?text=Org+2' },
    { id: 'o3', name: 'Organiser Three', role: 'Volunteer Lead', img: 'https://via.placeholder.com/120?text=Org+3' }
  ];

  return (
    <div className="about-page">
      <style>{`
        .about-page { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#1a202c; padding: 14px; }
        .about-hero { background: linear-gradient(90deg,#3182ce,#2b6cb0); color:#fff; padding:18px; border-radius:8px; text-align:center; }
        .about-hero h1 { margin:0 0 6px; font-size:1.25rem; }
        .section { margin-top:14px; }
        .section h2 { margin:0 0 8px; font-size:1.05rem; }
        .history { background:#fff; padding:12px; border-radius:8px; box-shadow:0 1px 6px rgba(15,23,42,0.06); }

        .organizers-grid { display:grid; grid-template-columns:1fr; gap:10px; margin-top:8px; }
        .organizer { display:flex; gap:12px; align-items:center; background:#fff; padding:10px; border-radius:8px; box-shadow:0 1px 4px rgba(10,20,30,0.05); }
        .organizer img { width:64px; height:64px; object-fit:cover; border-radius:8px; }
        .organizer .meta { display:flex; flex-direction:column; }
        .organizer .meta b { font-size:1rem; }
        .contact { background:#fff; padding:12px; border-radius:8px; box-shadow:0 1px 6px rgba(15,23,42,0.06); }

        @media (min-width:720px) {
          .organizers-grid { grid-template-columns: repeat(3, 1fr); }
          .organizer { flex-direction:column; align-items:center; text-align:center; padding:14px; }
          .organizer img { width:100px; height:100px; }
        }
      `}</style>

      <header className="about-hero">
        <h1>About the Assamese Convention 2027</h1>
        <p>Celebrating culture, community, and creativity across Assam and beyond.</p>
      </header>

      <section className="section">
        <h2>History</h2>
        <div className="history">
          <p>
            The Assamese Convention began as a small gathering of cultural enthusiasts and has grown into a large
            community-driven event. Over the years, it has showcased traditional music, dance, scholarly talks,
            workshops, and exhibitions that celebrate Assamese heritage.
          </p>
          <p>
            This 2027 edition brings together artists, academics, and community members to share, learn, and
            collaborate on preserving and promoting Assamese culture for future generations.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Organizers</h2>
        <div className="organizers-grid">
          {organizers.map(o => (
            <div className="organizer" key={o.id}>
              <img src={o.img} alt={o.name} />
              <div className="meta">
                <b>{o.name}</b>
                <small>{o.role}</small>
                <div style={{marginTop:8}}>
                  <Link to="#" style={{color:'#3182ce', textDecoration:'none'}}>Profile</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <div className="contact">
          <p><strong>Email:</strong> <a href="mailto:info@ac2027ga.org">info@ac2027ga.org</a></p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Convention Center, Guwahati, Assam</p>
          <p>
            For press, volunteer, and sponsorship inquiries please reach out via email or use the contact form on the
            website.
          </p>
        </div>
      </section>
    </div>
  );
}
