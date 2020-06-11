import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'

// Admin pages
import Dashboard from './components/Pages/Admin/Dashboard'
import Users from './components/Pages/Admin/Users'
import Posts from './components/Pages/Admin/Posts'

import AdminWrapper from './components/AdminWrapper'
import LoginWrapper from './components/LoginWrapper';

class App extends Component {
render(){
  return (
    <div className="App">
        <Router>

          <Route
          path="/admin/users"
          render = { props =>{
            return (
            <div>
              {this.props.auth.token?
              <AdminWrapper>
                <Users/>
              </AdminWrapper>
                :
                <LoginWrapper>
                  <Login/>
                </LoginWrapper>
              }
              </div>
            )
          }}
          />

          <Route
          path="/admin/posts"
          render = { props =>{
            return (
            <div>
              {this.props.auth.token?
              <AdminWrapper>
                <Posts/>
              </AdminWrapper>
                :
                <LoginWrapper>
                  <Login/>
                </LoginWrapper>
              }
              </div>
            )
          }}
          />
          <Route
          exact={true}
          path="/admin"
          render = { props =>{
            return (
            <div>
              {this.props.auth.token?
              <AdminWrapper>
                <Dashboard/>
              </AdminWrapper>
                :
                <LoginWrapper>
                  <Login/>
                </LoginWrapper>
              }
              </div>
            )
          }}
          />

            <Route
            exact={true}
            path="/"
            render={props =>(
              <PageWrapper>
              <Home {...props}/>
              </PageWrapper>
            )}
            />

            <Route
            path="/about"
            render={props =>(
              <PageWrapper>
              <About {...props}/>
              </PageWrapper>
            )}
            />
            <Route
            path="/contact"
            render={props =>(
              <PageWrapper>
              <Contact {...props}/>
              </PageWrapper>
            )}
            />
        </Router>
    </div>
  );
  }
}

const mapStateToProps =state=>{
  return{
    auth:state.auth
  }
}

const mapDispatchToProps = dispatch=>{
  return{

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
