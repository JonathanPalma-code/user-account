import React from 'react';
import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

export default props => 
  <div className='app'>
    <Logo />
    <Nav />
    <Main icon='home' title='Home'
      subtitle='2nd Project in React...'>
      <div className='display-4'>Welcome!</div>
      <hr />
      <p className='mb-0'>This project is part of the International History Students & Historians Group, which gives the possibility for any person to report a monument vicinity that is damaged, in bad condition or scheduled for destruction.</p>
    </Main>
    <Footer />
  </div>
