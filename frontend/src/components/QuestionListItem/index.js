import React from 'react'
import FlexWrapper from "../../StyledComponents/FlexWrapper"
import Question from "../../StyledComponents/Question"
import {Button, Jumbotron} from "reactstrap"
import {withRouter} from 'react-router-dom'

const navigateQuestionDetail = (props) => {
   props.history.push(`/questionDetail/${props.question.id}`)
};

export const QuestionListItem = (props) => {
   return <FlexWrapper>
      <Question>
         <Jumbotron>
            <h1 className="display-6">{props.question.title}</h1>
            <p className="lead">{props.question.username}</p>
            <p className="lead">{props.question.prize}</p>
            <hr className="my-2" />
            <p>{props.question.text}</p>
            <p className="lead">
               <Button color="primary" onClick={() => navigateQuestionDetail(props)}>visit question</Button>
            </p>
         </Jumbotron>
      </Question>
   </FlexWrapper>
};

export default withRouter(QuestionListItem)