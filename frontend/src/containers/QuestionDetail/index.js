import React, {Component} from 'react'
import config from "../../config"
import {connect} from "react-redux"
import QuestionDetailPreview from "../../components/QuestionDetailPreview"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import AnswerSaved from "../../components/AnswerSaved"

export class QuestionDetail extends Component {

   constructor(props) {
      super(props);
      this.radioInputChange = this.radioInputChange.bind(this);
      this.questionDetailFormSubmit = this.questionDetailFormSubmit.bind(this)
   }

   state = {
      data: null,
      answerData: null,
      loading: false,
      error: null,
      selectedOption: null
   };

   componentDidMount() {
      this.setState({loading: true});
      fetch(`${config.server}/question/${this.props.match.params.id}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.props.token
         }
      })
         .then(resp => resp.json())
         .then(data => {
            if (!data.status) {
               this.setState({loading: false});
               this.setState({data})
            } else {
               this.setState({loading: false});
               this.setState({error: data.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   sendSelectedOption(answer) {
      this.setState({loading: true});
      fetch(`${config.server}/answer`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.props.token
         },
         body: JSON.stringify(answer)
      })
         .then(resp => resp.json())
         .then(answerData => {
            if (!answerData.status) {
               this.setState({loading: false});
               this.setState({answerData})
            } else {
               this.setState({loading: false});
               this.setState({error: answerData.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   questionDetailFormSubmit(e) {
      e.preventDefault();
      const questionId = this.props.match.params.id;
      const {selectedOption} = this.state;
      const answer = {questionId, selectedOption};
      this.sendSelectedOption(answer)
   };

   radioInputChange(selectedOption) {
      console.log(selectedOption);
      this.setState({selectedOption})
   };

   render() {
      const {data, error, answerData} = this.state;
      if (answerData) {
         return <AnswerSaved />
      }
      if (data) {
         return <QuestionDetailPreview radioInputChange={this.radioInputChange}
                                       questionDetailFormSubmit={this.questionDetailFormSubmit} {...data}/>
      }
      if (error) {
         return <Error error={error}/>
      }
      return <Loading />
   }
}

const mapStateToProps = (state) => ({token: state.signInState.token});
export default connect(mapStateToProps)(QuestionDetail)
