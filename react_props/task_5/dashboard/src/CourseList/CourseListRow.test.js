import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
// When isHeader is true
  // When textSecondCell does not exist
  it('renders one cell when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    wrapper.update();
    const th = wrapper.find('th');

    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });

  // When textSecondCell is present
  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test2' />
    );
    wrapper.update();
    const th = wrapper.find('th');

    expect(th).toHaveLength(2);
  });

// When isHeader is false
  it('renders two td within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test2' />
    );
    wrapper.update();
    const tr = wrapper.find('tr');
    const td = wrapper.find('td');

    expect(tr).toHaveLength(1);
    expect(td).toHaveLength(2);
  });

});
