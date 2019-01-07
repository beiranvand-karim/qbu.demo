import React from 'react'
import FlexWrapper from "../../StyledComponents/FlexWrapper"
import Question from "../../StyledComponents/Question"
import {Button, Jumbotron} from "reactstrap"

export const QuestionListItem = (question) => {
   return <FlexWrapper>
      <Question>
         <Jumbotron>
            <h1 className="display-6">{question.title}</h1>
            <p className="lead">{question.username}</p>
            <p className="lead">{question.prize}</p>
            <hr className="my-2" />
            <p>{question.text}</p>
            <p className="lead">
               <Button color="primary">see all answers</Button>
            </p>
         </Jumbotron>
      </Question>
   </FlexWrapper>
};

export default QuestionListItem