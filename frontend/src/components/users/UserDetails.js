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
      <div className='container'>
        <center>
          <h2 className='user-title'>{props.profile.firstName} {props.profile.lastName}</h2>
          <h3>Welcome to YourSpace.</h3>
        </center>
        <div className="row pt-5 pb-5">
          <div className="col-12 col-lg-4">
            <p>Profile Picture</p>
          </div>
          <div className="col-12 col-lg-8">
            <label>First Name</label>
            <h5>{props.profile.firstName}</h5>
            <label>Last Name</label>
            <h5>{props.profile.lastName}</h5>
            <label>Email</label>
            <h5>{props.auth.email}</h5>
          </div>
        </div>
      </div>
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