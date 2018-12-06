import {shallow} from 'enzyme'
import React from "react"
import Home from "./"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<Home>', () => {

   it('should render without crashing', () => {
      shallow(<Home/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Home/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
