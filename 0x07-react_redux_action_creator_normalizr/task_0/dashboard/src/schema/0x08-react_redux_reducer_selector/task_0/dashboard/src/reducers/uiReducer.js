// reducers/uiReducer.js
import * as uiActionTypes from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case uiActionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case uiActionTypes.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case uiActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case uiActionTypes.LOGIN_FAILURE:
    case uiActionTypes.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
}