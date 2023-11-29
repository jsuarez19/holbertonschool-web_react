import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationsItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders with html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    expect(li.html()).toEqual('<li><u>test</u></li>');
  });
});
