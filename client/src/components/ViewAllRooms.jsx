import React from 'react';
import ViewOneRoom from './viewOneRoom.jsx';

const viewAllRooms = (props) => {

  return (
    <div>
      <div className='viewAllRoomsHeader'>
        <button onClick={props.changeViewToMain}>Go Back</button>
        <button>Tour Home</button>
      </div>
      <div className='viewAllRoomsMainContainer'>
        <div className='categoryContainer'>
        <ViewOneRoom />
        </div>
      </div>
    </div>
  )
}

export default viewAllRooms;