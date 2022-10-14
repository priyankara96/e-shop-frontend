import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "./Nav.css";
import logo from "../../images/logo1.png";
import dashboard from "../../images/dashboard.png";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

export class SidebarAdminDemo extends Component {
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
					<Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
						<div className="text-center">
							<a href="/AdminDashbord">
								<img width={50} src={dashboard} alt="dashboard" className="dashboard" />
							</a>
						</div>
						<a href="/AdminDashbord">
							<h2>Home</h2>
						</a>
						<a href="/AuthenticationManagementDashboard">
							<h2>Authentication Management</h2>
						</a>
						<a href="/order">
							<h2>Order Management</h2>
						</a>
						<a href="/admin/payment">
							<h2>Payment Management</h2>
						</a>
						<a href="/deliveryService">
							<h2>Delivery Services</h2>
						</a>
					</Sidebar>
					<div className="row" style={{ backgroundColor: "#0b22a1" }}>
						<div className="col-3">
							<Button
								icon="pi pi-align-justify"
								onClick={() => this.setState({ visibleLeft: true })}
								className="mr-2"
								style={{ backgroundColor: "#0b22a1", marginTop: "10%", marginLeft: "10%" }}
							/>
						</div>
						<div className="col-8 alignitems" style={{ backgroundColor: "#0b22a1" }}>
							<h1 style={{ color: "white" }}>
								<img width={80} src={logo} alt="logo" className="logo" />
								&nbsp;E-SHOP
							</h1>
						</div>
						<div style={{ textAlign: "center" }}>
							{" "}
							<h4 style={{ color: "white" }}>Sri Lanka Best Online Electronic Item Store</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
