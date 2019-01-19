/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {QuestionDetail} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<QuestionDetail />', () => {

   const matchMock = {params: {id: 10}};

   it('should render without crashing', () => {
      shallow(<QuestionDetail match={matchMock} />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><QuestionDetail match={matchMock}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});