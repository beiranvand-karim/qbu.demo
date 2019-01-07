import {shallow} from 'enzyme'
import React from "react"
import {CreateQuestion} from "./"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<CreateQuestion/>', () => {

   const createQuestionErrorMock = jest.fn();
   const createQuestionSuccessMock = jest.fn();
   const createQuestionBeginMock = jest.fn();

   it('should render without crashing', () => {
      shallow(<CreateQuestion/>)
   });

   it('should create a question', () =>{
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
               resolve({
                  status: 200,
                  json: () => {
                     return new Promise((resolve) => {
                        resolve({
                           title: 'this is title',
                           text: 'this is text',
                           prize: 25
                        })
                     })
                  }
               })
            })
         }
      );

      const wrapper = shallow(<CreateQuestion
         createQuestionError={createQuestionErrorMock}
         createQuestionSuccess={createQuestionSuccessMock}
         createQuestionBegin={createQuestionBeginMock}/>);

      wrapper.find('Form').simulate('submit', {preventDefault() {}});

      expect(createQuestionBeginMock.mock.calls.length).toEqual(1);
      setImmediate(()=>{
         expect(createQuestionSuccessMock.mock.calls.length).toEqual(1);
      })

   });

   it('should fail to create a question', () => {

      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((reject) => {
               reject({
                  error: 'create question failed.'
               })
            })
         }
      );

      const wrapper = shallow(<CreateQuestion
         createQuestionError={createQuestionErrorMock}
         createQuestionSuccess={createQuestionSuccessMock}
         createQuestionBegin={createQuestionBeginMock}/>);

      wrapper.find('Form').simulate('submit', {preventDefault() {}});

      expect(createQuestionBeginMock.mock.calls.length).toEqual(2);
      setImmediate(()=>{
         expect(createQuestionErrorMock.mock.calls.length).toEqual(1);
      })

   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><CreateQuestion /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
