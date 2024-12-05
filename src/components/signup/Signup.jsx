import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [Inputs,setInputs] = useState({email:"",password:""})
  const change = (e)=>{
    const {name, value} = e.target;
    setInputs({...Inputs,[name]:value})
  }

  const submit = async(e)=>{
    e.preventDefault();
    console.log(Inputs)
  } 
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <h3 className="sub-signup">sign up with:</h3>
        <form>
          <button className="signup-button">
            <i class="fa-brands fa-apple"></i> Sign up with Apple
          </button>
          <button className="signup-button">
            <i class="fa-brands fa-google"></i> Sign up with Google
          </button>
          <div className="divider">
            <hr className="line" />
            <h4 className="divider-text">or</h4>
            <hr className="line" />
          </div>
          <h3 className="sub-signup">Create account by using email:</h3>
          <div className="form-element">
            <label htmlFor="email" className="label-text">
              Your Email
            </label>
            <input
              type="email"
              className="input-signup"
              placeholder="abc@gmail.com"
              name="email"
              onChange={change}
              value={Inputs.email}
            />
            <label htmlFor="password" className="label-text">
              Your Password
            </label>
            <input
              type="password"
              className="input-signup"
              placeholder="password"
              name="password"
              onChange={change}
              value={Inputs.password}
            />
            <button className="submit" onClick={submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
