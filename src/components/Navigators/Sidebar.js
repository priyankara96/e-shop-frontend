import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "./Nav.css";
import logo from "../../images/logo1.png";

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
					<Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
						<h2>Home</h2>
						<h2>Products</h2>
						<h2>About Us</h2>
						<h2>Contact Us</h2>
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
