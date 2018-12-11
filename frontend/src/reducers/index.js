import {combineReducers} from 'redux'
import CreateQuestionReducer from "./CreateQuestionReducer"
import SignInReducer from "./SignInReducer";

const reducer = combineReducers({
   createQuestionState: CreateQuestionReducer,
   signInState: SignInReducer
});

export default reducer;
