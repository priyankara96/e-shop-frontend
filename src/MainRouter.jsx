import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";



import Home from "./components/Home";

// Chanduni
import { SidebarDemo } from "./components/Navigators/Sidebar";
import { NavBar } from "./components/Navigators/NavBar";
import { default as CreateOrders } from "./components/order-management/CreateOrder";
import { default as EditOrder } from './components/order-management/EditOrder';
import { default as HomeOrder } from './components/order-management/HomeOrder';
import { default as OrderPost } from './components/order-management/OrderPost';
import { default as OrderReport } from './components/order-management/OrderReport';



export default class MainRouter extends Component {
  render() {
    return (
          <BrowserRouter>
            <div style={{ backgroundColor: "#ffff", margin: "0" }}>
            <SidebarDemo />

              <Route path="/" exact component={Home} />
              <NavBar />
              {/* Chanduni */}
          <Route path="/order/create" exact component={CreateOrders} />
          <Route path="/order/update/:id" exact component={EditOrder} />
          <Route path="/order/home" exact component={HomeOrder} />
          <Route path="/order/post/:id" exact component={OrderPost} />
          <Route path="/order/report" exact component={OrderReport} />
             
            </div>
          </BrowserRouter>
    );
  }
}