import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const wrapper = shallow(<CourseList />);

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('listCourses without values', () => {
  let listCourses = undefined;
  beforeEach(() => {
    listCourses = [];
  });

  it('empty', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists());
    const row = wrapper.find('CourseListRow');
    expect(row).toHaveLength(3);
  })

  it('not pass listCourses', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  })

});

describe('listCourses with values', () => {
  let listCourses = undefined;
  beforeEach(() => {
    listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  });

  it('rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const row = wrapper.find('CourseListRow');
    expect(row).toHaveLength(5);
  });
});