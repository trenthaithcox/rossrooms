import React from 'react';
import { Link } from 'react-router-dom';
import RoomButton from '../components/RoomButton';
import './RoomPages.css';

// Actual data from the spreadsheet
const kresgeInterviewRooms = [
  { id: 1, name: 'K2521A', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4635' },
  { id: 2, name: 'K2521B', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4636' },
  { id: 3, name: 'K2521C', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4637' },
  { id: 4, name: 'K2521D', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4638' },
  { id: 5, name: 'K2521E', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4639' },
  { id: 6, name: 'K2521F', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4640' },
  { id: 7, name: 'K2521G', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4641' },
  { id: 8, name: 'K2521H', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4642' },
  { id: 9, name: 'K2521J', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4643' },
  { id: 10, name: 'K2521K', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4644' },
  { id: 11, name: 'K2521L', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4645' },
  { id: 12, name: 'K2521M', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4646' },
  { id: 13, name: 'K2521N', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4648' },
  { id: 14, name: 'K2521O', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4649' },
  { id: 15, name: 'K2521P', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4650' },
  { id: 16, name: 'K2521Q', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4651' },
  { id: 17, name: 'K2521R', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4652' },
  { id: 18, name: 'K2521S', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4653' },
  { id: 19, name: 'K2521T', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4655' },
  { id: 20, name: 'K2521U', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4656' },
  { id: 21, name: 'K2521V', checkInUrl: 'https://www.bus.umich.edu/Calendar/StudentRoomReservations/Room.aspx?location_ord=4657' },
];

const KresgeInterviewRoomsPage: React.FC = () => {
  return (
    <div className="room-page">
      <div className="container">
        <h1 className="room-page-title">Kresge Interview Rooms</h1>
        
        <div className="room-grid">
          {kresgeInterviewRooms.map((room) => (
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

export default KresgeInterviewRoomsPage; 