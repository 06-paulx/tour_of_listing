import React from 'react';
import ViewOneRoom from './viewOneRoom.jsx';

const viewAllRooms = (props) => {

  return (
    <div>
      <div className='viewAllRoomsHeader'>Tour this home</div>
      <div className='viewAllRoomsMainContainer'>
        <div className='categoryContainer'>
        <ViewOneRoom />
        </div>
      </div>
    </div>
  )
}

export default viewAllRooms;