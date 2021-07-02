import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const ClientPackage = () => {
  return (
    <div className="card article-form p-5">
      <h3>CLIENT DASHBOARD</h3>
     
      <div className="nav">
        <Link to="/clientorder">Orders</Link>
  
        <Link to="/clientpackage">Packages</Link>
        <Link to="/clientprofile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
      
    
      <p><a href="#">Track package</a></p>
      
      
    </div>
  );
};

export default ClientPackage;
