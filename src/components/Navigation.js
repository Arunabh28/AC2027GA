import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      <style>{`
        .bottom-nav { position: fixed; left: 0; right: 0; bottom: 0; height: 64px; background: #ffffff; border-top: 1px solid #e6eef8; display: flex; align-items: center; justify-content: space-around; padding: env(safe-area-inset-bottom) 8px; box-shadow: 0 -6px 18px rgba(3,19,43,0.04); }
        .bottom-nav a { display:flex; flex-direction:column; align-items:center; justify-content:center; color:#4a5568; font-size:12px; text-decoration:none; width: 72px; }
        .bottom-nav a .icon { font-size:20px; margin-bottom:4px; }
        .bottom-nav a.active { color:#2b6cb0; }
        /* ensure the nav looks good on larger screens */
        @media (min-width:720px) { .bottom-nav { height:72px; } .bottom-nav a { width: 88px; font-size:13px; } }
      `}</style>

      <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} aria-label="Home">
        <span className="icon">🏠</span>
        <span>Home</span>
      </NavLink>

      <NavLink to="/schedule" className={({isActive}) => isActive ? 'active' : ''} aria-label="Schedule">
        <span className="icon">📅</span>
        <span>Schedule</span>
      </NavLink>

      <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} aria-label="About">
        <span className="icon">ℹ️</span>
        <span>About</span>
      </NavLink>
    </nav>
  );
}
