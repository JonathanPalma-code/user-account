import React, { useEffect} from 'react';
import firebase from 'firebase/app';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui'

const SignInWith = () => {

  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: () => false
      },
      signInflow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
    }
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  return (
    <section>
      <div id="firebaseui-auth-container"></div>
    </section>
  )
}

export default SignInWith;