import React from 'react';
import { Link } from 'react-router-dom';
import RoomButton from '../components/RoomButton';
import './RoomPages.css';

// Actual data from the spreadsheet
const kresgeRooms = [
  { id: 1, name: 'K1501', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4609' },
  { id: 2, name: 'K1505', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4610' },
  { id: 3, name: 'K1507', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4611' },
  { id: 4, name: 'K1509', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4612' },
  { id: 5, name: 'K4521A', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4613' },
  { id: 6, name: 'K4521B', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4614' },
  { id: 7, name: 'K4521C', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4615' },
  { id: 8, name: 'K4521D', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4616' },
  { id: 9, name: 'K4521E', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4617' },
  { id: 10, name: 'K4521F', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4715' },
];

const KresgeRoomsPage: React.FC = () => {
  return (
    <div className="room-page">
      <div className="container">
        <h1 className="room-page-title">Kresge Building Rooms</h1>
        
        <div className="room-grid">
          {kresgeRooms.map((room) => (
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

export default KresgeRoomsPage; 