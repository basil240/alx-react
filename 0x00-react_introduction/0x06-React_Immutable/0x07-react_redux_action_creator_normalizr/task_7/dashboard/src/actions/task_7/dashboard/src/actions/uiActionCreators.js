import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login()); // Assuming you already have a login action creator

    try {
      const response = await fetch('/login-success.json');
      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}