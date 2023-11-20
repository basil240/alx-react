import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('markAsRead action creator', () => {
  test('returns correct action for markAsRead', () => {
    const index = 1;
    const action = markAsRead(index);
    expect(action).toEqual({ type: MARK_AS_READ, index });
  });
});

describe('setNotificationFilter action creator', () => {
  test('returns correct action for setNotificationFilter', () => {
    const filter = 'DEFAULT';
    const action = setNotificationFilter(filter);
    expect(action).toEqual({ type: SET_TYPE_FILTER, filter });
  });
});