import {shallow} from 'enzyme'
import React from "react"
import {CreateQuestion} from "./"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<CreateQuestion/>', () => {

   it('should render without crashing', () => {
      shallow(<CreateQuestion/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><CreateQuestion/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
