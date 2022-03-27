import AsyncStorage from '@react-native-community/async-storage';
import {instance} from '../../utils/axiosConfig';

export const userService = {
  login,
  signup,
  logout,
};

function login(email, password, dispatch) {
  const requestBody = {
    email,
    password,
  };
  return instance
    .post('/auth/login', requestBody)
    .then(response => {
      console.log({response});
      if (response.data.success) {
        return response.data.user;
      } else {
        return Promise.reject(response.data);
      }
    })
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(err => {
      if (err) {
        return Promise.reject(err);
      }
    });
}

function signup(data) {
  return instance
    .post('/auth/signup', data)
    .then(response => {
      if (response.data.success) {
        return response.data.user;
      } else {
        return Promise.reject(response.data);
      }
    })
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(err => {
      if (err) {
        return Promise.reject(err);
      }
    });
}

function logout(history) {
  // remove user from local storage to log user out
  AsyncStorage.removeItem('user');
  history.push('/user/login');
}
