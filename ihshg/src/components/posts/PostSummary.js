import React from 'react';
import moment from 'moment';
import PicturePreview from '../users/PicturePreview';

import '../templates/Main.css';

const PostSummary = ({ post }) => {

  const introduction = (text, maxLength, separator = ' ') => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(separator, maxLength)) + "...";
  }

  return (
    <div className='pb-4'>
      <div className="card text-dark post-summary">
        <span className="card-header header-post-summary">
          {post.title}
        </span>
        <p className='m-0 p-1'>Subject: {post.category}</p>
        <p id='p_wrap' className='m-0 p-1'>{introduction(post.content, 500)}</p>
        <div className="summary-image col-12">
          <PicturePreview pictureURL={post.pictureURL} />
        </div>
        <p className='m-0 p-1 footer-post-summary'>Posted by {post.authorFirstName} {post.authorLastName}. {moment(post.createdAt.toDate().toString()).calendar()}</p>
      </div>
    </div>
  )
}

export default PostSummary;
