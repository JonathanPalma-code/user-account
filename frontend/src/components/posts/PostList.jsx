import React from 'react';

import PostSummary from './PostSummary';

const postList = () => {
  return (
    <div className="post-list section">
      <PostSummary />
      <PostSummary />
      <PostSummary />
      <PostSummary />
    </div>
  )
}

export default postList;
