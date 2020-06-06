import React from 'react'

import '../templates/Main.css';

const UpdatePost = (post) => {
  return (
    <div className="form container-fluid pb-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <input className='form-control' type='text' value={post.post.title}
              id='title' />
            <label className='form-label' htmlFor='title'>
              <span className='content-name'>Title</span>
            </label>
          </div>
          <div className="form-group pt-2">
            <select value={post.post.category} className='p-1' name="category" id="category">
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
            <textarea value={post.post.content} rows='8' className='textarea-input' style={{ resize: 'none' }}
              id='content' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost;
