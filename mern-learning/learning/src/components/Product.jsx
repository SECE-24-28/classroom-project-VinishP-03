import React from 'react';
import './Product.css';

const products = [
  {
    id: 1,
    name: 'Nichirin Katana',
    description: 'Sun-absorbing blade that changes color with breathing style',
    price: '⚔️ 100 Wisteria Coins',
    style: 'water',
    icon: '💧'
  },
  {
    id: 2,
    name: 'Hashira Armor',
    description: 'Enhanced armor with breathing style amplification',
    price: '🛡️ 75 Wisteria Coins',
    style: 'fire',
    icon: '🔥'
  },
  {
    id: 3,
    name: 'Thunder Gauntlets',
    description: 'Lightning conduction for enhanced speed',
    price: '⚡ 120 Wisteria Coins',
    style: 'thunder',
    icon: '⚡'
  },
  {
    id: 4,
    name: 'Wisteria Poison',
    description: 'Lethal to demons, harmless to humans',
    price: '🌸 50 Wisteria Coins',
    style: 'wind',
    icon: '💨'
  }
];

function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">CORPS ARSENAL</h2>
          <p className="section-subtitle">
            Equip yourself with legendary demon-slaying equipment
          </p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div className={`product-card ${product.style}`} key={product.id}>
              <div className="product-header">
                <div className={`product-icon ${product.style}`}>
                  {product.icon}
                </div>
                <h3 className="product-name">{product.name}</h3>
              </div>
              
              <p className="product-description">{product.description}</p>
              
              <div className="product-footer">
                <div className="price">
                  <span className="price-icon">💰</span>
                  <span className="price-text">{product.price}</span>
                </div>
                <button className={`btn-add ${product.style}`}>
                  <span className="btn-text">ACQUIRE</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
              
              <div className={`product-glow ${product.style}`}></div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <button className="btn btn-primary btn-large">
            <span className="btn-icon">📦</span>
            VIEW FULL ARMORY
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;