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

  const viewAllRoomsHeader = {
    'marginTop': '64px',
    'marginLeft': 'auto',
    'marginRight': 'auto',
  }

  const mainContainer = {
    'maxWidth': '1080px',
    'paddingTop': '50px',
    'paddingRight': '24px',
    'paddingLeft': '24px',
    'margin': 'auto',
  }
  const overlay = {
    'position': 'fixed',
    'overflowY': 'scroll',
    'top': '0',
    'right': '0',
    'left': '0',
    'bottom': '0',
    'backgroundColor': 'white',
    'zIndex': '3'
  }

  return (
    <div style={overlay}>
      <div className='viewAllRoomsHeader' style={viewAllRoomsHeader}>
        <StickyNavBar 
        changeViewToMain={props.changeViewToMain} 
        changeToTourThisHome={props.changeToTourThisHome}
        view={props.view} />
      </div>
      <div className='viewAllRoomsMainContainer' style={mainContainer}>
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