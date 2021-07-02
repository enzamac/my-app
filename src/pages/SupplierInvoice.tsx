import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const SupplierInvoice = () => {
  return (
    <div className="card article-form p-5">
      <h3>SUPPLIER DASHBOARD</h3>
     
      <div className="nav">
        <Link to="/supplierorder">Orders</Link>
        <Link to="/supplierinvoice">Invoices</Link>
        <Link to="/supplierpackage">Packages</Link>
        <Link to="/supplierprofile">Profile</Link>
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

export default SupplierInvoice;
