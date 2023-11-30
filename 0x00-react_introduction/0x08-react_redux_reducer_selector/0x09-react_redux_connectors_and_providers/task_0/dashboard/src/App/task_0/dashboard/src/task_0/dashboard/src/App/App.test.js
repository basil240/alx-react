// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './path-to-your-App-component'; 

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = {
      uiReducer: {
        isUserLoggedIn: true,
      },
    };

    const result = mapStateToProps(state);
    const expectedResult = {
      isLoggedIn: true,
    };

    expect(result).toEqual(expectedResult);
  });
});
