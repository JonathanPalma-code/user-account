import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const signedOutLinks = () => {
  return (
    <Nav className='ml-auto mt-4' >
      <Nav.Link as={NavLink} to='/'>
        <i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up
      </Nav.Link>
      <Nav.Link as={NavLink} to='/users'>
        <i className="fa fa-sign-in" aria-hidden="true"></i> Log In
      </Nav.Link>
      <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i>  Join our Group
      </Nav.Link>
    </Nav>
  )
}

export default signedOutLinks;
