import axios from '../../axios-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionTypes from './actionTypes';

export const initAuthReduxValues = () => {
  return {
    type: actionTypes.INIT_AUTH,
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: authData.token,
      userId: authData._id,
      name: authData.name,
      role: authData.role,
    })
  );
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: authData.token,
    pushToken: authData.pushToken,
    userId: authData._id,
    name: authData.name,
    role: authData.role,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error.error,
  };
};
export const authLogout = () => {
  AsyncStorage.removeItem('userData');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
export const auth = (name = '', email, password, role_id = '', isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      name,
      email,
      password,
      role_id,
    };
    let url = '/auth/signup';
    if (!isSignup) {
      authData = {
        email,
        password,
      };
      url = '/auth/login';
    }
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data.results));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const initAuth = () => {
  return (dispatch) => {
    dispatch(initAuthReduxValues());
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(authLogout());
  };
};

export const resetPasswordStart = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

export const resetPasswordSuccess = (resetPasswordData) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload: resetPasswordData,
  };
};

export const resetPasswordFail = (error) => {
  return {
    type: actionTypes.RESET_PASSWORD_FAIL,
    error: error.error,
  };
};
export const resetPassword = (password, confirmPassword, token) => {
  return (dispatch) => {
    dispatch(resetPasswordStart());
    axios
      .post(
        '/api/auth/reset',
        {
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
        dispatch(resetPasswordSuccess(response.data.message));
      })
      .catch((err) => {
        dispatch(resetPasswordFail(err.response.data));
      });
  };
};

export const recoverPasswordStart = () => {
  return {
    type: actionTypes.RECOVER_PASSWORD_START,
  };
};

export const recoverPasswordSuccess = (recoverPasswordData) => {
  return {
    type: actionTypes.RECOVER_PASSWORD_SUCCESS,
    payload: recoverPasswordData,
  };
};

export const recoverPasswordFail = (error) => {
  return {
    type: actionTypes.RECOVER_PASSWORD_FAIL,
    error: error.error,
  };
};
export const recoverPassword = (email) => {
  return (dispatch) => {
    dispatch(recoverPasswordStart());
    axios
      .post('/api/auth/recover', {
        email: email,
      })
      .then((response) => {
        dispatch(recoverPasswordSuccess(response.data.message));
      })
      .catch((err) => {
        dispatch(recoverPasswordFail(err.response.data));
      });
  };
};
