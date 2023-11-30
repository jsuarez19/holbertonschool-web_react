import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    expect(wrapper.text()).toContain('Copyright');
  });
});
