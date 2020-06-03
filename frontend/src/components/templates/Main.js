import React, { Fragment } from 'react';
import Nav from './layout/Nav';
import './Main.css';

export default props =>
  <Fragment>
    <Nav {...props} /> 
      <main className='content container-fluid pt-4'>
        <div className='main-container'>
          {props.children}
        </div>
      </main>
  </Fragment>
