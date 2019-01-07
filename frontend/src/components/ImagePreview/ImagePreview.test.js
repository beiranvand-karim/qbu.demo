/* global describe, it, expect */
import React from "react"
import ImagePreview from "./"
import {shallow} from "enzyme"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<ImagePreview />', () => {
   it('should renderer without crashing', () => {
      shallow(<ImagePreview />)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><ImagePreview /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});