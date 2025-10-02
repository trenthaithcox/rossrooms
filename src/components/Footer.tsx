import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-info">
          <span>© 2025 Ross Rooms</span>
          <Link to="/donate" className="footer-donate-link">
            🍄 Donate a Mushroom
          </Link>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon">🌟</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon">⭐</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 