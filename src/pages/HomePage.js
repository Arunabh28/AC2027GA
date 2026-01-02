import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const bannerImage = 'https://via.placeholder.com/1400x600?text=Assamese+Convention+2027';

  return (
    <div className="home-page">
      <style>{`
        .home-page { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #1a202c; }
        .ac-banner { position: relative; width: 100%; height: 220px; background-image: url("${bannerImage}"); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; }
        .ac-banner .overlay { background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)); padding: 16px 18px; border-radius: 8px; text-align: center; color: #fff; max-width: 94%; }
        .ac-banner h1 { margin: 0 0 6px; font-size: 1.2rem; line-height: 1.1; }
        .ac-banner p { margin: 0; font-size: 0.95rem; opacity: 0.95; }

        .hp-content { padding: 14px; }
        .teaser-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        .teaser { background: #fff; border-radius: 10px; padding: 12px; box-shadow: 0 1px 6px rgba(10,20,30,0.06); }
        .teaser h3 { margin: 0 0 8px; font-size: 1.02rem; color: #2d3748; }
        .teaser p { margin: 0 0 10px; color: #4a5568; font-size: 0.95rem; }
        .teaser .cta { display: inline-block; background: #2b6cb0; color: #fff; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.9rem; }

        @media (min-width: 640px) {
          .ac-banner { height: 300px; }
          .ac-banner h1 { font-size: 1.6rem; }
        }
        @media (min-width: 720px) {
          .teaser-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .hp-content { padding: 20px; }
        }
      `}</style>

      <header className="ac-banner" role="img" aria-label="Assamese Convention 2027 banner">
        <div className="overlay">
          <h1>Assamese Convention 2027 - Celebrating Culture</h1>
          <p>Experience performances, talks, workshops and community gatherings honouring Assamese heritage.</p>
        </div>
      </header>

      <main className="hp-content">
        <section className="teaser-grid" aria-live="polite">
          <article className="teaser" aria-labelledby="teaser-keynote">
            <h3 id="teaser-keynote">Keynote Speakers</h3>
            <p>Hear from leading scholars, artists and community leaders on topics spanning culture, history, and future directions.</p>
            <Link to="/schedule" className="cta">View Schedule</Link>
          </article>

          <article className="teaser" aria-labelledby="teaser-cultural">
            <h3 id="teaser-cultural">Cultural Events</h3>
            <p>Traditional music, dance, craft exhibitions and live performances showcasing Assamese arts across venues.</p>
            <Link to="/about" className="cta">Explore Events</Link>
          </article>

          <article className="teaser" aria-labelledby="teaser-registration">
            <h3 id="teaser-registration">Registration Info</h3>
            <p>Register for the convention sessions, workshops and special events. Look out for early-bird discounts.</p>
            <a className="cta" href="/register">Register</a>
          </article>

          <article className="teaser" aria-labelledby="teaser-venue">
            <h3 id="teaser-venue">Venue & Travel</h3>
            <p>Find maps, accommodation options, accessibility details and travel tips to plan your visit with ease.</p>
            <Link to="/about" className="cta">Venue Details</Link>
          </article>
        </section>
      </main>
    </div>
  );
}
