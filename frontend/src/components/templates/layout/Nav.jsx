import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './Nav.css';

const nav = () => {
  return (
    <aside className='menu-area'>
      <div className="container">
        <Navbar collapseOnSelect bg="light" variant='light' expand="lg">
          <Navbar.Brand>
            <Nav.Link as={NavLink} to='/'>
              <button className="btn-style">JP</button>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle className="border-1" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <LoggedInLinks />
            <LoggedOutLinks />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </aside>
  )
}

export default nav;
