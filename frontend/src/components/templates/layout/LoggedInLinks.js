import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import { connect } from 'react-redux';
import { logOut } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  return (  
    <Nav className='ml-auto mt-3' >
      <Nav.Link eventKey='1' as={NavLink} to='/dashboard'>
        <i className='fa fa-home' aria-hidden="true"></i> Home
      </Nav.Link>
      <Nav.Link eventKey='2' as={NavLink} to='/createpost'>
        <i className='fa fa-plus-circle' aria-hidden="true"></i> Create Post
      </Nav.Link>
      <Nav.Link eventKey='3' as={NavLink} to='/users'>
        <i className='fa fa-users' aria-hidden="true"></i> Users
      </Nav.Link>
      <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i>  Join our Group
      </Nav.Link>
      <Nav.Link eventKey='4' as={NavLink} onClick={props.logOut} to='/'>
        <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
      </Nav.Link>
      <Nav.Link className='pt-1' as={NavLink} exact to='/'>
        <button className="btn-style">{props.profile.initials}</button>
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
