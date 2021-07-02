import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const Invoice = () => {
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
      
      

      <p>Invoice 1 - <a href="#">View</a></p>
      
      <p>Invoice 2 - <a href="#">View</a></p>
      
      <p>Invoice 3 - <a href="#">View</a></p>
     
      <p>Invoice 4 - <a href="#">View</a></p>
      
      <p>Invoice 5 - <a href="#">View</a></p>
    </div>
  );
};

export default Invoice;
