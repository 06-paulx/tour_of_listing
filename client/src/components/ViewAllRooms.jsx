import React from 'react';
import ViewOneRoom from './viewOneRoom.jsx';
import _ from 'lodash';

const viewAllRooms = (props) => {

  return (
    <div>
      <div className='viewAllRoomsHeader'>
        <button onClick={props.changeViewToMain}>Go Back</button>
        <button>Tour Home</button>
      </div>
      <div className='viewAllRoomsMainContainer'>
        <div className='categoryContainer'>
        {_.map(props.photos, (category) => {
          return <ViewOneRoom photos={category} />
        })}
        </div>
      </div>
    </div>
  )
}

export default viewAllRooms;