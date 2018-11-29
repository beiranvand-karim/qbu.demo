import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import {mount} from "enzyme";
import Home from "./containers/Home";
import renderer from "react-test-renderer";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should navigate to /', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});

it('should navigate to /home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/home' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});

it('should matches the snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot()
});
