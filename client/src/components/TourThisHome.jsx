import React from 'react';
import StickyNavBar from './StickyNavBar.jsx';
import TourThisHomeSection from './TourThisHomeSection.jsx'
import _ from 'lodash';


const TourThisHome = (props) => {

const mainContainer = {
  'maxWidth': '1080px',
  'paddingTop': '64px',
  'paddingRight': '36px',
  'paddingLeft': '36px',
  'margin': 'auto',
}

const overlay = {
  'position': 'fixed',
  'overflowY': 'scroll',
  'top': '0',
  'left': '0',
  'right': '0',
  'bottom': '0',
  'backgroundColor': 'white',
  'zIndex': '3'
}
  return (
    <div style={overlay}>
      <div className='TourThisHomeHeader'>
        <StickyNavBar 
        changeViewToMain={props.changeViewToMain}
        changeToViewAllRooms={props.changeToViewAllRooms}
        view={props.view} />
      </div>
      <div className='mainConatainer' style={mainContainer}>
        <div className='sideMargins'>
          <div className='topMargins' >
            <div className='sectionsContainer'>
              {_.map(props.photos, function(photos) {
                return <TourThisHomeSection photos={photos}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TourThisHome;