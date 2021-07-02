import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
import { Link } from "react-router-dom";
const SupplierPackage = () => {
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
      
    
      <p><a href="#">Create Package</a></p>
      
      <p>Package 1 - <a href="#">Track</a></p>
      
      <p>Package 2 - <a href="#">Track</a></p>
      
      <p>Package 3 - <a href="#">Track</a></p>
     
      <p>Package 4 - <a href="#">Track</a></p>
      
      <p>Package 5 - <a href="#">Track</a></p>
    </div>
  );
};

export default SupplierPackage;
