import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          {/* Main Title */}
          <div className="hero-title">
            <h1>DEMON SLAYER CORPS</h1>
            <div className="title-border"></div>
          </div>
          
          {/* Tagline */}
          <div className="hero-tagline">
            <p className="quote">"Set your heart ablaze. Go beyond your limits!"</p>
            <p className="description">
              Become a member of the Demon Slayer Corps and protect humanity from the darkness.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span className="btn-icon">⚔️</span>
              BEGIN TRAINING
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">🔥</span>
              LEARN BREATHING STYLES
            </button>
          </div>
          
          {/* Characters Grid */}
          <div className="characters-grid">
            {/* Tanjiro Card */}
            <div className="character-card">
              <div className="character-image water">
                <div className="image-placeholder">
                  <span className="kanji">水</span>
                </div>
              </div>
              <div className="character-info">
                <h3>TANJIRO KAMADO</h3>
                <p>Water Breathing</p>
                <div className="character-tags">
                  <span className="tag">Hanafuda Earrings</span>
                  <span className="tag">Enhanced Smell</span>
                </div>
              </div>
            </div>
            
            {/* Nezuko Card */}
            <div className="character-card">
              <div className="character-image fire">
                <div className="image-placeholder">
                  <span className="kanji">鬼</span>
                </div>
              </div>
              <div className="character-info">
                <h3>NEZUKO KAMADO</h3>
                <p>Demon Companion</p>
                <div className="character-tags">
                  <span className="tag">Blood Demon Art</span>
                  <span className="tag">Size Manipulation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Breathing Styles */}
          <div className="breathing-section">
            <h3 className="breathing-title">MASTER THE BREATHING STYLES</h3>
            <div className="breathing-grid">
              {['Water', 'Fire', 'Thunder', 'Wind'].map((style) => (
                <div key={style} className="breathing-card">
                  <div className={`breathing-icon ${style.toLowerCase()}`}>
                    {style === 'Water' ? '💧' : 
                     style === 'Fire' ? '🔥' : 
                     style === 'Thunder' ? '⚡' : '💨'}
                  </div>
                  <h4>{style} BREATHING</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;