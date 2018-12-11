/* global expect, describe, it, beforeEach */
import configureStore from 'redux-mock-store'
import {
   checkSignInBegin,
   checkSignInSuccess,
   checkSignInError
} from './SignInActions'


describe('SignInActions', () => {

   const mockStore = configureStore();
   const store = mockStore();

   beforeEach(() => {
      store.clearActions();
   });

   it('should matches the check sign in begin snapshot', () => {
      store.dispatch(checkSignInBegin());
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the check sign in success snapshot', () => {
      const token = 'cc0f80d7-ca5c-4c97-aa45-8ee02a5b80de';
      store.dispatch(checkSignInSuccess(token));
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the check sign in error snapshot', () => {
      const error = 'this is a error';
      store.dispatch(checkSignInError(error));
      expect(store.getActions()).toMatchSnapshot();
   });
});
