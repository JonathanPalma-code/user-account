import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Main from '../templates/Main';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

const headerProps = {
  icon: 'home',
  title: 'Home'
}

class Dashboard extends Component {
  render() {
    const { posts, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/" />
    
    return (
      <Main { ...headerProps }>
        <section className="dashboard container">
          <div className="row">
            <section className="col-12 col-lg-8">
              <PostList posts={posts}/>
            </section>
            <section className="col-12 col-lg-4">
              <Notifications notifications={notifications}/>
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
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect((mapStateToProps)),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] }, // synced to rootReducer
    { collection: 'notifications', limit: 8, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
