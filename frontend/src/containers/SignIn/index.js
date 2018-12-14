import React, {Component, Fragment} from 'react'
import {checkSignInBegin, checkSignInError, checkSignInSuccess} from '../../actions/SignInActions'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import config from "../../config"
import {Button, Input, Label, FormGroup, Form} from "reactstrap"
import './SignIn.scss'

export class SignIn extends Component {

   constructor(props) {
      super(props);
      this.SignInFormSubmission = this.SignInFormSubmission.bind(this);
      this.change = this.change.bind(this)
   }

   SignInFormSubmission(e) {
      e.preventDefault();
      const {userName, passWord} = this.state;
      this.props.checkSignInBegin();
      fetch(`${config.server}/token`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "authorization": "Basic " + btoa(userName + ":" + passWord)
         }
      })
         .then(res => res.json())
         .then(json => {
            this.props.checkSignInSuccess(json.token);
            return json
         })
         .catch(error => this.props.checkSignInError(error));
   };

   state = {
      userName: '',
      passWord: ''
   };

   change(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   };

   render() {
      const {loggedIn, error} = this.props;
      if (error) {
         return <div>error: {error.message}</div>
      }

      if (loggedIn) {
         return <div>
            <h1>you are logged in...</h1>
            <Link to="/question list">go to question list</Link>
         </div>
      }
      return (
         <Fragment>
            <div>
               <div className="SignInFormContainer">
                  <Form onSubmit={this.SignInFormSubmission} className="SignInForm">
                     <FormGroup className="formGroup">
                        <Label for="userName">user name</Label>
                        <Input value={this.state.userName}
                               onChange={this.change}
                               className="formGroup formGroup_input"
                               type="text"
                               name="userName"
                               id="userName"
                               placeholder="user name"/>
                     </FormGroup>
                     <FormGroup className="formGroup">
                        <Label for="passWord">pass word</Label>
                        <Input value={this.state.passWord}
                               onChange={this.change}
                               className="formGroup formGroup_input"
                               type="text" name="passWord" id="passWord"
                               placeholder="pass word"/>
                     </FormGroup>

                     <Button>Submit</Button>
                  </Form>
               </div>
            </div>
         </Fragment>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   checkSignInError: (error) => dispatch(checkSignInError(error)),
   checkSignInSuccess: (json) => dispatch(checkSignInSuccess(json)),
   checkSignInBegin: () => dispatch(checkSignInBegin()),
});
const mapStateToProps = state => ({
   error: state.signInState.error,
   loading: state.signInState.loading,
   loggedIn: state.signInState.loggedIn
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
