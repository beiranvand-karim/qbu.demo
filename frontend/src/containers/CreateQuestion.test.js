import {shallow} from 'enzyme'
import React from "react"
import CreateQuestion from "./CreateQuestion";
import renderer from 'react-test-renderer'

it ('should render without crashing', () => {
  shallow(<CreateQuestion/>)
});

it('should matches the snapshot', () => {
  const tree = renderer.create(<CreateQuestion />).toJSON();
  expect(tree).toMatchSnapshot()
});
