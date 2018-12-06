import {shallow} from 'enzyme'
import React from "react"
import Index from "./index";
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom";

it ('should render without crashing', () => {
  shallow(<Index/>)
});

it('should matches the snapshot', () => {
  const tree = renderer.create(<MemoryRouter><Index /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot()
});
