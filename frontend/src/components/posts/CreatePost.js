import React, { Component } from 'react'

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
    this.props.createPost(this.state);
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
    return (
      <Main {...headerProps}>
        <hr />
        {this.renderForm()}
      </Main>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    createPost: (project) => dispatch(createPost(project))
  }
}

export default connect(null, mapDispatchtoProps)(CreatePost);
