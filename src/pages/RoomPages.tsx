import React from 'react';
import './RoomPages.css';
import RoomButton from '../components/RoomButton';
import { useParams, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

// Define the room data structure
type RoomData = {
  name: string;
  route: string;
};

// Room data organized by category
const roomData: Record<string, RoomData[]> = {
  study: [
    { name: "Kresge Library", route: "/check-in/kresge" },
    { name: "Modular Study Rooms", route: "/check-in/modular" },
    { name: "Winter Garden", route: "/check-in/winter-garden" },
    { name: "Seigle Cafe", route: "/check-in/seigle" }
  ],
  interview: [
    { name: "Interview Rooms", route: "/check-in/interview" },
    { name: "MSCM Interview Rooms", route: "/check-in/mscm" },
    { name: "Evening MBA Interview Rooms", route: "/check-in/evening-mba" },
    { name: "Weekend MBA Interview Rooms", route: "/check-in/weekend-mba" }
  ]
};

const RoomPages: React.FC = () => {
  const { roomType } = useParams<{ roomType: string }>();
  const rooms = roomType ? roomData[roomType] || [] : [];
  
  const pageTitle = roomType === 'study' ? 'Study Rooms' : 'Interview Rooms';
  
  return (
    <div className="room-page">
      <div className="page-header">
        <Link to="/" className="back-button">
          <FaHome />
          <span>Home</span>
        </Link>
        <h1 className="room-page-title">{pageTitle}</h1>
      </div>
      
      <div className="room-list">
        {rooms.map((room, index) => (
          <RoomButton 
            key={index} 
            name={room.name} 
            route={room.route} 
          />
        ))}
      </div>
    </div>
  );
};

export default RoomPages; 