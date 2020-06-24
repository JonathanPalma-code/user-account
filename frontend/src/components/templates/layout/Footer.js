import React from 'react';
import Nav from 'react-bootstrap/Nav';

import LogoFile from '../../../assets/imgs/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='row text-center'>
              <div className='col-12 col-lg-4'>
                <span className='table-header'>About</span>
                <div>Story</div>
                <div>Community</div>
                <div>Blog</div>
              </div>
              <div className='col-12 col-lg-4'>
                <span className='table-header'>Follow us</span>
                <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-facebook'></i>  Facebook
                </Nav.Link>
                <div><i className='fa fa-instagram'></i>  Instagram</div>
                <div><i className='fa fa-twitter'></i>  Twitter</div>
                <div><i className='fa fa-youtube'></i>  Youtube</div>
              </div>
              <div className='col-12 col-lg-4'>
                <span className='table-header'>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-6 d-flex align-items-center'>
              <img src={LogoFile} alt='logo' />
                <span className='copyrights'>
                  Copyrights © 2020 International History Students & Historians Group - All rights reserved.
                </span>
              </div>
              <div className='col-6 d-flex justify-content-end align-items-center'>
                <span className='dev-by'>
                Developed with <i className='fa fa-heart text-danger'></i>  by Jonathan Palma.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
