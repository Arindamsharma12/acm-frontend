import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Log in</h2>
                <h3 className="sub-login">log in with:</h3>
                <form>
                    <button className="login-button"><i class="fa-brands fa-apple"></i> Log in with Apple</button>
                    <button className="login-button"><i class="fa-brands fa-google"></i> Log in with Google</button>
                    <div className="divider">
                        <hr className="line" />
                        <h4 className="divider-text">or</h4>
                        <hr className="line" />
                    </div>
                    <h3 className="sub-login">Log in by using email:</h3>
                    <div className="form-element">
                        <label htmlFor="email" className="label-text">Your Email</label>
                        <input type="email" className="input-login" placeholder="abc@gmail.com" />
                        <label htmlFor="password" className="label-text">Your Password</label>
                        <input type="password" className="input-login" placeholder="password" />
                        <button className="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
