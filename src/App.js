import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="brand">AC 2027 GA</div>
          <div className="nav-links">
            <NavLink to="/" end className={({isActive})=> isActive? 'active':''}>Home</NavLink>
            <NavLink to="/schedule" className={({isActive})=> isActive? 'active':''}>Schedule</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive? 'active':''}>About</NavLink>
          </div>
        </nav>
      </header>

      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="App-footer">© AC 2027 GA</footer>
    </div>
  );
}

export default App;
