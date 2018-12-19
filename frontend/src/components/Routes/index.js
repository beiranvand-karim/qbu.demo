import {Route, Switch} from "react-router-dom"
import Home from "../Home"
import CreateQuestion from "../../containers/CreateQuestion"
import React from "react"
import SignIn from "../../containers/SignIn"
import QuestionListPage from "../../containers/QuestionListPage"
import SignUp from "../SignUp"


export const Routes = () => (
   <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/createQuestion" component={CreateQuestion}/>
      <Route path="/home" component={Home}/>
      <Route path="/signIn" component={SignIn}/>
      <Route path="/questionListPage" component={QuestionListPage}/>
      <Route path="/signUp" component={SignUp} />
   </Switch>
);
