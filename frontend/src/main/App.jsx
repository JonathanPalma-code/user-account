import React from 'react';
import Logo from '../components/Logo.jsx';
import Nav from '../components/Nav.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

export default props => 
  <div className='app'>
    <Logo />
    <Nav />
    <Main icon='home' title='Home'
      subtitle='2nd Project in React...'
    />
    <Footer />
  </div>