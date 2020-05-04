const initState = {
  posts: [
    { id: 1, title: 'First Post', content: 'blah blah blah' },
    { id: 2, title: 'Second Post', content: 'blah blah blah' },
    { id: 3, title: 'Third Post', content: 'blah blah blah' }
  ]};

const postReducers = (state = initState, action) => {
  return state;
}

export default postReducers;
