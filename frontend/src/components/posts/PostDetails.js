import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 
import { Redirect } from 'react-router-dom';

import Main from '../templates/Main';

const PostDetails = (props) => {
  // console.log(props);
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to="/login" />
  
  if (post) {
    return (
      <Main>
        <section>
          <div className="card-content">
            <h1>{post.title}</h1>
            <p>{post.content}
            </p>
          </div>
          <hr />
          <div className="card-action">
            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
            <div>4th May 2020 at 4pm</div>
          </div>
        </section>
      </Main>
    )
  }
  else {
    return (
      <Main>
        <section className='container center'>
          <p>Loading post...</p>
        </section>
      </Main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null
  return {
    post: post,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts'}
  ])
)(PostDetails);
