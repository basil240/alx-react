import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

it('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('li');
  expect(listItems.length).toBe(3);
});

it('Notifications renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications />);
  const text = wrapper.text();
  expect(text).toContain('Here is the list of notifications');
});