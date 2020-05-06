export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    const firestore = getFirestore();

    firestore.collection('posts').add(
      {
        ...post, // grab the title and the content
        authorFirstName: 'Joao',
        authorLastName: 'Viegas',
        createdAt: new Date()
      }
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
