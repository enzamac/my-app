import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import Header from "./components/Header";
import Supplier from "./pages/Supplier";
import Loader from "./pages/Loader";
import Invoice from "./pages/Invoice"
import Package from "./pages/Package"
import SupplierOrder from "./pages/SupplierOrder";
import SupplierInvoice from "./pages/SupplierInvoice";
import SupplierPackage from "./pages/SupplierPackage";
import SupplierProfile from "./pages/SupplierProfile";
import ClientOrder from "./pages/ClientOrder";
import ClientPackage from "./pages/ClientPackage";
import ClientProfile from "./pages/ClientProfile";
import LoaderBundle from "./pages/LoaderBundle";
import LoaderInfo from "./pages/LoaderInfo";
import LoaderProfile from "./pages/LoaderProfile";

import Home from "./pages/Home";

import Logout from "./pages/Logout";

import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/supplier">
            <Supplier />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/package">
            <Package />
          </Route>
          <Route path="/supplierorder">
            <SupplierOrder />
          </Route>
          <Route path="/supplierinvoice">
            <SupplierInvoice />
          </Route>
          <Route path="/supplierpackage">
            <SupplierPackage />
          </Route>
          <Route path="/supplierprofile">
            <SupplierProfile />
          </Route>
          <Route path="/clientorder">
            <ClientOrder />
          </Route>
          <Route path="/clientpackage">
            <ClientPackage />
          </Route>
          <Route path="/clientprofile">
            <ClientProfile />
          </Route>
          <Route path="/loaderbundle">
            <LoaderBundle />
          </Route>
          <Route path="/loaderinfo">
            <LoaderInfo />
          </Route>
          <Route path="/loaderprofile">
            <LoaderProfile />
          </Route>

          <Route path="/Logout">
            <Logout />
          </Route>
          
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
