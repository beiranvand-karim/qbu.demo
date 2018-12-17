import React, {Component} from 'react'
import './QuestionListPage.scss'
import config from '../../config'
import {connect} from 'react-redux'
import QuestionList from "../../components/QuestionList"

export class QuestionListPage extends Component {

   state = {
      data: null,
      loading: false,
      error: null
   };

   componentDidMount() {
      fetch(`${config.server}/question`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.props.token
         }
      })
         .then(resp => resp.json())
         .then(data => {
            if (Array.isArray(data)) {
               this.setState({data})
            } else {
               this.setState({error: data.error})
            }
         })
         .catch(error => this.setState({error}))
   }

   render() {
      if(this.state.data) {
         return <QuestionList questionList={this.state.data}/>
      }

      if(this.state.error) {
         return <div>error: {this.state.error}</div>
      }

      return <h1>loading ...</h1>
   }
}
const mapStateToProps = (state) => ({token: state.signInState.token});
export default connect(mapStateToProps)(QuestionListPage)