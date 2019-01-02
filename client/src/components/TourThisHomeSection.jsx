import React from 'react';
import _ from 'lodash';

const TourThisHomeSection = (props) => {

  const photo = {
    'widthMax': '800px',
    'marginLeft': '60px',
  }

  const photos = {
    'padding': '6px',
    'width': '100%',

  }

  return (
    <div>
      <section>
        <h1 id={props.photos[0].category}>{props.photos[0].category}</h1>
        <div className='photoContainer'>
          {_.map(props.photos, function(photo, index) {
            return (
              <div>
                <div>{photo.categorytext}</div>
                <img src={photo.photourl} style={photos}></img>
              </div>
            )
          })}
        </div>
      </section>
    </div>
    
  )
}

export default TourThisHomeSection;