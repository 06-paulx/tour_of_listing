import React from 'react';
import StickyNavBar from './StickyNavBar.jsx';
import TourThisHomeSection from './TourThisHomeSection.jsx'
import _ from 'lodash';


const TourThisHome = (props) => {

  const topMargins = {
    'paddingTop': '50px',
  }
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
          <div className='topMargins' style={topMargins}>
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