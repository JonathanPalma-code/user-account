import React from 'react';
import Main from '../templates/Main';
import SignUp from '../auth/SignUp';

import './Home.css';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Main icon='home' title='"Knowledge is Power"'>
      <Container fluid={true}>
        <h1 className='title'>Welcome to </h1>
        <hr />
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <p>
              This project is part of the International History Students & Historians Group. Our main goal is
              to protect the world of heritage and sharing/connecting between students and 
              professionals in the fields of History, Archaeology, Speleology and Anthropology.
              As protection of heritage concern, we will continue to ensure the protection of the entire historical and 
              cultural heritage of any part of the world. 
              This website gives the possibility for any person to report a monument vicinity that is damaged, 
              in bad condition or scheduled for destruction in real time!
            </p>
            <a className='pt-4 pr-3' href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
              <p><i className='fa fa-facebook'></i> Join our Group</p>
            </a>
          </div> 
          <div className='col-lg-1' />
          <div className='sign-up col-12 col-lg-5'>
          <SignUp />
          </div>
        </div>
    </Container>
      </Main>
  )
}

export default Home;
