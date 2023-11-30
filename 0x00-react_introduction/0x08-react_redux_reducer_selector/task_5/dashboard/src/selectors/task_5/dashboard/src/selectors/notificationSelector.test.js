mport { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

// Test Suite
describe('Notification Selectors', () => {
  // Test 1
  it('should return the selected filter type', () => {
    const state = fromJS({
      filter: 'URGENT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    const result = filterTypeSelected(state);
    expect(result).toEqual('URGENT');
  });

  // Test 2
  it('should return the list of notifications', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    const result = getNotifications(state);
    const expected = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(result).toEqual(expected);
  });

  // Test 3
  it('should return the list of unread notifications', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      },
    });

    const result = getUnreadNotifications(state);
    const expected = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(result).toEqual(expected);
  });
});