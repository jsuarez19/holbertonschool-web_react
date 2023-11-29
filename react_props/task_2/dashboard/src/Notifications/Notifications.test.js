import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const listItems = wrapper.find('NotificationItem');
    expect(listItems).toHaveLength(3);
  });

  it('renders first element', () => {
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('renders the text expected', () => {
    const text = wrapper.text();
    expect(text).toContain('Here is the list of notifications');
  });

});
