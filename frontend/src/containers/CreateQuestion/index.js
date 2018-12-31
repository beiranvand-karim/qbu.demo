import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import './CreateQuestion.scss'
import config from "../../config"
import {connect} from "react-redux"
import {
   createQuestionBegin,
   createQuestionError,
   createQuestionSuccess
} from '../../actions/CreateQuestionActions'

export class CreateQuestion extends Component {

   constructor(props) {
      super(props);
      this.createQuestion = this.createQuestion.bind(this);
      this.createQuestionFormSubmission = this.createQuestionFormSubmission.bind(this);
      this.change = this.change.bind(this)
   }

   createQuestion(question) {
      this.props.createQuestionBegin();
      fetch(`${config.server}/question`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.props.token
         },
         body: JSON.stringify(question),
      })
         .then(res => res.json())
         .then(data => {
            if (data.status || data.status > 400) {
               this.props.createQuestionError(data.error)
            } else {
               this.props.createQuestionSuccess(data)
            }
         })
         .catch(error => this.props.createQuestionError(error))
   };

   createQuestionFormSubmission(event) {
      event.preventDefault();
      const {title, text, prize} = this.state;
      const question = {title, text, prize};
      this.createQuestion(question);
   };

   state = {
     title: '',
     text: '',
     prize: 0
   };

   change(e){
      this.setState({
         [e.target.name]: e.target.value
      })
   };

   render() {

      if (this.props.loading) {
         return <h1>loading...</h1>
      }

      if(this.props.error) {
         return <h1>error: {this.props.error}</h1>
      }

      if (this.props.data) {
         return <>
            <h1>question created:</h1>
            <h3>title: {this.props.data.title}</h3>
            <h3>description: {this.props.data.title}</h3>
            <h3>prize: {this.props.data.prize}</h3>
         </>
      }
      return (
         <>
            <div className="createQuestionFormContainer">
               <Form onSubmit={this.createQuestionFormSubmission} className="createQuestionForm">
                  <FormGroup className="formGroup">
                     <Label for="title">title</Label>
                     <Input value={this.state.title}
                            onChange={this.change}
                            className="formGroup formGroup_input"
                            type="text" name="title" id="title"
                            placeholder="write a question title"/>
                  </FormGroup>
                  <FormGroup className="formGroup">
                     <Label for="text">text</Label>
                     <Input value={this.state.text}
                            onChange={this.change}
                            className="formGroup formGroup_input"
                            type="textarea"
                            name="text"
                            id="text"
                            rows={5}
                            placeholder="write a description"/>
                  </FormGroup>
                  <FormGroup className="formGroup">
                     <Label for="prize">prize</Label>
                     <Input value={this.state.prize}
                            onChange={this.change}
                            className="formGroup formGroup_input" type="text" name="prize" id="prize"
                            placeholder="write a question title"/>
                  </FormGroup>
                  <Button>Submit</Button>
               </Form>
            </div>
         </>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   createQuestionError: (error) => dispatch(createQuestionError(error)),
   createQuestionSuccess: (json) => dispatch(createQuestionSuccess(json)),
   createQuestionBegin: () => dispatch(createQuestionBegin()),
});
const mapStateToProps = state => ({
   loading: state.createQuestionState.loading,
   error: state.createQuestionState.error,
   data: state.createQuestionState.data,
   token: state.signInState.token
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
