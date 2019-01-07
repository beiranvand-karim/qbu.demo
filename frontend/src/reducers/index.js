import {combineReducers} from 'redux'
import CreateQuestionReducer from "./CreateQuestionReducer"
import SignInReducer from "./SignInReducer"
import CreateQuestionOptionReducer from "./CreateQuestionOptionReducer"

const reducer = combineReducers({
   createQuestionState: CreateQuestionReducer,
   signInState: SignInReducer,
   createQuestionOptionState: CreateQuestionOptionReducer
});

export default reducer;
