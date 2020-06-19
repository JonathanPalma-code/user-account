import React from 'react';

const PicturePreview = (props) => {
  const { pictureUrl } = props;
  return (
    <img className='img-fluid p-1' src={pictureUrl} alt="pictureprofile" />
  )
}

export default PicturePreview;