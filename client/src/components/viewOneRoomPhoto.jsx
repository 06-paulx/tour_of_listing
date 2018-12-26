import React from 'react';

const photoContainer = {
  'padding': '2px',
  'width': '123px',
  'borderRadius': '10%',
}

const button = {
  'backgroundColor': 'transparent',
  'border': '0px',
  'width': '100%'
}

const img = {
  'width': '100%',
  'height': '109px',
  'borderRadius': '5px'
  
}

const ViewOneRoomPhoto = (props) => {

  return (
    <div className='photoContainer' style={photoContainer}>
    <button style={button}>
      <div>
        <img style={img} src={props.photo.photourl}></img>
      </div>
    </button>
    </div>
  )
}

export default ViewOneRoomPhoto;