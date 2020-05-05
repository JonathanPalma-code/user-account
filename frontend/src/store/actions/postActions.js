export const createPost = (post) => {
  return (dispatch, getState) => {
    // make async call to DB
    dispatch({ type: 'CREATE_POST', post });
  }
};
