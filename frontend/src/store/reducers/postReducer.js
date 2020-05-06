const initState = {
  posts: [
    { id: 1, title: 'First Post', content: 'blah blah blah' },
    { id: 2, title: 'Second Post', content: 'blah blah blah' },
    { id: 3, title: 'Third Post', content: 'blah blah blah' }
  ]};

const postReducers = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('Created post', action.post);
      return state;
    case 'CREATE_POST_ERR':
      console.log('Created post error', action.err);
      return state;
    default:
      return state;
  }
}

export default postReducers;
