import React from 'react';
import './Header.css';
import '../index.css'

export default props =>
  <header className='header'>
    <h1 className='mt-5'>
      <i className={`fa fa-${props.icon}`}>
        {props.title}
      </i>
    </h1>
    <p className='lead text-muted'>
      {props.subtitle}
    </p>
  </header>