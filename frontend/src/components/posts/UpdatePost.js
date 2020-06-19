import React, { Component } from 'react'
import { updatePost } from '../../store/actions/updatePostActions';
import { connect } from 'react-redux';

import '../templates/Main.css';

class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.post.title,
      content: props.post.content,
      category: props.post.category
    }
  }

  updateFields = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick = (event) => {
    if (this.props.post.authorID === this.props.auth.uid) {
      event.preventDefault();
      if (this.state.title && this.state.content && this.state.category !== '') {
        this.props.updatePost(this.state, this.props.id);
        alert("Post updated with success.")
      } else {
        alert("All fields most be field.");
      }
    }
    else {
      alert("Create your own post.\nThere is no need to hack others people posts. =)");
    }
  }

  render() {
    return(
      <div className = "form container-fluid pb-3" >
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="form-group pt-2">
              <input className='form-control' type='text' value={this.state.title}
                id='title' onChange={this.updateFields} required/>
              <label className='form-label' htmlFor='title'>
                <span className='content-name'>Title</span>
              </label>
            </div>
            <div className="form-group pt-2">
              <select value={this.state.category} className='p-1' name="category" id="category" onChange={this.updateFields}>
                <option value="General">General</option>
                <option value="Prehistoric">Prehistoric</option>
                <option value="Ancient history">Ancient history</option>
                <option value="Middle ages">Middle ages</option>
                <option value="Modern ages">Modern ages</option>
                <option value="Contemporary Ages">Contemporary Ages</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="form-textarea">
              <textarea value={this.state.content} rows='8' className='textarea-input' style={{ resize: 'none' }}
                id='content' onChange={this.updateFields}/>
            </div>
          </div>
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
    updatePost: (post, id) => dispatch(updatePost(post, id)) // updatePost comes from the import
  }
}

export default connect(null, mapDispatchToProps)(UpdatePost);
