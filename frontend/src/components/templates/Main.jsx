import React, { Fragment } from 'react';
// import Header from './Header';
import Nav from './layout/Nav';
import './Main.css';

export default props =>
  <Fragment>
    {/* header will receive an object with all props 
    defined in App.jsx from the Main element*/}
    <Nav {...props} /> 
      <main className='content container-fluid'>
        <div className='p-3 mt-3'>
          {props.children}
        </div>
      </main>
  </Fragment>
