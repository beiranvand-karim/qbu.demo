import React from 'react'
import QuestionDetailOptionImage from "../QuestionDetailOptionImage"

export const QuestionDetailOptionImageList = (props) => {
   const {options, radioInputChange} = props;
   return options.map((imageAddress, index) => <QuestionDetailOptionImage
      radioInputChange={radioInputChange} index={index} key={index} optionSrc={imageAddress}/>)
};
export default QuestionDetailOptionImageList
