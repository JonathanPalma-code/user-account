import React, { Fragment } from 'react';
import Nav from './layout/Nav';
import './Main.css';

export default props =>
  <Fragment>
    <Nav {...props} /> 
      <main className='content container-fluid'>
        <div className='main-container'>
          {props.children}
        </div>
      </main>
  </Fragment>
