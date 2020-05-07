import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './Nav.css';

const Nav =  (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <section className='menu-area'>
      <Container fluid={true}>
        <Navbar collapseOnSelect bg="light" variant='light' expand="lg">
          <Navbar.Brand>
            <h2 className='mt-1 pt-2'>
              <i className={`fa fa-${props.icon}`} />
              {` ${props.title}`}
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            {links}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Nav);
