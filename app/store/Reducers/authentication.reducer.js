import {userConstants} from '../Constants';

const initialState = {
  loggedIn: false,
  user: {},
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.SIGNUP_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.SIGNUP_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
