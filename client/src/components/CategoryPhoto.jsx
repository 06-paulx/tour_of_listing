import React from 'react';




var CategoryPhoto = (props) => {
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
    'height': '166px',
  }
  
  const categoryName = {
    'marginTop': '8px',
    'textAlign': 'left',
    'fontSize': '14px',
    'color': '#484848'
  }

  return (
    <div className='categoryContainer'>
      <button className='photoButton' style={button} onClick={props.changeToTourThisHome}>
        <div className='photoContainer' style={photoContainer}>
        <img style={img} src={props.photos[0].photourl}/>
        </div>
        <div className='categoryName' style={categoryName}>
          <span>{props.photos[0].category}</span>
        </div>
      </button>
    </div>
  )
}

export default CategoryPhoto;