import React from 'react'
import AnswerList from "../AnswerList"

export const AnswersPreview = (props) => {
   const {data} = props;
   if (data.length === 0) {
      return <h1>you have no answer registered.</h1>
   }
   return <div>
      <h1>here are your answers:</h1>
      <AnswerList data={data} />
   </div>
};
export default AnswersPreview