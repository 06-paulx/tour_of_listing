import React from 'react';
import _ from 'lodash';

const TourThisHomeSection = (props) => {

  return (
    <section>
      <h1>{props.photos[0].category}</h1>
      <div className='photoContainer'>
        {_.map(props.photos, function(photo) {
          return (
            <div>
              <div>{photo.categorytext}</div>
              <img src={photo.photourl}></img>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TourThisHomeSection;