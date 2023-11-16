import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  let consoleLog;
  let wrapper;

  beforeAll(() => {
    consoleLog = console.log;
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = consoleLog;
  });

  it('should call console.log on mount and unmount for pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p />);
    wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith('Component is mounted on componentDidMount()');
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('should call console.log on mount and unmount for Login component', () => {
    const Login = () => <div>Login Component</div>;
    const WrappedComponent = WithLogging(Login);

    wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});