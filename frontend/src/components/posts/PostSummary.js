import React from 'react';
import moment from 'moment';

import '../templates/Main.css';

const PostSummary = ({post}) => {
  return (
    <div className='pb-4'>

      <div className="card post-summary text-dark">
        <span className="card-header font-weight-bold">
        {post.title}
      </span>
      <p className='m-0 p-1'>Subject: {post.category}</p>
      <p className='m-0 p-1 card-footer'>Posted by {post.authorFirstName} {post.authorLastName}. {moment(post.createdAt.toDate().toString()).calendar()}</p>
    </div>
    </div>
  )
}

export default PostSummary;
