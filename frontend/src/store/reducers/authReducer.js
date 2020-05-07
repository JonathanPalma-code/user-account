const initState = {
  authError: null
};

const authReducers = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('Login error.')
      return {
        ...state,
        authError: 'Login failed.'
      };
    case 'LOGIN_SUCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.log('Logout success');
      return state;
    default:
      return state;
  }
}

export default authReducers;
