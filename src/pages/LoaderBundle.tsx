import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const LoaderBundle = () => {
  return (
    <div className="card article-form p-5">
      <h3>LOADER DASHBOARD</h3>
     
      <div className="nav">
        <Link to="/loaderbundle">Bundles</Link>
  
        <Link to="/loaderinfo">Info</Link>
        <Link to="/loaderprofile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
      
      <p><a href="#">Create new bundle</a></p>
      <p>Bunlde 1 - <a href="#">View</a></p>
      <p>Bunlde 2 - <a href="#">View</a></p>
      <p>Bunlde 3 - <a href="#">View</a></p>
      <p>Bunlde 4 - <a href="#">View</a></p>
      <p>Bunlde 5 - <a href="#">View</a></p>
      
    </div>
  );
};

export default LoaderBundle;
