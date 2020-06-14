import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import {withFormik} from 'formik';
import * as Yup from 'yup'

const styles = theme=>({
  container:{
    position:'inherit'
  }
})

class AddPost extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <h1> Add Post</h1>

      </div>
    )
  }
}

const mapStateToProps =state=>({
  auth: state.auth,
  admin:  state.admin
});

const mapDispatchToProps =dispatch=>({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValue:()=>({
    title:'',
    slug:'',
    createdAt:'',
    status:false
  }),
  validationSchema: Yup.object().shape({

  }),
  handleSubmit:(values, setSubmitting)=>{

  }
})(withStyles(styles)(AddPost)));
