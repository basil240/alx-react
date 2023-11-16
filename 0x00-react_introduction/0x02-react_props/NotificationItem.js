import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
};

export default NotificationItem;

it('renders the correct HTML in the first NotificationItem', () => {
    const notifications = [
      {
        id: 1,
        type: 'default',
        html: { __html: '<u>test</u>' },
        value: 'test',
      },
      // Add more notifications as needed
    ];
  
    const wrapper = shallow(<Notifications notifications={notifications} />);
    const firstNotification = wrapper.find(NotificationItem).first();
    expect(firstNotification.prop('dangerouslySetInnerHTML')).toEqual({
      __html: '<u>test</u>',
    });
  });