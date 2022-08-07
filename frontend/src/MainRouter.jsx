import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";



import Home from "./components/Home";



export default class MainRouter extends Component {
  render() {
    return (
          <BrowserRouter>
            <div style={{ backgroundColor: "#D0D3D4", margin: "0" }}>


              <Route path="/" exact component={Home} />
             
            </div>
          </BrowserRouter>
    );
  }
}