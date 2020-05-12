import React from 'react';
import moment from 'moment';

const PostSummary = ({post}) => {
  return (
    <div className="card post-summary">
      <span className="card-title">{post.title}</span>
      <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
      <p>{moment(post.createdAt.toDate().toString()).calendar()}</p>
    </div>
  )
}

export default PostSummary;
