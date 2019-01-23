/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {AnswerListItem} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<AnswerListItem />', () => {
   const answer = {
      "id": 1,
      "userId": 7,
      "selectedOption": 2,
      "questionId": 25,
      "option": "http://localhost:8282/question/25/2.png",
      "questionTitle": "this question title"
   };
   it('should render without crashing', () => {
      shallow(<AnswerListItem {...answer} />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><AnswerListItem {...answer} /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});