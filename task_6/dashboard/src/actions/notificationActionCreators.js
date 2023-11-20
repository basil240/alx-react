import { bindActionCreators } from 'redux';
import store from './yourReduxStore'; // Replace with the actual import

// Import your action creators
import {
  selectCourse,
  unSelectCourse,
  markAsRead,
  setNotificationFilter,
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './path-to-your-action-creators';

// Bind action creators to the dispatch function
export const boundSelectCourse = bindActionCreators({ selectCourse }, store.dispatch);
export const boundUnSelectCourse = bindActionCreators({ unSelectCourse }, store.dispatch);

export const boundMarkAsRead = bindActionCreators({ markAsRead }, store.dispatch);
export const boundSetNotificationFilter = bindActionCreators({ setNotificationFilter }, store.dispatch);

export const boundLogin = bindActionCreators({ login }, store.dispatch);
export const boundLogout = bindActionCreators({ logout }, store.dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(
  { displayNotificationDrawer },
  store.dispatch
);
export const boundHideNotificationDrawer = bindActionCreators({ hideNotificationDrawer }, store.dispatch);