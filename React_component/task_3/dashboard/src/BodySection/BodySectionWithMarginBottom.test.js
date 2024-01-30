import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from "./BodySection";


describe('<BodySectionWithMarginBottom />', () => {
  it('renders without crashing with correct props', () => {
    const wrapper = shallow(
    <BodySectionWithMarginBottom title='test title'>
      <p>test children node</p>
    </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
    
    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);

    expect(bodySection.prop('title')).toEqual('test title');

    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});