import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Nav.css';

export default props =>
  <aside className='menu-area'>
    <Navbar collapseOnSelect bg="light" variant='light' expand="lg">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle className="border-1" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className='ml-auto mt-4' >
          <Nav.Link eventKey='1' as={Link} to='/'>
            <i className='fa fa-home'></i> Home
          </Nav.Link>
          <Nav.Link eventKey='2' as={Link} to='/users'>
            <i className='fa fa-users'></i> Users
          </Nav.Link>
          <a className='nav-link' href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-facebook'></i> Join our Group
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </aside>

  
