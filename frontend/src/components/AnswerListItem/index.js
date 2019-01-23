import React from 'react'
import {Alert} from "reactstrap"

export const AnswerListItem = (answer) => {
   return <div>
      <Alert color="primary">
         <h2>question title: {answer.questionTitle}</h2>
         <div>
            <strong>you chose: </strong>
            <img src={answer.option} alt=""/>
         </div>
      </Alert>
   </div>
};
export default AnswerListItem