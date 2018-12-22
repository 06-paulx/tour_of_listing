import React from 'react';

const categoryContainer = {
  'width': '25%',
  // padding-left: 8px !important;
  // padding-right: 8px !important;
  // padding-bottom: 16px !important;
  'display': 'inlineBlock',
  'verticalAlign': 'top' 
}

const button = {
  'backgroundColor': 'transparent',
  'border': '0px',
  'width': '100%'
}

const photoContainer = {
  'display': 'block',
  'midWidth': '0px'
}

const img = {
  'width': '450px',
  'maxWidth': '100px',
  'maxHeight': '450px'
}

const categoryName = {
  'marginTop': '8px',
}


var CategoryPhoto = (props) => {
  return (
    <div className='categoryContainer'>
      <button className='photoButton' style={button}>
        <div className='photoContainer' style={photoContainer}>
        <img style={img} src="https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom2.jpg"/>
        </div>
        <div className='categoryName' style={categoryName}>bedroom dining room etc</div>
      </button>
    </div>
  )
}

export default CategoryPhoto;