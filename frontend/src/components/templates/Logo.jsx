import React from 'react';
import { Link } from 'react-router-dom';

import LogoFile from '../../assets/imgs/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <section className='logo bg-image'>
      <Link to='/' className='logo'>
        <img src={LogoFile} alt='logo' />
      </Link>
    </section>
  )
}

export default Logo;
