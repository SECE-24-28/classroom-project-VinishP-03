import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'WATER BREATHING',
    'FIRE BREATHING', 
    'THUNDER BREATHING',
    'HASHIRA',
    'MISSIONS'
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⚔️</div>
          <div className="logo-text">
            <h2>DEMON SLAYER</h2>
            <p>CORPS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <button className="btn-join">JOIN CORPS</button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;