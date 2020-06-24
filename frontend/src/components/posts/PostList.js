import React from 'react';
import { Link } from 'react-router-dom';
import PostSummary from './PostSummary';

import '../templates/Main.css';

const PostList = ({posts}) => {

  const allPosts = posts && posts.map(post => {
    return (
      <Link to={'/post/' + post.id} key={post.id} >
        <PostSummary post={post} />
      </Link>
    );
  })

  return (
    <div className="post-list section">
      {allPosts}
    </div>
  )
}

export default PostList;
