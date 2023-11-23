import * as actionTypes from '../actions/notificationActionTypes';

// Default State
const defaultState = {
  filter: 'DEFAULT',
  notifications: [],
};

// Reducer Function
const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const notifications = action.data.map(notification => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications,
      };

    case actionTypes.MARK_AS_READ:
      const updatedNotifications = state.notifications.map(notification =>
        notification.id === action.index ? { ...notification, isRead: true } : notification
      );
      return {
        ...state,
        notifications: updatedNotifications,
      };

    case actionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    // Default case
    default:
      return state;
  }
};

export default notificationReducer;