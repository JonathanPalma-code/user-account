import React, { Component } from 'react';
import Search from '../dasboard/Search';

import '../templates/Main.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  editSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { posts } = this.props;
    return (
      <section>
        <div className="form ml-5 mr-5 mb-5">
          <input className='form-control'
            type='text' id='search'
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            required />
          <label className='form-label' htmlFor='search'>
            <span className='content-name'>Search by subject</span>
          </label>
        </div>
        <Search posts={posts} searchTerm={this.state.searchTerm} />
      </section>
    )
  }
}

export default PostList;
