import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../img/logo.png";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navleft">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navRight">
        <Link smooth to="#home" className="link">
          HOME
        </Link>
        <Link smooth to="#about" className="link">
          ABOUT US
        </Link>
        <Link smooth to="#services" className="link">
          OUR SERVICES
        </Link>
        <Link smooth to="#contact" className="link">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
