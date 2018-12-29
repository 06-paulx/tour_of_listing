import React from 'react';
import ViewOneRoom from './viewOneRoom.jsx';
import StickyNavBar from './StickyNavBar.jsx';
import _ from 'lodash';



const viewAllRooms = (props) => {

  const categoryContainer = {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
  }

  const viewAllRoomsMainContainer = {
    'paddingTop': '50px',
  }
  return (
    <div>
      <div className='viewAllRoomsHeader' style={viewAllRoomsMainContainer}>
        <StickyNavBar 
        changeViewToMain={props.changeViewToMain} 
        changeToTourThisHome={props.changeToTourThisHome}
        view={props.view} />
      </div>
      <div className='viewAllRoomsMainContainer'>
        <div className='categoryContainer' style={categoryContainer}>
        {_.map(props.photos, (category) => {
          return <ViewOneRoom photos={category} changeToTourThisHome={props.changeToTourThisHome}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default viewAllRooms;