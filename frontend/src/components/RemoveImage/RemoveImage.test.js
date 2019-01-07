/* global describe, it, expect */
import React from "react"
import RemoveImage from "./"
import {shallow} from "enzyme"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<RemoveImage />', () => {

   it('should renderer without crashing', () => {
      shallow(<RemoveImage />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><RemoveImage /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});