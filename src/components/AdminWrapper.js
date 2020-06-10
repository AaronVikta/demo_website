import React, {Component} from 'react';
import "./assets/css/admin.css"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
class AdminWrapper extends Component{
  render(){
    return(
      <div id="admin-page">
        <AppBar>
          <Toolbar>
          
          </Toolbar>
        </AppBar>

        {this.props.children}
      </div>
    )
  }
}

export default AdminWrapper
