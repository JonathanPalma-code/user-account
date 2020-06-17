import React from 'react';
import Main from '../templates/Main';
import { connect } from 'react-redux';

import '../templates/Main.css';

const headerProps = {
  icon: 'users',
  title: 'Users Details'
}

const UserDetails = (props) => {
  return (
    <Main {...headerProps}>
      <p>{props.profile.firstName}</p>
      <p>{props.profile.lastName}</p>
      <p>{props.auth.email}</p>
    </Main>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(UserDetails);