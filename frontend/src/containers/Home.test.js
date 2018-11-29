import {shallow} from 'enzyme'
import React from "react"
import Home from "./Home";
import renderer from "react-test-renderer";


it ('should render without crashing', () => {
  shallow(<Home/>)
});

it('should matches the snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot()
});
