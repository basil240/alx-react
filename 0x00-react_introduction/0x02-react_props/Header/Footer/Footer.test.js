import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('contains the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});