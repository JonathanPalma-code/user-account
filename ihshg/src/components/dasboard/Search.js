import React from 'react';
import { Link } from 'react-router-dom';
import PostSummary from '../posts/PostSummary';

const Search = ({ posts, searchTerm }) => {

  const dinamicSearch = posts && posts.map(post => {
    if (searchTerm !== '' && post.category.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) === -1) {
      return null;
    }
    else return (
      <Link to={'/post/' + post.id} key={post.id} >
        <PostSummary post={post} />
      </Link>
    );
  })

  return (
    <div className="post-list section">
      {dinamicSearch}
    </div>
  )
}

export default Search;