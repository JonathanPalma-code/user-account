import React, { Component } from 'react'
import { connect } from 'react-redux';

import Main from '../templates/Main';
import { logIn } from '../../store/actions/authActions';

const headerProps = {
  icon: 'sign-in',
  title: 'Log In'
}

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
    event.preventDefault();
    this.props.logIn(this.state);
  }

  renderForm() {
    const { authError } = this.props
    return (
      <div className="form mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='email'>Email:</label>
              <input className='form-control' type='email' id='email' onChange={this.updateFields} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='password'>Password:</label>
              <input className='form-control' type='password' id='password' onChange={this.updateFields} />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div>
              {authError ? <p>{authError}</p> : null}
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Log In
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Main {...headerProps}>
        <hr />
        {this.renderForm()}
      </Main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
