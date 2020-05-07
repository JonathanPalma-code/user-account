import React, { Component } from 'react';

import Main from '../templates/Main';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { posts } = this.props;
    
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
    posts: state.firestore.ordered.posts
  }
}

export default compose(
  connect((mapStateToProps)),
  firestoreConnect([
    { collection: 'posts' } // synced to rootReducer
  ])
)(Dashboard);
