import React from 'react';
import StickyNavBar from './StickyNavBar.jsx';
import TourThisHomeSection from './TourThisHomeSection.jsx'
import _ from 'lodash';


const TourThisHome = (props) => {

const mainContainer = {
  'maxWidth': '1080px',
  'paddingTop': '64px',
  'paddingRight': '24px',
  'paddingLeft': '24px',
  'margin': 'auto',
}
  return (
    <div>
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