import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <div className="nav-section">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-list">
        <ul >
          <li className="active">Home</li>
          <li>About</li>
          <li>Classes</li>
          <li>Teachers</li>
          <li>Gallery</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="join">
        <button className="btn">Join Classes</button>
      </div>
    </div>
  );
};

export default Nav;