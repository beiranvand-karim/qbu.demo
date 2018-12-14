import {
   CHECK_SIGN_IN_BEGIN,
   CHECK_SIGN_IN_SUCCESS,
   CHECK_SIGN_IN_ERROR
} from '../actions/SignInActions'

const initialState = {
   loading: false,
   error: null,
   loggedIn: false,
   token: null
};

export default function SignInReducer(state = initialState, action) {
   switch (action.type) {
      case CHECK_SIGN_IN_BEGIN:
         return {
            ...state,
            loading: true
         };

      case CHECK_SIGN_IN_SUCCESS:
         return {
            ...state,
            loading: false,
            loggedIn: true,
            token: action.payload
         };

      case CHECK_SIGN_IN_ERROR:
         return {
            ...state,
            loading: false,
            error: action.payload
         };

      default:
         return state;
   }
}
