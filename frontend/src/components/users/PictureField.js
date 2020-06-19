import React, { Component } from 'react'
import PicturePreview from './PicturePreview';

import { storage } from '../../config/fbConfig';

class PictureField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
      pictureURL: props.pictureURL,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(event) {
    if (event.target.files[0]) {
      const picture = event.target.files[0];
      this.setState({
        picture: picture
      })
    }
  }

  handleUpload() {
    const { picture } = this.state;
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
            console.log(url);
            this.setState({
              pictureUrl: url
            });
          })
        })
      }
      
      render() {
        const { pictureUrl } = this.state;
        console.log(pictureUrl)
        return (
          <div className='container'>        
        <input 
          type='file' 
          onChange={this.handleChange}
          />
        <button onClick={this.handleUpload}>Upload Profile Picture</button>
        <PicturePreview pictureUrl={this.state.pictureUrl} />
      </div>
    )
  }
}

export default PictureField;
