import React from 'react';
import { Link } from 'react-router-dom';
import './RoomButton.css';

interface Props {
  name: string;
  route?: string;
  checkInUrl?: string;
}

const RoomButton: React.FC<Props> = ({ name, route, checkInUrl }) => {
  if (checkInUrl) {
    return (
      <a href={checkInUrl} className="room-button" target="_blank" rel="noopener noreferrer">
        <div className="button-content">
          <span className="button-icon">🧱</span>
          <span className="button-text">{name}</span>
          <span className="button-arrow">→</span>
        </div>
      </a>
    );
  }
  
  return (
    <Link to={route || ""} className="room-button">
      <div className="button-content">
        <span className="button-icon">🧱</span>
        <span className="button-text">{name}</span>
        <span className="button-arrow">→</span>
      </div>
    </Link>
  );
};

export default RoomButton; 