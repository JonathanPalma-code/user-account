import React from 'react';
import './Header.css';

export default props =>
  <header className='header'>
    <i className={`fa fa-${props.icon}`} />
    <h1 className='mt-1'>
      {props.title}
    </h1>
    <p className='lead text-muted'>
      {props.subtitle}
    </p>
  </header>
