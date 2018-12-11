export const CHECK_SIGN_IN_BEGIN = 'CHECK_SIGN_IN_BEGIN';
export const CHECK_SIGN_IN_SUCCESS = 'CHECK_SIGN_IN_SUCCESS';
export const CHECK_SIGN_IN_ERROR = 'CHECK_SIGN_IN_ERROR';


export const checkSignInBegin = () => ({
   type: CHECK_SIGN_IN_BEGIN
});

export const checkSignInSuccess = (token) => {
   return {
      type: CHECK_SIGN_IN_SUCCESS,
      payload: token
   }
};

export const checkSignInError = (error) => {
   return {
      type: CHECK_SIGN_IN_ERROR,
      payload: error
   }
};
