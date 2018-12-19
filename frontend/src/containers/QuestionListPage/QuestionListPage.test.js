/* global describe, it, expect, jest */
import React from 'react'
import {shallow} from 'enzyme'
import {QuestionListPage} from './'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<QuestionListPage />',() => {

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
      shallow(<QuestionListPage />)
   });

   it('should matches the loading data snapshot', () => {
      const tree = renderer.create(<MemoryRouter><QuestionListPage/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

   it('should fetch question list', () => {
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
               resolve({
                  status: 200,
                  json: () => {
                     return new Promise((resolve) => {
                        resolve(questionList)
                     })
                  }
               })
            })
         }
      );
      const wrapper = shallow(<QuestionListPage />);
      expect(wrapper.state().loading).toEqual(true);
      setImmediate(() => {
         expect(wrapper.state().loading).toEqual(false);
         expect(wrapper.state().data).toEqual(questionList)
      })
   });

   it('should matches the fetch question list successful snapshot', () => {
      const error = 'fetch question list failed';
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve,reject) => {
               reject(error)
            })
         }
      );
      const wrapper = shallow(<QuestionListPage />);
      expect(wrapper.state().loading).toEqual(true);
      setImmediate(() => {
         expect(wrapper.state().loading).toEqual(false);
         expect(wrapper.state().error).toEqual(error)
      })
   });
});