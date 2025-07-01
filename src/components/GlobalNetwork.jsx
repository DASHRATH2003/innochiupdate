import React from 'react';
import './GlobalNetwork.css';
import globeImage from '../assets/imageglobelrotate.jpeg';

const GlobalNetwork = () => {
  return (
    <div className="global-network">
      <div className="global-network__content">
        <div className="globe-container">
          <img src={globeImage} alt="Rotating Globe" className="globe-image" />
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork; 