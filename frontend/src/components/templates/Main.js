import React, { Fragment } from 'react';
import Nav from './layout/Nav';
import './Main.css';

export default props =>
  <Fragment>
    <Nav {...props} /> 
      <main className='content container-fluid'>
        <div className='p-3 mt-3'>
          {props.children}
        </div>
      </main>
  </Fragment>
