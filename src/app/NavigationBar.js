
'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';
import logo from './eq.png';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div onClick={() => setIsOpen(!isOpen)} className="navbar-hamburger">
        <div className={isOpen ? "line1" : ""}></div>
        <div className={isOpen ? "line2" : ""}></div>
        <div className={isOpen ? "line3" : ""}></div>
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tournaments" className="navbar-link">Merchandise</Link>
        </li>
        <li className="navbar-item">
          <Link to="/teams" className="navbar-link">Teams</Link>
        </li>
        <li className="navbar-item">
          <Link to="/players" className="navbar-link">Staff</Link>
        </li>
        <li className="navbar-item">
          <Link to="/news" className="navbar-link">News</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
