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
  'midWidth': '0px',
  'width': '100%',
}

const img = {
  'width': '250px',
  'maxWidth': '100%',
  'maxHeight': '450px'
}

const categoryName = {
  'marginTop': '8px',
  'textAlign': 'left',
  'fontSize': '14px',
  'color': '#484848'
}


var CategoryPhoto = (props) => {
  return (
    <div className='categoryContainer'>
      <button className='photoButton' style={button}>
        <div className='photoContainer' style={photoContainer}>
        <img style={img} src="https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom2.jpg"/>
        </div>
        <div className='categoryName' style={categoryName}>
          <span>bedroom dining room etc</span>
        </div>
      </button>
    </div>
  )
}

export default CategoryPhoto;