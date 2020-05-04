import React from 'react';

import PostSummary from './PostSummary';

const PostList = ({posts}) => {

  const allPosts = posts && posts.map(post => {
    return (
      <PostSummary post={post} key={post.id} />
    );
  })

  return (
    <div className="post-list section">
      {allPosts}
    </div>
  )
}

export default PostList;
