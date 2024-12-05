import React, { useState } from "react";
import "./navbar.css";
import logo from '../../img/acm_logo.jpg'
import Button from "./Button";

const Navbar = ({log,setLog}) => {
  const [T,setT] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand" href="#">
          <img
            src={logo} // Transparent background logo
            alt="ACM Tech Club Logo"
            width="80"
            height="80"
          />
        </a>
        <a className="navbar-brand" href="#">
          ACM Tech Club
        </a>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* `ms-auto` aligns items to the right */}
            <li className="nav-item">
              <a className="nav-link active custom-font" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="/event">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="/quiz">
                Quiz
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="/team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="/zenith">
                Zenith
              </a>
            </li>
          </ul>
          <a href="/signup" className="mx-3"><button className="btn btn-primary" onClick={()=>{setLog(false)}}>{log ? "Log Out":"Log In"}</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
