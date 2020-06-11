export const deletePost = (id) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    firestore.collection('posts').doc(id).delete()
    .then(() => {
      dispatch(
        {
          type: 'DELETE_POST',
        }
      )
    }).catch((err) => {
      dispatch(
        {
          type: 'DELETE_POST_ERROR',
          err
        }
      )
    });
  }
}
