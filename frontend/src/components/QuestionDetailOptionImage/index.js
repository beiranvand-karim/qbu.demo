import React from 'react'
import {FormGroup, Input, Label} from "reactstrap"

export const QuestionDetailOptionImage = (props) => {
   const {index, optionSrc, radioInputChange} = props;
   return <FormGroup check>
      <Label check>
         <Label>
            <Input onChange={() => radioInputChange(index)} type="radio" name="questionDetailRadio"/>
            <img src={optionSrc} alt={optionSrc}/>
         </Label>
      </Label>
   </FormGroup>
};
export default QuestionDetailOptionImage
