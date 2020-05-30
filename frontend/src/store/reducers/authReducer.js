const initState = {
  authError: null,
  authError2: null
};

const authReducers = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('Login error.')
      return {
        ...state,
        authError2: 'Login failed.'
      };
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError2: null
      };
    case 'LOGOUT_SUCCESS':
      console.log('Logout success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('Sign up success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('Sign up error');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducers;
