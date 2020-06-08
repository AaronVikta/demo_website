import React, {Component} from 'react';

import "./assets/css/admin.css"

class AdminWrapper extends Component{
  render(){
    return(
      <div id="admin-page">
        {this.props.children}
      </div>
    )
  }
}

export default AdminWrapper
