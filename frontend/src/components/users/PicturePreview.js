import React from 'react';

const PicturePreview = (props) => {
  const { pictureURL } = props;
  return (
    <img className='img-fluid p-1' src={pictureURL} alt="profile" />
  )
}

export default PicturePreview;
