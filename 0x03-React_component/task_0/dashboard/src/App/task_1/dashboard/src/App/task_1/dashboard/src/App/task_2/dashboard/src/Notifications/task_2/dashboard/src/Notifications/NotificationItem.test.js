import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('calling markAsRead logs to the console', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const notifications = [
  ];
  const { container } = render(<Notifications notifications={notifications} />);
  
  
  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  consoleSpy.mockRestore();
});