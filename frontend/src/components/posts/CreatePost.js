import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Main from '../templates/Main';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/addPostActions';
import { storage } from '../../config/fbConfig';

import '../templates/Main.css'

const headerProps = {
  title: 'Create Post'
}

class CreatePost extends Component {
  state = {
    post: {
      title: '',
      content: '',
      category: '',
      pictureURL: ''
    },
    picture: null
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState({
      post: {
        ...this.state.post,
        [event.target.id]: event.target.value
      }
    });
  }

  handleUpload = (event) => {
    if (event.target.files[0]) {
      const picture = event.target.files[0];
      this.setState({
        picture: picture
      })
    }
  }

  handleClick = (event) => {
    // prevent default action from submitting - prevent to refresh the page
    event.preventDefault();
    const { picture } = this.state;
    if (this.state.post.title && this.state.post.content && this.state.post.category !== '') {
      if (picture) {
        const uploadPic = storage.ref(`postImages/${picture.name}`).put(picture);
        uploadPic.on('state_changed',
          (snapshot) => {

          },
          (error) => {
            console.log(error);
          },
          () => {
            storage.ref('postImages').child(picture.name).getDownloadURL()
              .then(url => {
                this.setState({
                  post: {
                    ...this.state.post,
                    pictureURL: url
                  }
                });
              }).then(() => {
                this.props.createPost(this.state.post);
                this.props.history.push('/dashboard');
              })

          })
      }
      else {
        this.props.createPost(this.state.post);
        this.props.history.push('/dashboard');
      }
    }
    else {
      alert("All fields most be fielded.");
    }
  }

  renderForm() {
    return (
      <div className="form container pb-2">
        <Nav className='m-auto pb-3'>
          <Nav.Link eventKey='0' as={NavLink} to='/dashboard'>
            <i className='fa fa-undo' aria-hidden="true"></i> Back
          </Nav.Link>
        </Nav>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <input className='form-control' type='text'
                id='title' onChange={this.updateFields} required />
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
            <div className="form-group pt-2">
              <input
                type='file'
                accept='image/*'
                onChange={this.handleUpload}
              />
              <p className='img-restriction'>Only image format accepted (.jpg, .jpeg, .png, .gif, .ico)</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-textarea">
              <textarea placeholder='Post Content' rows='8' className='textarea-input' style={{ resize: 'none' }}
                id='content' onChange={this.updateFields} required />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button className="btn-input" onClick={this.handleClick}>
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
