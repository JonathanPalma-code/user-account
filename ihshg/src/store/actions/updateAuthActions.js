export const updateUser = (profile) => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    const authorID = getState().firebase.auth.uid;

    firestore.collection('users').doc(authorID).update({
      ...profile,
      createdAt: new Date()
    }).then(() => {
      dispatch(
        {
          type: 'UPDATE_USER',
          ...profile
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
