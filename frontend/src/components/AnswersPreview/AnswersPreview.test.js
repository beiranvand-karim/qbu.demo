/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {AnswersPreview} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<AnswersPreview />', () => {
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
   const answers = Object.assign({},{data: answerList});

   it('should render without crashing', () => {
      shallow(<AnswersPreview {...answers} />)
   });
   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><AnswersPreview {...answers} /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});