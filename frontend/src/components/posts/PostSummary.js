import React from 'react';

const PostSummary = ({post}) => {
  return (
    <div className="card post-summary">
      <span className="card-title">{post.title}</span>
      <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
      <p>3rd May 2020 at 10pm</p>
    </div>
  )
}

export default PostSummary;
