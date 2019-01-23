import React, {Component} from 'react'
import config from "../../config"
import {connect} from "react-redux"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import AnswersPreview from "../../components/AnswersPreview"

export class UserAnswers extends Component {

   state = {
      data: null,
      loading: false,
      error: null
   };

   componentDidMount() {
      this.setState({loading: true});
      fetch(`${config.server}/answer`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": this.props.token
         }
      })
         .then(resp => resp.json())
         .then(data => {
            if (!data.status) {
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
         const answers = Object.assign({},{data});
         return <AnswersPreview {...answers} />
      }

      if(error) {
         return <Error error={error} />
      }
      return <Loading/>
   }
}

const mapStateToProps = (state) => ({token: state.signInState.token});
export default connect(mapStateToProps)(UserAnswers)
