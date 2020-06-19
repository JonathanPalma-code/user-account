export const updatePost = (email, profile, pictureURL) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    const authorID = getState().firebase.auth.uid;

    firestore.collection('users').doc(authorID).update({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: email,
      pictureURL: pictureURL,
      createdAt: new Date()
    }).then(() => {
      dispatch(
        {
          type: 'UPDATE_USER',
          email, profile, pictureURL
        }
      )
    }).catch((err) => {
      dispatch(
        {
          type: 'UPDATE_USER_ERROR',
          err
        }
      )
    });
  }
}
