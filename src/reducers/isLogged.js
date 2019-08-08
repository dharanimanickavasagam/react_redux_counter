const loggedInReducer = (state = true, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return 'You are logged in';
    default:
      return 'You are not logged in';
  }
};

export default loggedInReducer;
