import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const Loader = () => {
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
      
      
      <p><a href="#">Register New Loader</a></p>
      
      <p>Loader 1 - <a href="#">Edit</a></p>
      
      <p>Loader 2 - <a href="#">Edit</a></p>
      
      <p>Loader 3 - <a href="#">Edit</a></p>
     
      <p>Loader 4 - <a href="#">Edit</a></p>
      
      <p>Loader 5 - <a href="#">Edit</a></p>
    </div>
  );
};

export default Loader;
