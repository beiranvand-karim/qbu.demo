/* global describe, expect, it */
import React from 'react'
import {shallow} from 'enzyme'
import QuestionListItem from './'
import renderer from 'react-test-renderer'

describe('<QuestionListItem />', () => {
   const question = {
      "id": 8,
      "title": "who is the best soccer player?",
      "text": "we want to know who is curently the best soccer player ther is?",
      "prize": 2000,
      "userId": 7,
      "username": "admin"
   };
   it('should render without crashing', () => {
      shallow(<QuestionListItem question={question}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<QuestionListItem {...question}/>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});