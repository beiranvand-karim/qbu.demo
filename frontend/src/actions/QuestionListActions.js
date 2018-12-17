
export const FETCH_QUESTION_LIST_BEGIN = 'FETCH_QUESTION_LIST_BEGIN';
export const FETCH_QUESTION_LIST_SUCCESS = 'FETCH_QUESTION_LIST_SUCCESS';
export const FETCH_QUESTION_LIST_ERROR = 'FETCH_QUESTION_LIST_ERROR';


export const fetchQuestionListBegin = () => ({
   type: FETCH_QUESTION_LIST_BEGIN
});

export const fetchQuestionListSuccess = (data) => ({
   type: FETCH_QUESTION_LIST_SUCCESS,
   payload: data
});

export const fetchQuestionListError = (error) => ({
   type: FETCH_QUESTION_LIST_ERROR,
   payload: error
});