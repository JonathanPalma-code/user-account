import React from 'react';


import '../templates/Main.css';

const PicturePreview = (props) => {
  const { pictureURL } = props;

  if (pictureURL) {
    return (
      <img className='img-fluid p-1' src={pictureURL} alt="profile" max-width="100%" height="auto"/>
    )
  }
  else {
    return null;
  }
}

export default PicturePreview;
