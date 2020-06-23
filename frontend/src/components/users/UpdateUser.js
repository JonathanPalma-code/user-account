import React, { Component } from 'react';
import PicturePreview from './PicturePreview';

import { storage } from '../../config/fbConfig';

import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/updateAuthActions';

class UpdateUser extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        email: props.profile.email,
        pictureURL: props.profile.pictureURL
      },
      picture: null
    }
    this.updateFields = this.updateFields.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateFields = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
    if (event.target.files[0]) {
      const picture = event.target.files[0];
      this.setState({
        picture: picture
      })
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const { picture } = this.state;
    console.log(picture)
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
            if (this.state.profile.firstName && this.state.profile.lastName && this.state.profile.email !== '') {
              console.log(this.state.profile)
              this.props.updateUser(this.state.profile);
              alert("Post updated with success.")
            } else {
              alert("All fields most be fielded.");
            }
          })
      })
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
        <div>
          <input
            type='file'
            onChange={this.updateFields}
          />
          <PicturePreview pictureURL={pictureURL} />
        </div>
        <div className="d-flex justify-content-end m-auto pt-5">
          <button className="btn btn-warning" onClick={this.handleClick}>
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
