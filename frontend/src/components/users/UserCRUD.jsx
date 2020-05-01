import React, { Component } from 'react';
import Axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
  icon: 'users',
  title: 'User',
  subtitle: 'User registration: Select, Insert, Update and Delete'
}

const baseURL = 'http://localhost:3001/users';
const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class UserCrud extends Component {
  
  state = { ...initialState }
  
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
    this.updateField = this.updateField.bind(this);
  }


  clear() {
    this.setState({
      user: initialState.user
    })
  }

  save() {
    const user = this.state.user;
    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;
    Axios[method](url, user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: initialState.user, list })
      });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id);
    list.unshift(user); // put the elem to the 1st index of the array
    return list;
  }

  updateField(event) {
    const user = {...this.state.user };
    // this will get both fields (name and email)
    user[event.target.name] = event.target.value; 
    this.setState({ user }); 
  }

  renderForm() { // build the User table
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Full Name:</label>
              <input type='text' className='form-control'
                name='name'
                value={this.state.user.name}
                onChange={this.updateField} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email:</label>
              <input type='text' className='form-control'
                name='email'
                value={this.state.user.email}
                onChange={this.updateField} />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={this.save}>
              Sign Up
            </button>
            <button className="btn btn-secondary ml-2"
              onClick={this.clear}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
      </Main>
    )
  }
}
