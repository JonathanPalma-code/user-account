export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    dispatch({ type: 'CREATE_POST', post });
  }
};
