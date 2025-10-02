import React from 'react';
import { Link } from 'react-router-dom';
import RoomButton from '../components/RoomButton';
import './RoomPages.css';

// Actual data from the spreadsheet
const blauRooms = [
  { id: 1, name: 'B0574', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4595' },
  { id: 2, name: 'B0576', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4596' },
  { id: 3, name: 'B1564', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4597' },
  { id: 4, name: 'B1566', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4598' },
  { id: 5, name: 'B1574', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4599' },
  { id: 6, name: 'B1576', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4600' },
  { id: 7, name: 'B2564', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4601' },
  { id: 8, name: 'B2566', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4602' },
  { id: 9, name: 'B2574', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4603' },
  { id: 10, name: 'B2576', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4604' },
  { id: 11, name: 'B3564', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4605' },
  { id: 12, name: 'B3566', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4606' },
  { id: 13, name: 'B3574', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4607' },
  { id: 14, name: 'B3576', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4608' },
];

const BlauRoomsPage: React.FC = () => {
  return (
    <div className="room-page">
      <div className="container">
        <h1 className="room-page-title">Blau Building Rooms</h1>
        
        <div className="room-grid">
          {blauRooms.map((room) => (
            <RoomButton 
              key={room.id}
              name={room.name}
              checkInUrl={room.checkInUrl}
            />
          ))}
        </div>
        
        <Link to="/rooms" className="back-link">
          &larr; Back to buildings
        </Link>
      </div>
    </div>
  );
};

export default BlauRoomsPage; 