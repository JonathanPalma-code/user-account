export const createReport = (report) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const profile = getState().firebase.profile;

    const authorID = getState().firebase.auth.uid;

    firestore.collection('reports').add(
      {
        ...report,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      }
    ).then(() => {
      dispatch (
        {
          type: 'CREATE_REPORT',
          report
        }
      )
    }).catch((err) => {
      dispatch (
        {
          type: 'CREATE_REPORT_ERROR',
          err
        }
      )
    });
  }
}