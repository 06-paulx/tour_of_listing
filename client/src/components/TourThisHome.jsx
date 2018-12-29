import React from 'react';
import StickyNavBar from './StickyNavBar.jsx';
import TourThisHomeSection from './TourThisHomeSection.jsx'
import _ from 'lodash';


const TourThisHome = (props) => {

  return (
    <div>
      <div className='TourThisHomeHeader'>
        <StickyNavBar 
        changeViewToMain={props.changeViewToMain}
        changeToViewAllRooms={props.changeToViewAllRooms}
        view={props.view} />
      </div>
      <div className='mainConatainer'>
        <div className='sideMargins'>
          <div className='topMargins'>
            <div className='sectionsContainer'>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default TourThisHome;