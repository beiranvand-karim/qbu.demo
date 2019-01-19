/* global describe, it, expect, jest */
import React from 'react'
import {shallow} from 'enzyme'
import {QuestionList} from './'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<QuestionList />',() => {
   const questionList = [
      {
         "id": 7,
         "title": "this is a title",
         "text": "dkg;dkg;d;g",
         "prize": 45000,
         "userId": 7,
         "username": "admin"
      },
      {
         "id": 8,
         "title": "who is the best soccer player?",
         "text": "we want to know who is curently the best soccer player ther is?",
         "prize": 2000,
         "userId": 7,
         "username": "admin"
      }
   ];

   it('should render without crashing', () => {
      shallow(<QuestionList questionList={questionList} />)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><QuestionList questionList={questionList}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});