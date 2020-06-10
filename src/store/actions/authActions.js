import API from '../../utils/api'

export const login =(email,pass )=>{
return (dispatch)=>{

    API.login(email,pass, res=>{
    console.log("Result", res.data);
       dispatch({
        type:'LOGIN',
        payload:{
            email:email,
            token:res.data.id,
            userId: res.data.userId
        }
      })
    })
  }
}
// return{
//   type:'LOGIN',
//   payload:{
//
//   }

export const register =(email, pass)=>{
  return {
    type:'REGISTER',
    payload:{email,pass}
  }
}
