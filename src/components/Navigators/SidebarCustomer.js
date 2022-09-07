import React, { Component } from "react";
import "./Nav.css";
import logo from "../../images/logo1.png";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export class SidebarCustomerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeft: false,
    };
  }

  render() {
  
    return (
      <div>
        <div className="card">
          
          <div className="row" style={{backgroundColor:'#0b22a1'}}>
            <div className="col-3">
            </div>
            <div className="col-8 alignitems" style={{backgroundColor:'#0b22a1'}}>
            <h1 style={{color:'white'}}><img width={80} src={logo} alt="logo" className="logo" />&nbsp;E-SHOP</h1>
            </div>
            <div style={{textAlign:'center'}}>  <h4 style={{color:'white'}}>Sri Lanka Best Online Electronic Item Store</h4>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
