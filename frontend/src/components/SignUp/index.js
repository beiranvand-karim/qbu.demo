import React, {Component} from 'react'
import {Button, Input, Label, FormGroup, Form} from "reactstrap"
import config from "../../config"
import PageCenter from "../../StyledComponents/PageCenter"

const empty = '';

export class SignUp extends Component {

   constructor(props) {
      super(props);
      this.signUpFormSubmission = this.signUpFormSubmission.bind(this);
      this.change = this.change.bind(this)
   }

   state = {
      firstName: empty,
      lastName: empty,
      username: empty,
      password: empty,
      email: empty,
      phone: empty,
      data: null,
      loading: false,
      error: null
   };

   signUpServerCall(user) {
      this.setState({loading: true});
      fetch(`${config.server}/user/signUp`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(user)
      })
         .then(resp => resp.json())
         .then(data => {
            this.setState({loading: false});
            this.setState({data})
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   signUpFormSubmission(e) {
      e.preventDefault();
      const {firstName, lastName, username, password, email, phone} = this.state;
      const user = {firstName, lastName, username, password, email, phone};
      this.signUpServerCall(user)
   };

   change(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {

      if (this.state.data) {
         return <h1>user created</h1>
      }

      if (this.state.error) {
         return <h4>error: {this.state.error}</h4>
      }

      if (this.state.loading) {
         return <h3>loading ...</h3>
      }

      return <>
         <PageCenter>
            <Form onSubmit={this.signUpFormSubmission}>
               <FormGroup>
                  <Label for="firstName">first name</Label>
                  <Input value={this.state.firstName}
                         onChange={this.change}
                         type="text"
                         name="firstName"
                         id="firstName"
                         placeholder="first name"/>
               </FormGroup>
               <FormGroup>
                  <Label for="lastName">last name</Label>
                  <Input value={this.state.lastName}
                         onChange={this.change}
                         type="text" name="lastName" id="lastName"
                         placeholder="last name"/>
               </FormGroup>
               <FormGroup>
                  <Label for="username">username</Label>
                  <Input value={this.state.username}
                         onChange={this.change}
                         type="text" name="username" id="username"
                         placeholder="username"/>
               </FormGroup>
               <FormGroup>
                  <Label for="password">password</Label>
                  <Input value={this.state.password}
                         onChange={this.change}
                         type="password" name="password" id="password"
                         placeholder="password"/>
               </FormGroup>
               <FormGroup>
                  <Label for="email">email</Label>
                  <Input value={this.state.email}
                         onChange={this.change}
                         type="email" name="email" id="email"
                         placeholder="email"/>
               </FormGroup>
               <FormGroup>
                  <Label for="phone">phone</Label>
                  <Input value={this.state.phone}
                         onChange={this.change}
                         type="text" name="phone" id="phone"
                         placeholder="phone"/>
               </FormGroup>
               <Button>Submit</Button>
            </Form>
         </PageCenter>
      </>
   }

};

export default SignUp