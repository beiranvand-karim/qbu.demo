import {
   CREATE_QUESTION_SUCCESS,
   CREATE_QUESTION_ERROR,
   CREATE_QUESTION_BEGIN
} from '../actions/CreateQuestionActions'
import CreateQuestionReducer from './CreateQuestionReducer'

describe('CreateQuestionReducer', () => {

   it('should matches the initial state', () => {
      const action = { type: 'DUMMY_ACTION' };
      expect(CreateQuestionReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the create question begin state', () => {
      const action = { type: CREATE_QUESTION_BEGIN};
      expect(CreateQuestionReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the create question successful state', () => {
      const action = {
         type: CREATE_QUESTION_SUCCESS,
         payload: 'cc0f80d7-ca5c-4c97-aa45-8ee02a5b80de'
      };
      expect(CreateQuestionReducer(undefined, action)).toMatchSnapshot()
   });

   it('should matches the create question error state', () => {
      const action = {
         type: CREATE_QUESTION_ERROR,
         error: 'this is a error'
      };
      expect(CreateQuestionReducer(undefined, action)).toMatchSnapshot()
   });

});
