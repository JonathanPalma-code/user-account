import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import { connect } from 'react-redux';
import { logOut } from '../../../store/actions/authActions';

import './Nav.css'

const LoggedInLinks = (props) => {
  return (  
    <Nav className='ml-auto login-menu'>
      <Nav.Link eventKey='0' as={NavLink} to='/dashboard'>
        <i className='fa fa-home' aria-hidden="true"></i> Home
      </Nav.Link><span className='pipe'>|</span>
      <Nav.Link eventKey='1' as={NavLink} to='/createpost'>
        <i className='fa fa-plus-circle' aria-hidden="true"></i> Create Post
      </Nav.Link><span className='pipe'>|</span>
      <Nav.Link eventKey='2' as={NavLink} to='/map'>
        <i className='fa fa-globe' aria-hidden="true"></i> Heritage in Danger
      </Nav.Link><span className='pipe'>|</span>
      <Nav.Link className='pt-1' as={NavLink} exact to={'/' + props.profile.firstName + props.profile.lastName}>
        <button className="btn-style">{props.profile.initials}</button>
      </Nav.Link><span className='pipe'>|</span>
      <Nav.Link eventKey='4' as={NavLink} onClick={props.logOut} to='/'>
        <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
      </Nav.Link>
    </Nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { 
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks);
