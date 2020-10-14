import React from 'react';
import Main from '../templates/Main';
import SignUp from '../auth/SignUp';
import SignUpWith from '../auth/SignUpWith';

import './Home.css';
import Container from 'react-bootstrap/Container';

require('dotenv').config();

const Home = () => {

  return (
    <Main icon='home' title='"Knowledge is Power"'>
      <Container>
        <h1 className='title'>Welcome to </h1>
        <hr />
        <div className='row'>
          <div className='col-12'>
            <p>
              This project is part of the International History Students & Historians Group. Our main goal is
              to protect the world of heritage and sharing/connecting between students and
              professionals in the fields of History, Archaeology, Speleology and Anthropology.
              As protection of heritage concern, we will continue to ensure the protection of the entire historical and
              cultural heritage of any part of the world.
              This website gives the possibility for any person to report a monument vicinity that is damaged,
              in bad condition or scheduled for destruction in real time!
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='sign-up col-12 col-lg-7'>
            <SignUp />
          </div>
          <div className='col-lg-1 d-flex justify-content-end align-items-center'>Or</div>
          <div className='sign-up col-12 col-lg-4 d-flex justify-content-end align-items-center'>
            <SignUpWith />
          </div>
        </div>
        <div>
          
        </div>
      </Container>
    </Main>
  )
}

export default Home;
