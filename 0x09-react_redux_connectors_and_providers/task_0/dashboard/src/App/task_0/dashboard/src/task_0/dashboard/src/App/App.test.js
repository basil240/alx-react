import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the right object when passing state with isUserLoggedIn true', () => {
    // Mock the state with Immutable Map
    const state = {
      uiReducer: {
        isLoggedIn: true,
      },
    };

    // Call mapStateToProps with the mocked state
    const props = mapStateToProps(state);

    // Assert that the returned object has the correct structure
    expect(props).toEqual({
      isLoggedIn: true,
    });
  });
});