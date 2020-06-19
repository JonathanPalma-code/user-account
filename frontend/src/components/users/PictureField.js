import React, { Component } from 'react'
import PicturePreview from './PicturePreview';

class PictureField extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      picture: null,
      pictureUrl: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ 
        picture: file,
        pictureUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleUpload() {
    this.props.signUp(this.state.pictureUrl);
  } 

  render() {
    const { auth, profile } = this.props
    console.log(auth, profile)
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
