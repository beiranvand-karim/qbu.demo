import React from 'react'
import AnswerListItem from "../AnswerListItem"

export const AnswerList = (props) => {
  return props.data.map((answer,index) => <AnswerListItem key={index} {...answer} />);
};
export default AnswerList