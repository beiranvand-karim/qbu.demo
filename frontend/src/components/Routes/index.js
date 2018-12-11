import {Route, Switch} from "react-router-dom"
import Home from "../Home"
import CreateQuestion from "../../containers/CreateQuestion"
import React from "react"
import SignIn from "../../containers/SignIn"


export const Routes = () => (
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/createQuestion" component={CreateQuestion} />
      <Route path="/home" component={Home} />
      <Route path="/signIn" component={SignIn} />
   </Switch>
);
