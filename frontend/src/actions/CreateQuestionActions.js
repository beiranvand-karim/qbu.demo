export const CREATE_QUESTION_BEGIN = 'CREATE_QUESTION_BEGIN';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR';


export function handleErrors(response) {
   if (!response.ok) {
      throw Error(response.statusText);
   }
   return response;
}

export const createQuestionBegin = () => ({
   type: CREATE_QUESTION_BEGIN
});

export const createQuestionSuccess = (token) => {
   return {
      type: CREATE_QUESTION_SUCCESS,
      payload: token
   }
};

export const createQuestionError = (error) => ({
   type: CREATE_QUESTION_ERROR,
   payload: error
});
