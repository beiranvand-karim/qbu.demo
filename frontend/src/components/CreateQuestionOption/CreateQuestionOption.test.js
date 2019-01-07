/* global describe, it, jest, expect*/
import {shallow, mount} from "enzyme"
import {CreateQuestionOption} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"


describe('<CreateQuestionOption />', () => {

   it('should render without crashing', () => {
      shallow(<CreateQuestionOption/>)
   });

   // todo write unit test fot testing image upload

   it('should matches the snapshot', function () {
      const tree = renderer.create(<MemoryRouter><CreateQuestionOption/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});