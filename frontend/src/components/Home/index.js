import React, {Component} from 'react'
import {Link} from "react-router-dom"

export class Home extends Component {
  render() {
    return (
      <>
        <h1>home page</h1>
        <Link to="/createQuestion">create a question</Link>
         <br/>
        <Link to="/signIn">sign in</Link>
         <br/>
         <Link to="/questionListPage">question list page</Link>
         <br/>
         <Link to="/signUp">sign up</Link>
         <br/>
         <Link to="/answer">your answers</Link>
      </>
    )
  }
}

export default Home
