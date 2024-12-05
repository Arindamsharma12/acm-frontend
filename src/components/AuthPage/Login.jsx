import React from 'react'
import { useState } from 'react'
import './authPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({islogin,toggleForm,setLog}) => {
  const history = useNavigate()
  const [Inputs,setInputs] = useState({email:"",password:""})
  const change = (e)=>{
    const {name,value} = e.target;
    setInputs({...Inputs,[name]:value})
  }
  const submit = async(e)=>{
    e.preventDefault()
      await axios.post(
        'https://acm-backend-r9ka.onrender.com/api/v1/user/login', Inputs
      ).then((response)=>{
          if(response.data.message === "User does not exist" || response.data.message === "Invalid user credentials"){
            alert(response.data.message);
          }
          else{
            alert(response.data.message)
            setLog(true)
            setInputs({email:"",password:""})
            history('/')
          }
      })
  }
  if(islogin){
    return <div>
      <form>
      <div className="mb-3">
            <label className="form-label text-light">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={Inputs.email}
              onChange={change}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={Inputs.password}
              onChange={change}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={submit}>
            {islogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-light mt-3">
          {islogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="toggle-link" onClick={toggleForm}>
            {islogin ? "Sign Up" : "Login"}
          </span>
        </p>
    </div>
  }
}

export default Login
