import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import { logIn } from '../../store/actions/authActions';
import '../templates/layout/Nav.css'

// const headerProps = {
//   icon: 'sign-in',
//   title: 'Log In'
// }

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  handleClick = (event) => {
    // prevent default action from submitting - prevent to refresh the page
    // event.preventDefault();
    this.props.logIn(this.state);
  }

  renderForm() {
    const { authError, auth } = this.props

    if (auth.uid) return <Redirect to="/dashboard" />
    
    return (
      <div className="form-login pt-2">
        <div className="row mr-0">
          <div className="col-5 pr-0">
            <div className="form-group m-0">
              <input className='form-control pt-4' type='email' id='email' autoComplete='off' onChange={this.updateFields} required/>
              <label className='form-label-log'htmlFor='email'>
                <span className='content-name'>Email</span>
              </label>
            </div>
          </div>
          <div className="col-5 pr-0">
            <div className="form-group m-0">
              <input className='form-control pt-4' type='password' id='password' autoComplete='off' onChange={this.updateFields} required/>
              <label className='form-label-log' htmlFor='password'>
                <span className='content-name'>Password</span>
              </label>
            </div>
          </div>
          <div className="col-2 form-group m-0 mt-3">
            <button className="btn btn-primary ml-2" onClick={this.handleClick}>
              <Link to='/dashboard'>
              </Link>
              <i className="fa fa-sign-in mr-1" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div>
          {authError ? <Alert className='text-center' variant="danger" onDismiss={this.handleAlertDismiss}>{authError}</Alert> : null}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
