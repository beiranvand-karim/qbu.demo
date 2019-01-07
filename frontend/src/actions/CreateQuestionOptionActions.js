
export const INSERT_CREATE_QUESTION_OPTION_IMAGE = 'INSERT_CREATE_QUESTION_OPTION_IMAGE';
export const REMOVE_CREATE_QUESTION_OPTION_IMAGE = 'REMOVE_CREATE_QUESTION_OPTION_IMAGE';


export const removeCreateQuestionOptionImage = (image) => ({
   type: REMOVE_CREATE_QUESTION_OPTION_IMAGE,
   payload: image
});

export const insertCreateQuestionOptionImage = (image) => ({
   type: INSERT_CREATE_QUESTION_OPTION_IMAGE,
   payload: image
});