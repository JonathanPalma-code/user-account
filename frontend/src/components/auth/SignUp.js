import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';


import { signUp } from '../../store/actions/authActions';
import '../templates/Main.css'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: false
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState({
      [event.target.id]: event.target.value,
      error: false
    })
  }

  handleClick = (event) => {
    // prevent default action from submitting - prevent to refresh the page
    // event.preventDefault();
    const letters = /^[A-Za-z]+$/;
    if (this.state.firstName.match(letters) && this.state.lastName.match(letters)) {
      this.props.signUp(this.state);
    }
    else { 
      this.setState({
        error: true
      })
    }
  }

  renderForm() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/dashboard" />

    return (
      <div className='sign-up-form mb-3'>
        <h1 className='pt-0 m-0'>Create a new account</h1>
        <h3 className='m-0'>It's quick and easy.</h3>
        <div className="form">
          <div className="row">
            <div className="col-12">
              <div className="form-group col-6 d-inline-block pt-3 pl-0">
                <input className='form-control' type='text' id='firstName' autoComplete='off' onChange={this.updateFields} required/>
                <label className='form-label' htmlFor='firstName'>
                  <span className='content-name'>First Name</span>
                </label>
              </div>
              <div className="form-group col-6 d-inline-block pt-3 pl-0">
                <input className='form-control' type='text' id='lastName' autoComplete='off' onChange={this.updateFields} required />
                <label className='form-label' htmlFor='lastName'>
                  <span className='content-name'>Last Name</span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group col-6 d-inline-block mt-1 pt-3 pl-0">
                <input className='form-control' type='email' id='email' autoComplete='off' onChange={this.updateFields} required />
                <label className='form-label' htmlFor='email'>
                  <span className='content-name'>Email</span>
                </label>
              </div>
              <div className="form-group col-6 d-inline-block mt-1 pt-3 pl-0">
                <input className='form-control' type='password' id='password' autoComplete='off' onChange={this.updateFields} required />
                <label className='form-label' htmlFor='password'>
                  <span className='content-name'>Password</span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              {authError || this.state.error ? <Alert className='alert-Login p-1' variant="danger" >{authError || "First and Last name are required. Diacritical marks are not accepted."}</Alert> : null}
            </div>
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={this.handleClick}>
                Sign Up
              </button>
            </div>
          </div>
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
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
