const initState = {}

const postReducers = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log('Created post', action.post);
      return state;
    case 'CREATE_POST_ERR':
      console.log('Created post error', action.err);
      return state;
    case 'UPDATE_POST':
      console.log('Updated post', action.post);
      return state;
    case 'UPDATE_POST_ERR':
      console.log('Updated post error', action.err);
      return state;
    case 'DELETE_POST':
      console.log('Deleted post');
      return state;
    case 'DELETE_POST_ERR':
      console.log("Deleted post error", action.err);
      return state;
    default:
      return state;
  }
}

export default postReducers;
