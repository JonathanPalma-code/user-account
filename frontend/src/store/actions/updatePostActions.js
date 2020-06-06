export const updatePost = (post, id) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    const profile = getState().firebase.profile;

    const authorID = getState().firebase.auth.uid;

    firestore.collection('posts').doc(id).update({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorID,
      createdAt: new Date()
    }).then(() => {
      dispatch(
        {
          type: 'UPDATE_POST',
          post
        }
      )
    }).catch((err) => {
      dispatch(
        {
          type: 'UPDATE_POST_ERROR',
          err
        }
      )
    });
  }
}
