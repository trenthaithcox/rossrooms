import React from 'react';
import { Link } from 'react-router-dom';
import './RoomsPage.css';

const RoomsPage: React.FC = () => {
  return (
    <div className="rooms-page">
      <div className="container">
        <h1 className="rooms-title">SELECT BUILDING</h1>
        
        {/* Mario cloud decorations */}
        <div className="mario-cloud cloud-1"></div>
        <div className="mario-cloud cloud-2"></div>
        
        <div className="building-buttons">
          <Link to="/rooms/ross" className="btn btn-primary building-btn">
            Ross
          </Link>
          <Link to="/rooms/kresge" className="btn btn-secondary building-btn">
            Kresge
          </Link>
          <Link to="/rooms/blau" className="btn btn-blue building-btn">
            Blau
          </Link>
          <Link to="/rooms/kresge-interview" className="btn btn-coin building-btn">
            Interview
          </Link>
        </div>
        
        <Link to="/" className="back-link">
          &larr; Back to castle
        </Link>
      </div>
    </div>
  );
};

export default RoomsPage; 