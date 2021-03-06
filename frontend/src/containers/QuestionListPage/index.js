import React, {Component} from 'react'
import './QuestionListPage.scss'
import config from '../../config'
import {connect} from 'react-redux'
import QuestionList from "../../components/QuestionList"
import Error from "../../components/Error"
import Loading from "../../components/Loading"

export class QuestionListPage extends Component {

   state = {
      data: null,
      loading: false,
      error: null
   };

   componentDidMount() {
      this.setState({loading: true});
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
               this.setState({loading: false});
               this.setState({data})
            } else {
               this.setState({loading: false});
               this.setState({error: data.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   render() {
      const {data, error} = this.state;
      if(data) {
         return <QuestionList questionList={this.state.data}/>
      }
      if(error) {
         return <Error error={error} />
      }
      return <Loading />
   }
}
const mapStateToProps = (state) => ({token: state.signInState.token});
export default connect(mapStateToProps)(QuestionListPage)