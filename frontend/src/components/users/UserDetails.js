import React, { Component } from 'react';
import Main from '../templates/Main';

import '../templates/Main.css';

const headerProps = {
  icon: 'users',
  title: 'Users Details'
}

class UserDetails extends Component {
  render() {
    return (
      <Main {...headerProps}>
        <p>User Details' page.</p>
      </Main>
    )
  }
}

export default UserDetails;