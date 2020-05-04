import React, { Component } from 'react';

import Main from '../templates/Main';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
  render() {
    return (
      <Main>
        <h1>Dashboard</h1>
        <section className="dashboard container">
          <div className="row">
            <section className="col s12 m6">
              <PostList />
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

export default Dashboard;
