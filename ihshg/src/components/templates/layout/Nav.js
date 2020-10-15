import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './Nav.css';

const Nav =  (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <LoggedInLinks profile={profile} /> : <LoggedOutLinks />;
  return (
    <section className='menu-area sticky-top'>
      <Container fluid={true} className='p-0'>
        <Navbar className="menu p-0" collapseOnSelect expand="lg">
          <Navbar.Brand className='p-0 ml-3'>
            <h2 className='m-0'>
              {` ${props.title}`}
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle className="border-0 p-2 m-2" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle" className='text-center'>
            {auth.isLoaded && links}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav);
