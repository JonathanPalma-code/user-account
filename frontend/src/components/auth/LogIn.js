import React, { Component } from 'react'

import Main from '../templates/Main';

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
    console.log(this.state);
  }

  render() {
    return (
      <Main>
        <h1>Log In</h1>
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
              <button className="btn btn-primary" onClick={this.handleClick}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </Main>
    )
  }
}

export default LogIn;
