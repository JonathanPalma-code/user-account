const initState = {}

const reportReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_REPORT':
      console.log('Create report', action.report);
      return state;
    case 'CREATE_REPORT_ERR':
      console.log('Created report error', action.err);
      return state;
    default:
      return state;
  }
}

export default reportReducer;