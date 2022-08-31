import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';

const initialReducer = {
  verified: false,
  token: null,
  userId: null,
  name: null,
  role: null,
  error: null,
  loading: false,
  recoverPasswordLoading: false,
  recoverPasswordSuccessMessage: null,
  recoverPasswordError: null,
  resetPasswordLoading: false,
  resetPasswordSuccessMessage: null,
  resetPasswordError: null,
};

const initAuth = (state, action) => {
  return updateObject(state, {
    verified: false,
    token: null,
    userId: null,
    name: null,
    role: null,
    error: null,
    loading: false,
    recoverPasswordLoading: false,
    recoverPasswordSuccessMessage: null,
    recoverPasswordError: null,
    resetPasswordLoading: false,
    resetPasswordSuccessMessage: null,
    resetPasswordError: null,
  });
};

const authStart = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    name: null,
    role: null,
    error: null,
    loading: true,
  });
};

const registerSuccess = (state, action) => {
  return updateObject(state, {
    userId: action.authData.id,
    name: action.authData.name,
    email: action.authData.email,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
    name: null,
    role: null,
    error: action.error,
    loading: false,
  });
};

const verifySuccess = (state, action) => {
  return updateObject(state, {
    verified: true,
    error: null,
    loading: false,
  });
};
const loginSuccess = (state, action) => {
  return updateObject(state, {
    verified: true,
    error: null,
    role: action.role,
    token: action.token,
    userId: action.userId,
    loading: false
  });
};

const resetPasswordStart = (state, action) => {
  return updateObject(state, {
    resetPasswordLoading: true,
    resetPasswordSuccessMessage: null,
    resetPasswordError: null,
  });
};

const resetPasswordSuccess = (state, action) => {
  return updateObject(state, {
    resetPasswordLoading: false,
    resetPasswordSuccessMessage: action.payload,
    resetPasswordError: null,
  });
};

const resetPasswordFail = (state, action) => {
  return updateObject(state, {
    resetPasswordLoading: false,
    resetPasswordSuccessMessage: null,
    resetPasswordError: action.error,
  });
};

const recoverPasswordStart = (state, action) => {
  return updateObject(state, {
    recoverPasswordLoading: true,
    recoverPasswordSuccessMessage: null,
    recoverPasswordError: null,
  });
};

const recoverPasswordSuccess = (state, action) => {
  return updateObject(state, {
    recoverPasswordLoading: false,
    recoverPasswordSuccessMessage: action.payload,
    recoverPasswordError: null,
  });
};

const recoverPasswordFail = (state, action) => {
  return updateObject(state, {
    recoverPasswordLoading: false,
    recoverPasswordSuccessMessage: null,
    recoverPasswordError: action.error,
  });
};

const reducer = (state = initialReducer, action) => {
  switch (action.type) {
    case actionsTypes.INIT_AUTH:
      return initAuth(state, action);
    case actionsTypes.AUTH_START:
      return authStart(state, action);
    case actionsTypes.REGISTER_SUCCESS:
      return registerSuccess(state, action);
    case actionsTypes.VERIFY_SUCCESS:
      return verifySuccess(state, action);
    case actionsTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionsTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionsTypes.AUTH_LOGOUT:
      return initAuth(state, action);
    case actionsTypes.RESET_PASSWORD_START:
      return resetPasswordStart(state, action);
    case actionsTypes.RESET_PASSWORD_SUCCESS:
      return resetPasswordSuccess(state, action);
    case actionsTypes.RESET_PASSWORD_FAIL:
      return resetPasswordFail(state, action);
    case actionsTypes.RECOVER_PASSWORD_START:
      return recoverPasswordStart(state, action);
    case actionsTypes.RECOVER_PASSWORD_SUCCESS:
      return recoverPasswordSuccess(state, action);
    case actionsTypes.RECOVER_PASSWORD_FAIL:
      return recoverPasswordFail(state, action);
    default:
      return state;
  }
};

export default reducer;
