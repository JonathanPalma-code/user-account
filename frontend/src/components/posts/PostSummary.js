import React from 'react';
import moment from 'moment';

const PostSummary = ({post}) => {
  return (
    <div className='pb-4'>

    <div className="card post-summary">
      <span className="card-header">{post.title}</span>
      <p className='m-0 p-1'>Posted by {post.authorFirstName} {post.authorLastName}</p>
      <p className='m-0 p-1 card-footer'>{moment(post.createdAt.toDate().toString()).calendar()}</p>
    </div>
    </div>
  )
}

export default PostSummary;
