/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {QuestionDetailOptionImageList} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<QuestionDetailOptionImageList />', () => {
   const options = ["option 1", "option 2", "option 3", "option 4"];
   it('should render without crashing', () => {
      shallow(<QuestionDetailOptionImageList options={options} />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><QuestionDetailOptionImageList
         options={options}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});