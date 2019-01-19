/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {QuestionDetailPreview} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<QuestionDetailPreview />', () => {
   const question = {
      "text": "this is a question",
      "title": "this question title",
      "prize": 252,
      "options": ["option 1", "option 2", "option 3", "option 4"]
   };
   it('should render without crashing', () => {
      shallow(<QuestionDetailPreview {...question}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><QuestionDetailPreview {...question}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});