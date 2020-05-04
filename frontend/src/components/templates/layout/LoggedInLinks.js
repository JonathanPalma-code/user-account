import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const LoggedInLinks = () => {
  return (  
    <Nav className='ml-auto mt-3' >
      <Nav.Link eventKey='1' as={NavLink} exact to='/'>
        <i className='fa fa-home' aria-hidden="true"></i> Home
      </Nav.Link>
      <Nav.Link eventKey='2' as={NavLink} to='/users'>
        <i className='fa fa-users' aria-hidden="true"></i> Users
      </Nav.Link>
      <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i>  Join our Group
      </Nav.Link>
      <Nav.Link eventKey='3' as={NavLink} to='/logout'>
        <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
      </Nav.Link>
      <Nav.Link className='pt-1' as={NavLink} exact to='/'>
        <button className="btn-style">JP</button>
      </Nav.Link>
    </Nav>
  )
}

export default LoggedInLinks;
