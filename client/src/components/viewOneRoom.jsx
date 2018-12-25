import React from 'react';
import ViewOneRoomPhoto from './viewOneRoomPhoto.jsx'
import _ from 'lodash';

const mainContainer = {
  'marginBottom': '24px'
}

const photoContainer = {
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
}

const categoryName = {
  'marginTop': '8px',
  'textAlign': 'left',
  'fontSize': '14px',
  'color': '#484848'
}

const ViewOneRoom = (props) => {

  return (
    <div style={mainContainer}>
      <div className='photosContainer' style={photoContainer}>
        {_.map(props.photos, (photo) => {
          return <ViewOneRoomPhoto photo={photo} />
        })}
      </div>
      <div className='categoryName' style={categoryName}>{props.photos[0].category}</div>
    </div>
  )
}

export default ViewOneRoom;