/* global describe, it, expect */
import configureStore from 'redux-mock-store'
import {
   fetchQuestionListBegin,
   fetchQuestionListSuccess,
   fetchQuestionListError
} from './QuestionListActions'

describe('QuestionListActions', () => {

   const mockStore = configureStore();
   const store = mockStore();

   const questionList = [
      {
         "id": 7,
         "title": "this is title",
         "text": "this is description",
         "prize": 45000,
         "userId": 7,
         "username": "admin"
      }
   ];

   beforeEach(() => {
      store.clearActions();
   });

   it('should matches the question list begin snapshot', () => {
      store.dispatch(fetchQuestionListBegin());
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the question list success snapshot', () => {
      store.dispatch(fetchQuestionListSuccess(questionList));
      expect(store.getActions()).toMatchSnapshot();
   });

   it('should matches the question list error snapshot', () => {
      store.dispatch(fetchQuestionListError('this is a error'));
      expect(store.getActions()).toMatchSnapshot();
   });
});