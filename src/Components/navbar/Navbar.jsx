import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navleft">
        <img
          src="https://www.businesspromoz.com/wp-content/uploads/2021/09/cropped-logo-sleeping.jpg"
          alt="logo"
        />
      </div>
      <div className="navRight">
        <Link to="/" className="link">
          HOME
        </Link>
        <Link to="/about" className="link">
          ABOUT US
        </Link>
        <Link to="/services" className="link">
          OUR SERVICES
        </Link>
        <Link to="/contact" className="link">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
