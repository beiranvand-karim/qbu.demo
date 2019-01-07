import {
   INSERT_CREATE_QUESTION_OPTION_IMAGE,
   REMOVE_CREATE_QUESTION_OPTION_IMAGE
} from "../actions/CreateQuestionOptionActions"

const defaultState = {
   images: []
};

export default function CreateQuestionOptionReducer(state = defaultState, action) {
   let images;
   switch (action.type) {
      case REMOVE_CREATE_QUESTION_OPTION_IMAGE:
         images = state.images.filter(image => image !== action.payload);
         return {
            ...state,
            images
         };
      case INSERT_CREATE_QUESTION_OPTION_IMAGE:
         images = [...state.images];
         images.push(action.payload);
         return {
            ...state,
            images
         };
      default:
         return state
   }
}