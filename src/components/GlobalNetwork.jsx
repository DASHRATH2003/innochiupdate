import React, { useEffect, useState } from 'react';
import './GlobalNetwork.css';

const GlobalNetwork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const rotatingContent = [
    {
      title: "Global Trade Excellence",
      description: "Connecting markets across continents",
      icon: "🌐"
    },
    {
      title: "Quality Assurance",
      description: "Premium products, verified standards",
      icon: "✨"
    },
    {
      title: "Reliable Shipping",
      description: "Swift and secure worldwide delivery",
      icon: "🚢"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rotatingContent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="global-network">
      <div className="global-network__content">
        <div className="global-network__center-piece">
          <div className="global-network__rotating-content">
            <div className="global-network__rotating-icon">{rotatingContent[currentSlide].icon}</div>
            <h3 className="global-network__rotating-title">{rotatingContent[currentSlide].title}</h3>
            <p className="global-network__rotating-description">{rotatingContent[currentSlide].description}</p>
          </div>
          <div className="global-network__circle-orbit">
            <div className="global-network__orbit-item">🌾</div>
            <div className="global-network__orbit-item">📦</div>
            <div className="global-network__orbit-item">🛥️</div>
            <div className="global-network__orbit-item">🌿</div>
          </div>
        </div>

        <div className="global-network__section">
          <h2 className="global-network__title">
            <span className="global-network__title-text">
              <span className="global-network__title-export">Export</span>
              <span className="global-network__title-separator">/</span>
              <span className="global-network__title-import">Import</span>
            </span>
          </h2>
          <ul className="global-network__list">
            {/* Export Countries */}
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">JP</span>
              Japan
              <span className="global-network__continent-marker">Asia</span>
            </li>
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">AE</span>
              UAE
              <span className="global-network__continent-marker">Middle East</span>
            </li>
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">SG</span>
              Singapore
              <span className="global-network__continent-marker">Asia</span>
            </li>
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">MY</span>
              Malaysia
              <span className="global-network__continent-marker">Asia</span>
            </li>
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">LK</span>
              Sri Lanka
              <span className="global-network__continent-marker">Asia</span>
            </li>
            <li className="global-network__item global-network__item--export">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">TH</span>
              Thailand
              <span className="global-network__continent-marker">Asia</span>
            </li>

            {/* Import Countries */}
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">CA</span>
              Canada
              <span className="global-network__continent-marker">North America</span>
            </li>
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">AU</span>
              Australia
              <span className="global-network__continent-marker">Oceania</span>
            </li>
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">NZ</span>
              New Zealand
              <span className="global-network__continent-marker">Oceania</span>
            </li>
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">US</span>
              United States
              <span className="global-network__continent-marker">North America</span>
            </li>
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">GB</span>
              United Kingdom
              <span className="global-network__continent-marker">Europe</span>
            </li>
            <li className="global-network__item global-network__item--import">
              <span className="global-network__arrow">→</span>
              <span className="global-network__country-code">DE</span>
              Germany
              <span className="global-network__continent-marker">Europe</span>
            </li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default GlobalNetwork; 