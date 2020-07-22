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
        <input type='text'
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder='Search by Categories' />
        <Search posts={posts} searchTerm={this.state.searchTerm} />
      </section>
    )
  }
}

export default PostList;
