import React from 'react';

const mainPhoto = {
  'height': '100%',
  'width': '100%',
  'backgroundImage': 'url("https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom2.jpg")'
}

var CategoryPhoto = (props) => {
  return (
    <div className='categoryContainer'>
      <button className='photoButton'>
        <div className='mainPhoto' style={mainPhoto}></div>
        <div className='categoryName'>bedroom dining room etc</div>
      </button>
    </div>
  )
}

export default CategoryPhoto;