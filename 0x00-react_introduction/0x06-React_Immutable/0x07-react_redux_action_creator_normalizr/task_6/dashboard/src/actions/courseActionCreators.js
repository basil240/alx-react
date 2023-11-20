export function selectCourse(index) {
    return {
      type: SELECT_COURSE,
      index,
    };
  }
  
  export function unSelectCourse(index) {
    return {
      type: UNSELECT_COURSE,
      index,
    };
  }
  
  // notificationActionCreators.js
  export function markAsRead(index) {
    return {
      type: MARK_AS_READ,
      index,
    };
  }
  
  export function setNotificationFilter(filter) {
    return {
      type: SET_TYPE_FILTER,
      filter,
    };
  }
  
  // uiActionCreators.js
  export function login(email, password) {
    return {
      type: LOGIN,
      user: { email, password },
    };
  }
  
  export function logout() {
    return {
      type: LOGOUT,
    };
  }
  
  export function displayNotificationDrawer() {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  }
  
  export function hideNotificationDrawer() {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  }