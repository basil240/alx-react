import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

it('renders without crashing', () => {
  shallow(<NotificationItem />);
});

it('renders correct type and value', () => {
  const wrapper = shallow(
    <NotificationItem type="default" value="test" />
  );
  expect(wrapper.prop('data-notification-type')).toEqual('default');
  expect(wrapper.text()).toEqual('test');
});

it('renders correct HTML', () => {
  const wrapper = shallow(
    <NotificationItem html={{ __html: '<u>test</u>' }} />
  );
  expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual({
    __html: '<u>test</u>',
  });
});

{notifications.map((notification) => (
    <NotificationItem
      key={notification.id}
      type={notification.type}
      html={{ __html: notification.html }}
      value={notification.value}
    />
  ))}

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications notifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });