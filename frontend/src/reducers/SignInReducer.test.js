/* global describe, it, expect */
import {
   CHECK_SIGN_IN_ERROR,
   CHECK_SIGN_IN_SUCCESS,
   CHECK_SIGN_IN_BEGIN
} from '../actions/SignInActions'
import SignInReducer from './SignInReducer'

describe('SignInReducer', () => {

   it('should matches the initial state', () => {
      const action = { type: 'DUMMY_ACTION' };
      expect(SignInReducer(undefined, action)).toMatchSnapshot()
   });

   it('should should matches the check sign in begin state', () => {
      const action = { type: CHECK_SIGN_IN_BEGIN};
      expect(SignInReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the check sign in successful state', () => {
      const action = {
         type: CHECK_SIGN_IN_SUCCESS
      };
      expect(SignInReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the check sign in error state', () => {
      const action = {
         type: CHECK_SIGN_IN_ERROR,
         error: 'this is a error'
      };
      expect(SignInReducer(undefined, action)).toMatchSnapshot()
   });

});
