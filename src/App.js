import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="glass-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tournaments">Tournaments</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/players">Players</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <motion.section
              className="glass-hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-content">
                <h1>Welcome to the Glassmorphic Material Design UI</h1>
                <p>Stay updated with the latest esports tournaments, teams, players, and news.</p>
                <Link to="#" className="btn">Get Started</Link>
              </div>
            </motion.section>
          } />

          <Route path="/tournaments" element={
            <motion.section
              className="glass-section"
              id="tournaments-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Upcoming Tournaments</h2>
              <div className="tournaments-container"></div>
            </motion.section>
          } />

          <Route path="/teams" element={
            <motion.section
              className="glass-section"
              id="teams-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Top Teams</h2>
              <div className="teams-container"></div>
            </motion.section>
          } />

          <Route path="/players" element={
            <motion.section
              className="glass-section"
              id="players-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Featured Players</h2>
              <div className="players-container"></div>
            </motion.section>
          } />

          <Route path="/news" element={
            <motion.section
              className="glass-section"
              id="news-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Latest News</h2>
              <div className="news-container"></div>
            </motion.section>
          } />

          <Route path="/about" element={
            <motion.section
              className="glass-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>About</h2>
              <p>Learn more about our esports company.</p>
            </motion.section>
          } />

          <Route path="/contact" element={
            <motion.section
              className="glass-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Contact</h2>
              <p>Contact us for inquiries or support.</p>
            </motion.section>
          } />
        </Routes>

        <footer className="glass-footer">
          <div className="footer-content">
            <p>&copy; 2023 Glassmorphic Material Design UI. All rights reserved.</p>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tournaments">Tournaments</Link>
                </li>
                <li>
                  <Link to="/teams">Teams</Link>
                </li>
                <li>
                  <Link to="/players">Players</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
