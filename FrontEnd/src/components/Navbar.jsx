import React from "react";

const Navbar = () => {
return <>
  <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="/">Logo</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button className="navbar-link" href="/">Home</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" href="/about">About</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" href="/services">Services</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" href="/contact">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
</>
};

export default Navbar;
