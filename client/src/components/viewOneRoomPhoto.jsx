import React from 'react';

const photoContainer = {
  'padding': '0.5px',
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

var hrefs = (idName) => {
  return '#' + idName;
}

const ViewOneRoomPhoto = (props) => {

  return (
    <div className='photoContainer' style={photoContainer}>
      <a href={hrefs(props.photo.category)}>
        <button style={button} onClick={props.changeToTourThisHome}>
          <div>
            <img style={img} src={props.photo.photourl}></img>
          </div>
        </button>
      </a>
    </div>
  )
}

export default ViewOneRoomPhoto;