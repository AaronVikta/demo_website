import axios from 'axios'

const host ='http://localhost:8081'

const API = {
login: (email, pass, success) =>{
  axios.post(`${host}/api/users/login`,{email:email,password:pass})
  .then(res =>{
    success(res)
  });
  }
}

export default API
