import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

describe('<Header />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1 tag', () => {
    expect(wrapper.find('header.App-header img').exists()).toBe(true);
    expect(wrapper.find('header.App-header h1').exists()).toBe(true);
  });
  
});
