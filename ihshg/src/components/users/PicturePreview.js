import React from 'react';


import '../templates/Main.css';

const PicturePreview = (props) => {
  const { pictureURL } = props;

  if (pictureURL) {
    return (
      <img className='img-fluid img-thumbnail p-2 m-3' src={pictureURL} alt="profile"/>
    )
  }
  else {
    return null;
  }
}

export default PicturePreview;
