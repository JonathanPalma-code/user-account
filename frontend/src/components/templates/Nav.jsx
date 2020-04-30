import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default props =>
  <aside className='menu-area'>
    <nav className='menu'>
      <Link to='/'>
        <i className='fa fa-home'></i> Home
      </Link>
      <Link to='/users'>
        <i className='fa fa-users'></i> Users
      </Link>
      <a href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i> Join our Group
      </a>
    </nav>
  </aside>
