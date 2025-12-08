import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Giyu Tomioka',
    role: 'Water Hashira',
    quote: 'The training here is rigorous but necessary. Those who survive become true demon slayers.',
    element: 'water',
    symbol: '💧'
  },
  {
    id: 2,
    name: 'Kyojuro Rengoku',
    role: 'Flame Hashira',
    quote: 'Set your heart ablaze! This corps will ignite your true potential!',
    element: 'fire',
    symbol: '🔥'
  },
  {
    id: 3,
    name: 'Tengen Uzui',
    role: 'Sound Hashira',
    quote: 'The equipment is flashy and brilliant! Perfect for a god of festivals like me!',
    element: 'sound',
    symbol: '🎵'
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">HASHIRA ENDORSEMENTS</h2>
          <p className="section-subtitle">
            What the pillars of the Demon Slayer Corps have to say
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className={`testimonial-card ${testimonial.element}`} key={testimonial.id}>
              <div className="testimonial-header">
                <div className={`avatar ${testimonial.element}`}>
                  <span className="avatar-symbol">{testimonial.symbol}</span>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="testimonial-content">
                <span className="quote-mark">"</span>
                <p className="quote">{testimonial.quote}</p>
                <span className="quote-mark">"</span>
              </div>
              
              <div className="rating">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;