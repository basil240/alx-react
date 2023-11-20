import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest async action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('dispatches LOGIN and LOGIN_SUCCESS on successful API call', async () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: {} });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('user@example.com', 'password'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('dispatches LOGIN and LOGIN_FAILURE on failed API call', async () => {
    fetchMock.getOnce('/login-success.json', { status: 500 });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('user@example.com', 'password'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});