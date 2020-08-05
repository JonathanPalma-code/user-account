import React, { Component } from 'react';
import PicturePreview from './PicturePreview';

import { storage } from '../../config/fbConfig';

import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/updateAuthActions';

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        email: props.profile.email,
        initials: props.profile.initials,
        pictureURL: props.profile.pictureURL
      },
      picture: null
    }
    this.updateFields = this.updateFields.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  updateFields = (event) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.id]: event.target.value,
        initials: this.state.profile.firstName[0] + this.state.profile.lastName[0]
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
    // event.preventDefault();
    const { picture } = this.state;
    if (this.state.profile.firstName && this.state.profile.lastName && this.state.profile.email !== '') {
      if (picture) {
        const uploadPic = storage.ref(`images/${picture.name}`).put(picture);
        uploadPic.on('state_changed',
        (snapshot) => {
          
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage.ref('images').child(picture.name).getDownloadURL()
          .then(url => {
            this.setState({
              profile: {
                ...this.state.profile,
                pictureURL: url
              }
            });
          }).then(() => {
            this.props.updateUser(this.state.profile);
            alert("User updated with success.")
          })
          
        })
      }
      else {
        this.props.updateUser(this.state.profile);
        alert("User updated with success.")
      }
    }
    else {
      alert("All fields most be fielded.");
    }
  }
  
  
  render() {
    const { pictureURL } = this.state.profile;
    return (
      <div className="form container pb-2">
        <div className="row">
          <div className="col-12">
            <div className="form-group pt-2">
              <input className='form-control' type='text' value={this.state.profile.firstName}
                id='firstName' onChange={this.updateFields} required />
              <label className='form-label' htmlFor='firstName'>
                <span className='content-name'>First Name</span>
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group pt-2">
              <input className='form-control' type='text' value={this.state.profile.lastName}
                id='lastName' onChange={this.updateFields} required />
              <label className='form-label' htmlFor='lastName'>
                <span className='content-name'>Last Name</span>
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group pt-2">
              <input className='form-control' type='text' value={this.state.profile.email}
                id='email' onChange={this.updateFields} required />
              <label className='form-label' htmlFor='email'>
                <span className='content-name'>Last Name</span>
              </label>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <input
            type='file'
            accept='image/*'
            onChange={this.handleUpload}
          />
        </div>
        <div className='img-restriction'>
          <p>Only image format accepted (.jpg, .jpeg, .png, .gif, .ico)</p>
        </div>
        <div className='col-12 col-lg-6'>
          <PicturePreview pictureURL={pictureURL} />
        </div>
        <div className="d-flex justify-content-end m-auto pt-5">
          <button className="btn-input" onClick={this.handleClick}>
            Update
            </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (profile) => dispatch(updateUser(profile))
  }
}

export default connect(null, mapDispatchToProps)(UpdateUser);
