import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

// Test Suite
describe('uiReducer', () => {
  // Test 1
  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test 2
  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test 3
  it('should correctly change isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(undefined, { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.isNotificationDrawerVisible).toEqual(true);
  });
});