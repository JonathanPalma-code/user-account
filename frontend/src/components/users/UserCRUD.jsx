import React, { Component } from 'react';
import Main from '../templates/Main';

const headerProps = {
  icon: 'users',
  title: 'User',
  subtitle: 'User registration: Select, Insert, Update and Delete'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        User registration
      </Main>
    )
  }
}
