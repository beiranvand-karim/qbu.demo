/* global expect, describe, it, beforeEach */
import configureStore from 'redux-mock-store'
import {
   createQuestionBegin,
   createQuestionSuccess,
   createQuestionError
} from './CreateQuestionActions'


describe('CreateQuestionActions', () => {

   const mockStore = configureStore();
   const store = mockStore();

   beforeEach(() => {
      store.clearActions();
   });

   it('should matches the create question begin snapshot', () => {
      store.dispatch(createQuestionBegin());
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the create question success snapshot', () => {
      const data = 'some data';
      store.dispatch(createQuestionSuccess(data));
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the create question error snapshot', () => {
      const error = 'some error';
      store.dispatch(createQuestionError(error));
      expect(store.getActions()).toMatchSnapshot();
   });
});
