import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "./Nav.css";
import logo from "../../images/logo.jpg";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export class SidebarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleLeft: false,
    };
  }

  render() {
    const customIcons = (
      <React.Fragment>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-print" />
        </button>
        <button className="p-sidebar-icon p-link mr-1">
          <span className="pi pi-arrow-right" />
        </button>
      </React.Fragment>
    );

    return (
      <div>
        <div className="card">
          <Sidebar
            visible={this.state.visibleLeft}
            onHide={() => this.setState({ visibleLeft: false })}
          >
            <h2>Home</h2>
          </Sidebar>
          <div className="row">
            <div className="col-3">
              <Button
                icon="pi pi-arrow-right"
                onClick={() => this.setState({ visibleLeft: true })}
                className="mr-2"
              />
            </div>
            <div className="col-8 alignitems">
            <h1><img width={80} src={logo} alt="logo" className="logo" />&nbsp;E-SHOP</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
