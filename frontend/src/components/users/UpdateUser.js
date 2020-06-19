import React, { Component } from 'react';
import PictureField from './PictureField';

import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/updateAuthActions';

class UpdateUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        firstName: props.profile.firstName,
        lastName: props.profile.lastName,
        email: props.profile.email,
        pictureURL: props.profile.pictureURL
      },
      picture: null,
    }
    this.updateFields = this.updateFields.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateFields = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.profile.firstName && this.state.profile.lastName && this.state.profile.email !== '') {
      this.props.updateUser(this.state.profile);
      console.log(this.state.profile)
      alert("Post updated with success.")
    } else {
      alert("All fields most be field.");
    }
  }

  render() {
    return (
      <div className="form container-fluid pb-3">
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
        <div className='container'>
          <PictureField updateFields={this.updateFields} pictureUrl={this.state.profile.pictureURL} />
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
    updateUser: (profile, pictureURL) => dispatch(updateUser(profile, pictureURL))
  }
}

export default connect(null, mapDispatchToProps)(UpdateUser);
