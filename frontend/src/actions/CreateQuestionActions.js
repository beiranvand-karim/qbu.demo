
export const CREATE_QUESTION_BEGIN = 'CREATE_QUESTION_BEGIN';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR';


export const createQuestionBegin = () => ({
   type: CREATE_QUESTION_BEGIN
});

export const createQuestionSuccess = (data) => {
   return {
      type: CREATE_QUESTION_SUCCESS,
      payload: data
   }
};

export const createQuestionError = (error) => ({
   type: CREATE_QUESTION_ERROR,
   payload: error
});
