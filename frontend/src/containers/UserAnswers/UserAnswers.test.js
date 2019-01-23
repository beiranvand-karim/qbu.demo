/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {UserAnswers} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<UserAnswers />', () => {
   it('should render without crashing', () => {
      shallow(<UserAnswers/>)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><UserAnswers/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});