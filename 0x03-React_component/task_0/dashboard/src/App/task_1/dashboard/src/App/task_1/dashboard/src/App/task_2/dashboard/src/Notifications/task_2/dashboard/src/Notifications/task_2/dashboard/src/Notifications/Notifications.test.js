import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('clicking on NotificationItem calls markAsRead with the right ID argument', () => {
  const markAsReadSpy = jest.fn();
  const notification = {
    id: 1,
  };
  const { container } = render(
    <NotificationItem notification={notification} markAsRead={markAsReadSpy} />
  );
  
  const listItem = container.querySelector('li');
  fireEvent.click(listItem);

  expect(markAsReadSpy).toHaveBeenCalledWith(1);
});