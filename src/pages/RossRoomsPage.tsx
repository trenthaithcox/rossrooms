import React from 'react';
import { Link } from 'react-router-dom';
import RoomButton from '../components/RoomButton';
import './RoomPages.css';

// Actual data from the spreadsheet
const rossRooms = [
  { id: 1, name: 'R0216', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2329' },
  { id: 2, name: 'R0218', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2330' },
  { id: 3, name: 'R0226', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2331' },
  { id: 4, name: 'R0228', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2332' },
  { id: 5, name: 'R0236', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2333' },
  { id: 6, name: 'R0238', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2334' },
  { id: 7, name: 'R0246', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2335' },
  { id: 8, name: 'R0248', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2336' },
  { id: 9, name: 'R1216', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2337' },
  { id: 10, name: 'R1218', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2338' },
  { id: 11, name: 'R1226', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2339' },
  { id: 12, name: 'R1228', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2340' },
  { id: 13, name: 'R1236', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2341' },
  { id: 14, name: 'R1238', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2342' },
  { id: 15, name: 'R1246', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2343' },
  { id: 16, name: 'R1248', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2344' },
  { id: 17, name: 'R2216', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2345' },
  { id: 18, name: 'R2218', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2346' },
  { id: 19, name: 'R2226', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2347' },
  { id: 20, name: 'R2228', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2348' },
  { id: 21, name: 'R2236', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2349' },
  { id: 22, name: 'R2238', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2350' },
  { id: 23, name: 'R2246', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2351' },
  { id: 24, name: 'R2248', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=2352' },
];

const RossRoomsPage: React.FC = () => {
  return (
    <div className="room-page">
      <div className="container">
        <h1 className="room-page-title">Ross Building Rooms</h1>
        
        <div className="room-grid">
          {rossRooms.map((room) => (
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

export default RossRoomsPage; 