import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import {connect } from 'react-redux'

class Dashboard extends Component{
  render(){
    return(
      <div className="container">
      <h1>You are logged in</h1>
       <strong> with token:</strong><i> {this.props.auth.token} </i>
      </div>
    )
  }
}

const mapStateToProps= state=>{
  return {
    auth:state.auth
  }
}

const mapDispatchToProps= dispatch =>{
  return{

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard))
