/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {AnswerSaved} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<AnswerSaved />', () => {
   it('should render without crashing', () => {
      shallow(<AnswerSaved/>)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><AnswerSaved/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});