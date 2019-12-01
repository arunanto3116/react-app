let initialState = {
  users: [],
  isLoggedIn: false,
  loginError: false,
  showDialog: false,
  isLoading: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_DATA_LOADING':
        return {
          ...state,
          isLoading: action.status,
        };
    case 'SHOW_DIALOG':
        return {
            ...state,
            showDialog: action.status,
        };
    case 'SET_USER_DATA':
        return {
          ...state,
          users: [...action.data],
        };
    case 'ADD_USER_DATA':
        return {
          ...state,
          users: [action.user, ...state.users],
        };
    case 'SET_LOGIN':
        return {
            ...state,
            isLoggedIn: action.status,
        };
    case 'SET_LOGIN_ERROR':
        return {
            ...state,
            loginError: action.status,
        };
    default:
        return { ...state };
  }
}
