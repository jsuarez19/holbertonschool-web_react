import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const wrapper = shallow(<CourseList />);

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const row = wrapper.find('CourseListRow');
    expect(row).toHaveLength(5);
  });
});
