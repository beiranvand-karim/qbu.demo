/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {QuestionDetailOptionImage} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<QuestionDetailOptionImage />', () => {
   it('should render without crashing', () => {
      shallow(<QuestionDetailOptionImage/>)
   });
   it('should matches the snapshot', function () {
      const tree = renderer.create(<MemoryRouter><QuestionDetailOptionImage/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});