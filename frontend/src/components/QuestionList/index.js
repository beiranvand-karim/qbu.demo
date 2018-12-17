import React, {Component} from 'react'
import './QuestionList.scss'
import QuestionListItem from "../../components/QuestionListItem"

export class QuestionList extends Component {
   render() {
      return this.props.questionList.map((question, index) =>
         <QuestionListItem key={index}  {...question}/>
      )
   }
}

export default QuestionList