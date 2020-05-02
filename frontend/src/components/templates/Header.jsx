import React from 'react';
import './Header.css';

export default props =>
  <header className='header'>
    <h1 className='mt-1'>
      <i className={`fa fa-${props.icon}`} />
      {props.title}
    </h1>
      <div>{props.subtitle}</div>
  </header>
