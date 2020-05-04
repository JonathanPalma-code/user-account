import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const SignedOutLinks = () => {
  return (
    <Nav className='ml-auto mt-3' >
      <Nav.Link as={NavLink} exact to='/signup'>
        <i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up
      </Nav.Link>
      <Nav.Link as={NavLink} to='/login'>
        <i className="fa fa-sign-in" aria-hidden="true"></i> Log In
      </Nav.Link>
      <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i>  Join our Group
      </Nav.Link>
    </Nav>
  )
}

export default SignedOutLinks;
