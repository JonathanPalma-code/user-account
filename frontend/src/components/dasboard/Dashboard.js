import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Main from '../templates/Main';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
  render() {
    const { posts, auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />
    
    return (
      <Main>
        <h1>Dashboard</h1>
        <section className="dashboard container">
          <div className="row">
            <section className="col s12 m6">
              <PostList posts={posts}/>
            </section>
            <section className="col s12 m5 offset-m1">
              <Notifications />
            </section>
          </div>
        </section>
      </Main>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    // posts: state.post.posts // get the random data from postReducer
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  }
}

export default compose(
  connect((mapStateToProps)),
  firestoreConnect([
    { collection: 'posts' } // synced to rootReducer
  ])
)(Dashboard);
