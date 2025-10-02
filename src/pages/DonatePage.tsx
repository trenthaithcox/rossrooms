import React from 'react';
import { Link } from 'react-router-dom';
import './DonatePage.css';

const DonatePage: React.FC = () => {
  return (
    <div className="donate-page">
      <div className="container">
        <h1 className="donate-title">Power Up Ross Rooms</h1>
        <p className="donate-description">
          Ross Rooms helps students quickly access room reservation links. 
          Your donation adds extra lives to our mission and keeps the warp pipes open!
        </p>
        
        <div className="donation-card">
          <h2>Toss a Coin</h2>
          <p className="donation-subtitle">Every coin helps our quest continue</p>
          <a 
            href="https://pages.donately.com/none-8777/form/frm_29ab393d2375" 
            className="donate-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Coins
          </a>
        </div>
        
        <div className="donation-info">
          <h3>Why Join Our Adventure?</h3>
          <ul>
            <li>Keep the service free for all Ross students</li>
            <li>Help cover hosting and maintenance costs</li>
            <li>Support continued improvements and updates</li>
          </ul>
        </div>
        
        <p className="contact-note">
          Need help? Send us a message at <a href="mailto:rossrooms.com@gmail.com">rossrooms.com@gmail.com</a>
        </p>
        
        <Link to="/" className="back-link">
          &larr; Back to castle
        </Link>
      </div>
    </div>
  );
};

export default DonatePage; 