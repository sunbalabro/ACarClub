import {userConstants} from '../Constants';
import {userService} from '../Services';

export const userActions = {
  login,
  signup,
  logout,
};

function login(email, password, history) {
  return dispatch => {
    dispatch(request({email}));
    console.log({email, password});
    userService.login(email, password).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };

  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}

function signup(data, history) {
  return dispatch => {
    dispatch(request({email: data.email}));
    userService.signup(data).then(
      user => {
        dispatch(success(user));
        history.push('/user/home');
      },
      error => {
        dispatch(failure(error));
      },
    );
  };

  function request(user) {
    return {type: userConstants.SIGNUP_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.SIGNUP_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.SIGNUP_FAILURE, error};
  }
}

function logout(history1) {
  userService.logout(history1);
  return {type: userConstants.LOGOUT};
}
