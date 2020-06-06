import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Main from '../templates/Main';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/addPostActions';

import '../templates/Main.css'

const headerProps = {
  icon: 'plus-circle',
  title: 'Create Post'
}

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
    category: ''
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick = (event) => {
    // prevent default action from submitting - prevent to refresh the page
    event.preventDefault();
    if (this.state.title && this.state.content && this.state.category !== '') {
      this.props.createPost(this.state);
      //calls the function mapDispatchToProps in createPost key
      this.props.history.push('/dashboard');
    } else {
      alert("All fields most be field.");
    }
  }

  renderForm() {
    return (
      <div className="form container-fluid pb-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <input className='form-control' type='text' 
                id='title' onChange={this.updateFields} required/>
              <label className='form-label' htmlFor='title'>
                <span className='content-name'>Title</span>
              </label>
            </div>
            <div className="form-group pt-2">
              <select defaultValue='Choose a Category...' className='p-1' name="category" id="category" onChange={this.updateFields} required>
                <option disabled="disabled">Choose a Category...</option>
                <option value="General">General</option>
                <option value="Prehistoric">Prehistoric</option>
                <option value="Ancient history">Ancient history</option>
                <option value="Middle ages">Middle ages</option>
                <option value="Modern ages">Modern ages</option>
                <option value="Contemporary Ages">Contemporary Ages</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-textarea">
              <textarea placeholder='Post Content' rows='8' className='textarea-input' style={{ resize: 'none' }} 
                id='content' onChange={this.updateFields} required/>
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
    if (!auth.uid) return <Redirect to="/" />
    return (
      <Main {...headerProps}>
        <Nav className='m-auto'>
          <Nav.Link eventKey='0' as={NavLink} to='/dashboard'>
            <i className='fa fa-undo' aria-hidden="true"></i> Back
          </Nav.Link>
        </Nav>
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
