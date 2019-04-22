import { configure, mount, render, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

// Set up Enzyme
configure({ adapter: new Adapter() });

// Add code to execute before tests are run
global.shallow = shallow;
global.render = render;
global.mount = mount;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
