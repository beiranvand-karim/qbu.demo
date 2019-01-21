import React from 'react'
import QuestionDetailOptionImageList from "../QuestionDetailOptionImageList"
import {Button, Form} from "reactstrap"

export const QuestionDetailPreview = (props) => {
   const {questionDetailFormSubmit, radioInputChange, options} = props;
   return <>
      <h3>{props.title}</h3>
      <h4>{props.prize}</h4>
      <Form onSubmit={questionDetailFormSubmit}>
         <QuestionDetailOptionImageList radioInputChange={radioInputChange} options={options} />
         <Button>save you answer</Button>
      </Form>
   </>
};

export default QuestionDetailPreview
