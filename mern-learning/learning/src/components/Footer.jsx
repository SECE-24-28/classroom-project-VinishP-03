import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Column 1 - Logo */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="footer-icon">⚔️</div>
                <div>
                  <h3>DEMON SLAYER CORPS</h3>
                  <p className="logo-subtitle">Kimetsu no Yaiba</p>
                </div>
              </div>
              <p className="footer-description">
                "Don't ever give up. Even if it's painful, even if it's agonizing, don't try to take the easy way out."
              </p>
            </div>
            
            {/* Column 2 - Links */}
            <div className="footer-column">
              <h4 className="footer-title">TRAINING GROUNDS</h4>
              <ul className="footer-links">
                <li><a href="#final-selection">Final Selection</a></li>
                <li><a href="#butterfly-mansion">Butterfly Mansion</a></li>
                <li><a href="#swordsmith-village">Swordsmith Village</a></li>
                <li><a href="#hashira-training">Hashira Training</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Links */}
            <div className="footer-column">
              <h4 className="footer-title">BREATHING STYLES</h4>
              <ul className="footer-links">
                <li><a href="#water-breathing">Water Breathing</a></li>
                <li><a href="#flame-breathing">Flame Breathing</a></li>
                <li><a href="#thunder-breathing">Thunder Breathing</a></li>
                <li><a href="#wind-breathing">Wind Breathing</a></li>
              </ul>
            </div>
            
            {/* Column 4 - Contact */}
            <div className="footer-column">
              <h4 className="footer-title">CORPS HEADQUARTERS</h4>
              <div className="contact-info">
                <p>📍 Hidden in mountains surrounded by wisteria</p>
                <p>🕊️ Crow messaging available 24/7</p>
                <p>⚔️ Emergency demon sightings</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">
              © Taisho Era {new Date().getFullYear()} Demon Slayer Corps. All rights protected by Wisteria.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy</a>
              <span className="divider">•</span>
              <a href="#terms">Terms</a>
              <span className="divider">•</span>
              <a href="#safety">Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;