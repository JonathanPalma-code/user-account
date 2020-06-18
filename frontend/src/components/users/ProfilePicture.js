import React, { Component } from 'react'
import { storage } from '../../config/fbConfig';

class ProfilePicture extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null, 
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState({
        image
      })
    }
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {

    }, 
    (error) => {
      console.log(error);
    }, 
    () => {
      storage.ref('images').child(image.name).getDownloadURL()
      .then(url => {
        console.log(url)
        this.setState({ url })
      })
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.url} alt='photoprofile'/>
        <br />
        <input type='file' onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload Profile Picture</button>
      </div>
    )
  }
}

export default ProfilePicture;
