import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import CreateQuestion from "./containers/CreateQuestion";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createQuestion" component={CreateQuestion} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
