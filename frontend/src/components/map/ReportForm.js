import React, { Component, Fragment } from 'react';
import '../templates/Main.css';

class ReportForm extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    type: ''
  }

  updateFields = (event) => {
    // grabs the id from one of the fields
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        {<div className='form'>
          <div className="form-group col-12 d-inline-block pt-3 pl-0">
            <input className='form-control' type='text' id='title' autoComplete='off' onChange={this.updateFields} required />
            <label className='form-label' htmlFor='title'>
              <span className='content-name'>Title</span>
            </label>
          </div>
          <div className="form-group col-12 d-inline-block pt-3 pl-0">
            <div className="form-textarea">
              <textarea placeholder='Describe what you have discovered...' rows='8' className='textarea-input' style={{ resize: 'none' }}
                id='description' onChange={this.updateFields} required />
            </div>
          </div>
          <div className="form-group col-6 d-inline-block pt-3 pl-0">
            <input className='form-control' type='text' id='location' autoComplete='off' onChange={this.updateFields} required />
            <label className='form-label' htmlFor='location'>
              <span className='content-name'>Location</span>
            </label>
          </div>
          <div className="form-group col-6 d-inline-block pt-3 pl-0">
            <label className='pt-1 pr-1' htmlFor="type">Type:</label>
            <select defaultValue='Monument' className='p-1' name="type" id="type" onChange={this.updateFields} required>
              <option value="Monument">Monument</option>
              <option value="Site">Site</option>
              <option value="Building">Building</option>
              <option value="Object">Object</option>
              <option value="Archeological site">Archeological site</option>
            </select>
          </div>
        </div>}
      </Fragment>
    )
  }
}

export default ReportForm;