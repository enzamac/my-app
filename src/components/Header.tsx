import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/greenmilelogo.png";
const Header = () => {
  return (
    <div className="navbar container mb-4">
      <div className="navbar-brand">
        <Link to="/home">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav">
        
        
        
        
      </div>
    </div>
  );
};

export default Header;

//<Link to="/"></Link>