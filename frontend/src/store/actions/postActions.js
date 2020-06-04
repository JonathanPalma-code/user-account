export const createPost = (post) => {
  // returns a function using thunk to do that
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    // use getFirestore to grab all data from post 
    const firestore = getFirestore();

    // grabs the data from profile based in firebase
    const profile = getState().firebase.profile;

    const authorID = getState().firebase.auth.uid;

    // add the data into the post collection (Cloud FireStore)
    firestore.collection('posts').add(
      {
        ...post, // grab the title and the content
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      } 
      // as it is a async call, attach 
      //.then to fires a dispatch when async is complete.
    ).then(() => {
      dispatch (
        { 
          type: 'CREATE_POST', 
          post 
        }
      )
    }).catch((err) => {
      dispatch (
        {
          type: 'CREATE_POST_ERROR',
          err
        }
      )
    });
  }
};
