import React from 'react';
import { connect } from 'react-redux';

import Main from '../templates/Main';

const headerProps = {
  icon: 'exclamation-triangle',
  title: 'Email not verified'
}

const VerifyEmail = (props) => {
  const { auth } = props;
  console.log(auth);
  return (
    <Main {...headerProps}>
      <div>
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> You are not verified.
      </div>
    </Main>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(VerifyEmail);