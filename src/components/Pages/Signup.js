 import React, {Component} from 'react'
import Field from '../Common/Field';
import {withFormik} from 'formik'
import {connect } from 'react-redux'

import * as AuthActions from '../../store/actions/authActions'
import * as Yup from 'yup';

const fields =[
  {name:'email', elementName:'input', type:'email', placeholder:'Your Email'},
  {name:'name', elementName:'input', type:'text', placeholder:'Your Name'},
  {name:'password', elementName:'input', type:'password', placeholder:'Your Password'},
  {name:'password2', elementName:'input', type:'password', placeholder:'Your Password Again'}
]

class Signup extends Component{
  render(){
    return(

        <div className="login-page">
        <div className="container">
          <div className="login-form">
          <div className="row">
          <div className="text-danger text-center">
            {this.props.auth.error || ''}
          </div>
            <h1> Sign Up</h1>
          </div>
          <div>
            <form className="row" onSubmit={ e =>{
              e.preventDefault();
              this.props.register(
                this.props.values.name,
                this.props.values.email,
                this.props.values.password)
            }}>
            {fields.map((f, i)=>{
              return (
                <div key={i} className="col-md-6">
                <Field
                {...f}
                value={this.props.values[f.name]}
                name= {f.name}
                onChange= {this.props.handleChange}
                onBlur= {this.props.handleBlur}
                touched={(this.props.touched[f.name])}
                errors= {this.props.errors[f.name]}
                />
                </div>)
            })
          }
          <div className="col-md-12">
            <button className="btn btn-primary">
            Sign Up </button>
          </div>
            </form>
          </div>
          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = state=>{
  return {
    auth:state.auth
  }
}

const mapDispatchToProps= dispatch =>{
  return{
    register: (name,email, pass)=>{
      dispatch(AuthActions.register(name,email,pass))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues:()=>({
    email:'',
    name:'',
    password:'',
    password2:''
  }),
validationSchema: Yup.object().shape({
    name: Yup.string().required('We need your name'),
    email: Yup.string().email('Email is Invalid').required('Your email is required'),
    password:Yup.string()
    .min(8,'Password must be at least 8 characters')
    .required('Your Password is required'),
    password2: Yup.string().required('You Must confirm your password')
    .test('pass-match', 'Passwords don\'t match', function(value){
      const {password} = this.parent;
      return password ===value
    })
  }),
  handleSubmit: (values, {setSubmitting}, login) => {
    console.log("Login Attempt",values);
  }
})(Signup))
