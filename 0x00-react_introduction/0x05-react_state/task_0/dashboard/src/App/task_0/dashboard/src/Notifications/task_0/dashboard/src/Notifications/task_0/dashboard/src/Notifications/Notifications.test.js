import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call handleDisplayDrawer on Your notifications button click', () => {
    const handleDisplayDrawer = jest.fn();
    const component = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    component.find('button').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer on close button click', () => {
    const handleHideDrawer = jest.fn();
    const component = shallow(<Notifications handleHideDrawer={handleHideDrawer} displayDrawer={true} />);
    component.find('button').at(1).simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});