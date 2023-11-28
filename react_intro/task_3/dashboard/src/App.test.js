import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });
  
  it('renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });

});
