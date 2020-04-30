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
  user: { name: '', email: ''},
  list: []
}

export default class UserCrud extends Component {

  state = {...initialState}

  clear() {
    this.setState({
      user: initialState.user
    })
  }

  save() {
    const user = this.state.user;
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;
    Axios[method](url, user)
      .then(resp => {
        const list = this.getUpdateList(resp.data)
        this.setState({ user: initialState, list })
      });
  }

  getUpdateList(user) {
    const list = this.state.list.filter(u => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  render() {
    return (
      <Main {...headerProps}>
        User registration
      </Main>
    )
  }
}
