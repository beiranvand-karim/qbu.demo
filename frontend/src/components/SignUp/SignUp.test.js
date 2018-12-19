/* global describe, it, expect, jest */
import React from 'react'
import SignUp from './'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom";

describe('<SignUp />', () => {

   const user = {
      "id": 14,
      "username": "megan",
      "password": "$2a$12$GMpxEokq3TsYeKMFd.gd8urSAYFKEUUOKTCc0Hj5Z31BAc/7Ly5li",
      "firstName": "megan",
      "lastName": "fox",
      "email": "fox.megan@gmail.com",
      "phone": null,
      "enabled": true,
      "authorities": [
         {
            "authority": "ROLE_USER"
         }
      ],
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true
   };

   it('should render without crashing', () => {
      shallow(<SignUp/>)
   });

   it('should sign up a user', () => {
      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
               resolve({
                  status: 200,
                  json: () => {
                     return new Promise((resolve) => {
                        resolve({
                           user
                        })
                     })
                  }
               })
            })
         }
      );
      const wrapper = shallow(<SignUp/>);
      wrapper.find('[name="firstName"]').simulate('change', {target: {name: 'firstName', value: 'megan'}});
      wrapper.find('[name="lastName"]').simulate('change', {target: {name: 'lastName', value: 'fox'}});
      wrapper.find('[name="username"]').simulate('change', {target: {name: 'username', value: 'megan'}});
      wrapper.find('[name="password"]').simulate('change', {target: {name: 'password', value: 'megan852654'}});
      wrapper.find('[name="email"]').simulate('change', {target: {name: 'email', value: 'fox.megan@gmail.com'}});
      wrapper.find('[name="phone"]').simulate('change', {target: {name: 'phone', value: '09906042587'}});
      wrapper.find('Form').simulate('submit', {preventDefault(){}});

      expect(wrapper.state().loading).toEqual(true);

      setImmediate(() => {
         expect(wrapper.state().loading).toEqual(false);
         expect(wrapper.state().data).toEqual({user});
      })

   });

   it('should fail to sign up a user', () => {

      const error = 'sign up failed.';

      window.fetch = jest.fn().mockImplementation(() => {
            return new Promise((resolve,reject) => {
               reject({
                  error
               })
            })
         }
      );

      const wrapper = shallow(<SignUp/>);
      wrapper.find('[name="firstName"]').simulate('change', {target: {name: 'firstName', value: 'megan'}});
      wrapper.find('[name="lastName"]').simulate('change', {target: {name: 'lastName', value: 'fox'}});
      wrapper.find('[name="username"]').simulate('change', {target: {name: 'username', value: 'megan'}});
      wrapper.find('[name="password"]').simulate('change', {target: {name: 'password', value: 'megan852654'}});
      wrapper.find('[name="email"]').simulate('change', {target: {name: 'email', value: 'fox.megan@gmail.com'}});
      wrapper.find('[name="phone"]').simulate('change', {target: {name: 'phone', value: '09906042587'}});
      wrapper.find('Form').simulate('submit', {preventDefault(){}});

      expect(wrapper.state().loading).toEqual(true);

      setImmediate(() => {
         expect(wrapper.state().loading).toEqual(false);
         expect(wrapper.state().error).toEqual({error});
      })

   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><SignUp /></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });

});