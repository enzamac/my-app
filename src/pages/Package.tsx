import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const Package = () => {
  return (
    <div className="card article-form p-5">
      <h3>ADMIN DASHBOARD</h3>
      <div className="nav">

        <Link to="/supplier">Suppliers</Link>
        <Link to="/loader">Loaders</Link>
        <Link to="/invoice">Invoices</Link>
        <Link to="/package">Packages</Link>
        <Link to="/logout">Logout</Link>
      </div>
      
      
      <p>Package 1 - <a href="#">Track</a></p>
      
      <p>Package 2 - <a href="#">Track</a></p>
      
      <p>Package 3 - <a href="#">Track</a></p>
     
      <p>Package 4 - <a href="#">Track</a></p>
      
      <p>Package 5 - <a href="#">Track</a></p>
    </div>
  );
};

export default Package;
