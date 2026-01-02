import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/HomePage';
import Schedule from './pages/EventSchedule';
import About from './pages/AboutUs';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="brand">AC 2027 GA</div>
      </header>

      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Navigation />
      <footer className="App-footer">© AC 2027 GA</footer>
    </div>
  );
}

export default App;
