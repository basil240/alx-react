export const filterTypeSelected = state => state.getIn(['filter']);

export const getNotifications = state => state.getIn(['notifications']);

export const getUnreadNotifications = state =>
  state
    .getIn(['notifications'])
    .filter(notification => !notification.get('isRead'))
    .toList();