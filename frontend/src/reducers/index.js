import {combineReducers} from 'redux'
import CreateQuestionReducer from "./CreateQuestionReducer"

const reducer = combineReducers({
   createQuestionState: CreateQuestionReducer
});

export default reducer;
