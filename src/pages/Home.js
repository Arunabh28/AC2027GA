import React from 'react';

export default function Home(){
  return (
    <div>
      <section className="banner card">
        <h1>AC 2027 GA</h1>
        <p>Welcome to the official app for AC 2027 GA — stay up to date with events and schedules.</p>
      </section>

      <section className="container">
        <div className="teasers">
          <div className="teaser card">
            <h3>Keynote Speakers</h3>
            <p>See who's speaking and when.</p>
          </div>
          <div className="teaser card">
            <h3>Workshops</h3>
            <p>Hands-on sessions and timings.</p>
          </div>
          <div className="teaser card">
            <h3>Venue & Travel</h3>
            <p>Find maps and transport tips.</p>
          </div>
          <div className="teaser card">
            <h3>Contact</h3>
            <p>Get in touch with organizers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
