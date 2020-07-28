import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import { logIn } from '../../store/actions/authActions';
import '../templates/layout/Nav.css'

class LogIn extends Component {
  state = {
    emailLogin: '',
    passwordLogin: ''
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleClick = (event) => {
    // prevent default action from submitting - prevent to refresh the page
    event.preventDefault();
    this.props.logIn(this.state);
  }

  renderForm() {
    const { authError2, auth } = this.props

    if (auth.uid) return <Redirect to="/dashboard" />

    return (
      <Fragment>
        <div className="form-login">
          <div className="row pl-2 pt-3 mr-1">
            <div className="col-5 pr-0">
              <div className="form-group m-0">
                <input className='form-control' type='email' id='emailLogin' autoComplete='off' onChange={this.updateFields} required />
                <label className='form-label-log' htmlFor='email'>
                  <span className='content-name'>Email</span>
                </label>
              </div>
            </div>
            <div className="col-5 pr-0">
              <div className="form-group m-0">
                <input className='form-control' type='password' id='passwordLogin' autoComplete='off' onChange={this.updateFields} required />
                <label className='form-label-log' htmlFor='password'>
                  <span className='content-name'>Password</span>
                </label>
              </div>
            </div>
            <div className="col-2 form-group m-0">
              <button className="btn-login ml-2" onClick={this.handleClick}>
                <i className="fa fa-sign-in mr-1" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="alert-login-container d-flex justify-content-center">
            {authError2 ? <Alert className='alert-Login' variant="danger" >{authError2}</Alert> : null}
          </div>
        </div>
      </Fragment>
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
    authError2: state.auth.authError2,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
