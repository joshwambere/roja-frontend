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

export const registerSuccess = (authData) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      userId: authData._id,
      name: authData.name,
      role: authData.role,
    })
  );
  return {
    type: actionTypes.REGISTER_SUCCESS,
    authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const verifySuccess = () => {
  return {
    type: actionTypes.VERIFY_SUCCESS,
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
  };
};

export const authLogout = () => {
  AsyncStorage.removeItem('userData');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const register = (name, email, password, role_id) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      name,
      email,
      password,
      role_id,
    };
    axios
      .post('/auth/signup', authData)
      .then((response) => {
        dispatch(registerSuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const verify = (otp) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`/auth/verify`, {
        otp,
      })
      .then((response) => {
        dispatch(verifySuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      email,
      password,
    };
    axios
      .post('/auth/login', authData)
      .then((response) => {
        dispatch(loginSuccess(response.data));
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
