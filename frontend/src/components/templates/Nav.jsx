import React from 'react';
import './Nav.css';

export default props =>
  <aside className='menu-area'>
    <nav className='menu'>
      <a href='#/'>
        <i className='fa fa-home'></i> Home
      </a>
      <a href='#/users'>
        <i className='fa fa-users'></i> Users
      </a>
      <a href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
        <i className='fa fa-facebook'></i> Join our Group
      </a>
    </nav>
  </aside>
