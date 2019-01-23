/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {AnswerList} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<AnswerList />', () => {
   const answerList = [
      {
         "id": 1,
         "userId": 7,
         "selectedOption": 2,
         "questionId": 25,
         "option": "http://localhost:8282/question/25/2.png",
         "questionTitle": "this question title"
      },
      {
         "id": 3,
         "userId": 7,
         "selectedOption": 2,
         "questionId": 25,
         "option": "http://localhost:8282/question/25/2.png",
         "questionTitle": "this question title"
      }
   ];
   it('should render without crashing', () => {
      shallow(<AnswerList data={answerList} />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><AnswerList data={answerList}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});