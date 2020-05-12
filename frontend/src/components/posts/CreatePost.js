import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import Main from '../templates/Main';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

const headerProps = {
  icon: 'plus-circle',
  title: 'Create Post'
}

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
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
    //calls the function mapDispatchToProps in createPost key
    this.props.createPost(this.state);
    this.props.history.push('/dashboard');
  }

  renderForm() {
    return (
      <div className="form mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='title'>Title:</label>
              <input className='form-control' type='text' 
                id='title' onChange={this.updateFields} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor='content'>Post Content:</label>
              <textarea className='form-control' style={{ resize: 'none' }} 
                id='content' onChange={this.updateFields} />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Post
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { auth } = this.props
    // console.log(auth);
    if (!auth.uid) return <Redirect to="/login" />
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)) // createPost comes from the import
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
