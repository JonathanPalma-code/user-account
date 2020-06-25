import React, { Fragment } from 'react';
import Nav from './layout/Nav';
import './Main.css';

export default props =>
  <Fragment>
    <Nav {...props} /> 
      <main className='content container-fluid pt-4 pb-1'>
        <div className='main-container pb-4'>
          {props.children}
        </div>
      </main>
  </Fragment>
