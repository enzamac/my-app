import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const Supplier = () => {
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
      
    
      <p><a href="#">Register New Supplier</a></p>
      
      <p>Supplier 1 - <a href="#">Edit</a></p>
      
      <p>Supplier 2 - <a href="#">Edit</a></p>
      
      <p>Supplier 3 - <a href="#">Edit</a></p>
     
      <p>Supplier 4 - <a href="#">Edit</a></p>
      
      <p>Supplier 5 - <a href="#">Edit</a></p>
    </div>
  );
};

export default Supplier;
