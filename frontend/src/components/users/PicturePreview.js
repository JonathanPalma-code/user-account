import React from 'react';


import '../templates/Main.css';

const PicturePreview = (props) => {
  const { pictureURL } = props;
  return (
    <img className='img-fluid p-1' src={pictureURL} alt="profile" />
  )
}

export default PicturePreview;
