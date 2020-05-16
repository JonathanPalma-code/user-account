import React from 'react';
// import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Login from '../../auth/LogIn';

const SignedOutLinks = () => {
  return (
    <Nav className='ml-auto' >
      <Nav.Link className='faceb p-0' href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i>  Join our Group
      </Nav.Link>
      {/* <Nav.Link eventKey='0' as={NavLink} to='/login'>
        <i className="fa fa-sign-in" aria-hidden="true"></i> Log In
      </Nav.Link> */}

      <Login />
    </Nav>
  )
}

export default SignedOutLinks;
