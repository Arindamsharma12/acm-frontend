import React, { useState } from "react";
import "./authPage.css"; // For custom styles
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
function AuthPage({log,setLog}) {
  const [isLogin, setIsLogin] = useState(true);
  const [Inputs,setInputs] = useState({email:"",password:"",fullName:"",username:""})
  const history = useNavigate()
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  

  return (
    <div className="auth-page d-flex align-items-center justify-content-center vh-100">
      <div className="auth-container p-4 shadow-lg rounded">
        <h2 className="text-center mb-4 text-light">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <Login islogin={isLogin} toggleForm={toggleForm}
        setLog={setLog}
        ></Login>
        <Signup islogin={isLogin} toggleForm={toggleForm}></Signup>
        </div>
    </div>
  );
}

export default AuthPage;
