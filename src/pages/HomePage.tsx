import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Mario clouds */}
      <div className="mario-cloud cloud-1"></div>
      <div className="mario-cloud cloud-2"></div>
      
      {/* Coin counter */}
      <div className="coin-counter">
        <span className="coin-counter-icon">🪙</span>
        <span>x 0</span>
      </div>
      
      <div className="container">
        <div className="mario-icon">🍄</div>
        <h1 className="home-title">ROSS ROOMS</h1>
        <p className="home-subtitle">Sign into your reserved Ross room from anywhere, without the QR code</p>
        <div className="home-button-container">
          <Link to="/rooms" className="btn btn-primary">
            START
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 