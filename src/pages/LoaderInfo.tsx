import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const LoaderInfo = () => {
  return (
    <div className="card article-form p-5">
      <h3>LOADER DASHBOARD</h3>
     
      <div className="nav">
        <Link to="/loaderbundle">Bundles</Link>
  
        <Link to="/loaderinfo">Info</Link>
        <Link to="/loaderprofile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
      
      <p><a href="#">Loading Information</a></p>
      
      
    </div>
  );
};

export default LoaderInfo;
