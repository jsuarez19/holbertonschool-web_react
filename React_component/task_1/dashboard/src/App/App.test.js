import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList is not displayed', () => {
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });
});

describe('LogOut', () => {
  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
});