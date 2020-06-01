import React, {Component} from 'react'
import Field from '../Common/Field'
import {withFormik} from 'formik'
import * as Yup from 'yup'
const fields={
  sections:[
      [
      {name:"name", elementName:"input", type:"text",  placeholder:"Your Name*"},
      {name:"email", elementName:"input", type:"text",  placeholder:"Your Email*"},
      {name:"phone", elementName:"input", type:"text",  placeholder:"Your Phone Number*"}
    ],
    [
      {name:"message", elementName:"textarea", type:"text",  placeholder:"Type Your Message*"}
    ]
  ]
}

class Contact extends Component{

  render(){
    return (
      <section className="page-section" id="contact">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <form name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                  <div className="row align-items-stretch mb-5">
                      {fields.sections.map((section, sectionIndex)=>{
                          return (
                            <div className="col-md-6" key={sectionIndex} >
                                {section.map((field,i)=>{
                                  return <Field
                                  {...field}
                                  key={i}
                                  value={this.props.values[field.name]}
                                  name={field.name}
                                  onChange={this.props.handleChange}
                                  onBlur={this.props.handleBlur}
                                  touched={(this.props.touched[field.name])}
                                  errors= {this.props.errors[field.name]}
                                  />
                                })}
                            </div>
                          )
                      })}
                  </div>
                  <div className="text-center">
                      <div id="success"></div>
                      <button className="btn btn-primary btn-xl text-uppercase"
                       id="sendMessageButton" type="submit">
                       Send Message</button>
                  </div>
              </form>
          </div>
      </section>
    )
  }
}

export default withFormik({
   mapPropsToValues:()=>({
    name:"",
    email:"",
    phone:"",
    message:""
  }),
validationSchema: Yup.object().shape({
  name:Yup.string().min(3,`
    Name must be more than
     three characters
    `)
    .required(`You must
      give us your name`),
    email:Yup.string().email(`
      please provide a valid email`)
      .required(),
      phone:Yup.string().min(10,`
        Please provide a valid phone number`)
        .max(15,`Your phone number is too long`)
        .required(`Phone number is required`),
        message:Yup.string().min(500,`
          You need to provide us with more description`)
          .required()

}),
  handleSubmit:(values,{setSubmitting})=>{
    console.log(values);
      alert("You have submitted form",JSON.stringify(values))
  }
  })(Contact)
