import React, {Component} from 'react'
import {Link} from "react-router-dom"

export class CreateQuestion extends Component {
  render() {
    return (
      <>
        <h1>create question page</h1>
        <Link to="/">see questions</Link>
      </>
    )
  }
}

export default CreateQuestion;
