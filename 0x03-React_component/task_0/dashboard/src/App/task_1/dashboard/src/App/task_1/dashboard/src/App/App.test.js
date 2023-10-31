import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('calling logOut function and alert when pressing ctrl+h', () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, 'alert');
  act(() => {
    render(<App logOut={logOutMock} />, container);
  });

  const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
  act(() => {
    document.dispatchEvent(event);
  });

  expect(logOutMock).toHaveBeenCalled();
  expect(alertMock).toHaveBeenCalledWith('Logging you out');

  act(() => {
    unmountComponentAtNode(container);
  });
});