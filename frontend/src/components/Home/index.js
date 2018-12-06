import React, {Component} from 'react'
import {Link} from "react-router-dom"

export class Home extends Component {
  render() {
    return (
      <>
        <h1>home page</h1>
        <Link to="/createQuestion">create a question</Link>
      </>
    )
  }
}

export default Home;
