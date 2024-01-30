import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const wrapper = shallow(<Notifications />);

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper).toHaveLength(1);
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
    expect(nItem).toHaveLength(0);
  });

  it('without listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(0);
  });
});

describe('listNotifications with values', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;

  it('Pass a list of notifications', () => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const notificationItem = wrapper.find('NotificationItem');
    expect(notificationItem).toBeDefined();
  });
});

describe('Pure components', () => {
  it('Does not rerender when props are updated with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1'},
      { id: 2, type: 'urgent', value: 'Notification 2'},
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    // Set initial render count
    const initialRenderCount = wrapper.instance().renderCount;

    // Update props with the same list
    wrapper.setProps({ listNotifications });

    // Assert that the component does not rerender
    expect(wrapper.instance().renderCount).toBe(initialRenderCount);
  });

  it('Rerenders only with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    const longerListNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />)
   
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );
  
    // Update props with a longer list
    wrapper.setProps({ listNotifications: longerListNotifications });

    // Assert that the component rerenders
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    jest.restoreAllMocks();
  });
});
