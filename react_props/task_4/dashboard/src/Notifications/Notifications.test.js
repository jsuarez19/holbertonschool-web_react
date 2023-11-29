import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('menuItem with displayDrawer false', () => {
    const menuItem = wrapper.find('div.menuItem');
    expect(menuItem).toHaveLength(1);
  });

  it('not div.Notifications with displayDrawer false', () => {
    const divNotifications = wrapper.find('div.Notifications');
    expect(divNotifications).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const menuItem = wrapper.find('div.menuItem');
    expect(menuItem).toHaveLength(1);
  });

  it('not div.Notifications with displayDrawer false', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const divNotifications = wrapper.find('div.Notifications');
    expect(divNotifications).toHaveLength(1);
  });
});
