import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const wrapper = shallow(<Notifications />);

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.first().html()).not.toEqual(
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

describe('listNotifications without values', () => {
  let listNotifications = undefined;
  beforeEach(() => {
    listNotifications = [];
  });

  it('empty array', () => {
    // Renders correctly
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    // The message Here is the list of notifications is not displayed,
    // but No new notification for now is
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it('without listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});

describe('listNotifications with values', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('Pass a list of notifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const notificationItem = wrapper.find('NotificationItem');
    expect(notificationItem).toBeDefined();
    expect(notificationItem).toHaveLength(3);
  });
});
