import React from 'react';
import Logo from '../components/Logo.jsx';
import Nav from '../components/Nav.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';
import './App.css';

export default props => 
  <div className='app'>
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>