import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/templates/Logo';
import Nav from '../components/templates/layout/Nav';
import Routes from './Routes';
import Footer from '../components/templates/layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
} 

export default App;
