import React from 'react'
import QuestionDetailOptionImage from "../QuestionDetailOptionImage"

export const QuestionDetailOptionImageList = ({options}) => {
   return options.map((imageAddress, index) => <QuestionDetailOptionImage key={index} optionSrc={imageAddress} />)
};
export default QuestionDetailOptionImageList
