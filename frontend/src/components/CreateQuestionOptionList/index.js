import React, {Component} from 'react'
import CreateQuestionOption from "../CreateQuestionOption"

export class CreateQuestionOptionList extends Component {
   constructor(props) {
      super(props);
      this.renderOptionList = this.renderOptionList.bind(this)
   }

   renderOptionList(optionsCount) {
      // todo make this work with numbers bigger than 4
      const optionList = Array.from(Array(optionsCount).keys());
      if (optionsCount > 0) {
         return optionList.map((option, index) => <CreateQuestionOption
            insertCreateQuestionOptionImage={this.props.insertCreateQuestionOptionImage}
            removeCreateQuestionOptionImage={this.props.removeCreateQuestionOptionImage}
            key={index}/>)
      }
      return null
   }

   render() {
      return this.renderOptionList(this.props.options)
   }
}

export default CreateQuestionOptionList