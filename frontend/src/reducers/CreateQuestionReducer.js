import {
   CREATE_QUESTION_BEGIN,
   CREATE_QUESTION_SUCCESS,
   CREATE_QUESTION_ERROR
} from '../actions/CreateQuestionActions'

const initialState = {
   loading: false,
   error: null,
   data: null
};

export default function CreateQuestionReducer(state = initialState, action) {
   switch (action.type) {
      case CREATE_QUESTION_BEGIN:
         return {
            ...state,
            loading: true,
            error: null,
            data: null
         };

      case CREATE_QUESTION_SUCCESS:
         return {
            ...state,
            loading: false,
            error: null,
            data: state.payload
         };

      case CREATE_QUESTION_ERROR:

         return {
            ...state,
            loading: false,
            error: state.error,
            data: null
         };

      default:
         return state;
   }
}
