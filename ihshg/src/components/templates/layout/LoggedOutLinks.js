import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Login from '../../auth/LogIn';

const SignedOutLinks = () => {
  return (
    <Nav className='ml-auto' >
      <Login />
    </Nav>
  )
}

export default SignedOutLinks;
