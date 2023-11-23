import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';

// Test Suite
describe('notificationReducer', () => {
  // Test 1
  it('should return the default state', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: [],
    });
  });

  // Test 2
  it('should handle FETCH_NOTIFICATIONS_SUCCESS action and set isRead to false for each notification', () => {
    const actionData = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available',
      },
    ];

    const action = { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: actionData };
    const newState = notificationReducer(undefined, action);

    expect(newState.notifications).toEqual(
      actionData.map(notification => ({
        ...notification,
        isRead: false,
      }))
    );
  });

  // Test 3
  it('should handle MARK_AS_READ action and update isRead for the specified notification', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    const action = { type: actionTypes.MARK_AS_READ, index: 2 };
    const newState = notificationReducer(initialState, action);

    expect(newState.notifications).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ]);
  });

  // Test 4
  it('should handle SET_TYPE_FILTER action and update the filter', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    const action = { type: actionTypes.SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(initialState, action);

    expect(newState.filter).toEqual('URGENT');
  });
});