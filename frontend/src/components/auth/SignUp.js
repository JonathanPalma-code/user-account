import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Main from '../templates/Main';

const headerProps = {
  icon: 'user-plus',
  title: 'Sign Up'
}

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
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
    console.log(this.state);
  }

  renderForm() {
    const { auth } = this.props
    if (auth.uid) return <Redirect to="/dashboard" />

    return (
      <div className="form mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='firstName'>First Name:</label>
              <input className='form-control' type='text' id='firstName' onChange={this.updateFields} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='lastName'>Last Name:</label>
              <input className='form-control' type='text' id='lastName' onChange={this.updateFields} />
            </div>
          </div>
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
          </div><div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='passwordConfirmation'>Password Confirmation:</label>
              <input className='form-control' type='password' id='passwordConfirmation' onChange={this.updateFields} />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Sign Up
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
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp);
