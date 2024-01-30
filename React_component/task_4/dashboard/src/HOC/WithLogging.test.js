import React from "react";
import { mount, shallow } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

// JSDOM config
const { JSDOM } = require('jsdom');
const { window } = new JSDOM();

global.window = window;
global.document = window.document;

describe('WithLogging HOC', () => {
  it('log messages on mount and unmount for pure HTML', () => {
    const spy = jest.spyOn(console, 'log');
    const WithLoggingComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WithLoggingComponent />);

    expect(spy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
    spy.mockRestore();
  });

  it('log messages on mount and unmount for Login component', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = WithLogging(Login);
    const wrapper = shallow(<Component />);

    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
    spy.mockRestore();
  });
});