import React from 'react'
import QuestionDetailOptionImageList from "../QuestionDetailOptionImageList"

export const QuestionDetailPreview = (question) => {
   return <>
      <h3>{question.title}</h3>
      <h4>{question.prize}</h4>
      <QuestionDetailOptionImageList options={question.options} />
   </>
};

export default QuestionDetailPreview
