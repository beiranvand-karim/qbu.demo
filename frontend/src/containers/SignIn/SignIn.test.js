import {shallow} from 'enzyme'
import React from "react"
import {SignIn} from "./"
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('<SignIn/>', () => {

   const checkSignInBeginMock = jest.fn();
   const checkSignInSuccessMock = jest.fn();
   const checkSignInErrorMock = jest.fn();

   it('should render without crashing', () => {
      shallow(<SignIn/>)
   });

   it('should sign in', () => {
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
               resolve({
                  status: 200,
                  json: () => {
                     return new Promise((resolve) => {
                        resolve({
                           token: 'cc0f80d7-ca5c-4c97-aa45-8ee02a5b80de'
                        })
                     })
                  }
               })
            })
         }
      );

      const wrapper = shallow(<SignIn
         checkSignInBegin={checkSignInBeginMock}
         checkSignInSuccess={checkSignInSuccessMock}
         checkSignInError={checkSignInErrorMock}/>);

      wrapper.find('Form').simulate('submit', {preventDefault() {}});

      expect(checkSignInBeginMock.mock.calls.length).toEqual(1);
      setImmediate(()=>{
         expect(checkSignInSuccessMock.mock.calls.length).toEqual(1);
      })

   });

   it('should call on sign in fail', function () {
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((reject) => {
               reject({
                  error: 'sign in failed.'
               })
            })
         }
      );

      const wrapper = shallow(<SignIn
         checkSignInBegin={checkSignInBeginMock}
         checkSignInSuccess={checkSignInSuccessMock}
         checkSignInError={checkSignInErrorMock}/>);

      wrapper.find('Form').simulate('submit', {preventDefault() {}});

      expect(checkSignInBeginMock.mock.calls.length).toEqual(2);
      setImmediate(()=>{
         expect(checkSignInErrorMock.mock.calls.length).toEqual(1);
      })

   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><SignIn/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});
