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
            <div className='row'>
              {/* <div className='col-4 col-lg-3 pt-5'>
                <div className='table-header'>About</div>
                <div className='link-content'>Story</div>
                <div className='link-content'>Community</div>
                <div className='link-content'>Blog</div>
              </div> */}
              <div className='col-12 col-lg-6 pt-5'>
                <div className='table-header'>Follow us
                  <Nav className='ml-auto d-flex justify-content-center'>
                    <Nav.Link href='https://www.facebook.com/groups/410056133057002/' target='_blank' rel='noopener noreferrer'>
                      <i className='footer-fa fa fa-facebook'></i>
                    </Nav.Link>
                    <Nav.Link href='https://www.instagram.com/ihshg1/?hl=pt' target='_blank' rel='noopener noreferrer'>
                      <i className='footer-fa fa fa-instagram'></i>
                    </Nav.Link>
                    <Nav.Link href='https://www.youtube.com/channel/UCPStMEjwVivd40NrjweA44A' target='_blank' rel='noopener noreferrer'>
                      <i className='footer-fa fa fa-youtube'></i>
                    </Nav.Link>
                    <Nav.Link href='https://www.twitter.com/IHSHG2?s=09' target='_blank' rel='noopener noreferrer'>
                      <i className='footer-fa fa fa-twitter'></i>
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
              <div className='col-12 col-lg-6 pt-5 pb-5'>
                <div className="form-subs m-0">
                  <input className='form-control' type='email' id='emailLogin' autoComplete='off' required/>
                  <label className='form-label-subs' htmlFor='email'>
                    <span className='content-name'>Email</span>
                  </label>
                </div>
                <div className='button-container'>
                  <button className='btn-subs'>Subscripe<span className='circle' disabled={true}></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-12 col-lg-8 d-flex align-items-center'>
              <img src={LogoFile} alt='logo' />
                <span className='copyrights'>
                  Copyrights © 2020 International History Students & Historians Group - All rights reserved.
                </span>
              </div>
              <div className='col-12 col-lg-4 d-flex justify-content-end align-items-center'>
                <span className='copyrights'>
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
