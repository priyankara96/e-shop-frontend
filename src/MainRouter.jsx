import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";

// Priyankara
import Signin from "./components/AuthenticationManagement/Signin";
import Profile from "./components/AuthenticationManagement/Profile";
import Registration from "./components/AuthenticationManagement/Registration";

// Chanduni
import { SidebarDemo } from "./components/Navigators/Sidebar";
import { NavBar } from "./components/Navigators/NavBar";
import { default as CreateOrders } from "./components/order-management/CreateOrder";
import { default as EditOrder } from "./components/order-management/EditOrder";
import { default as HomeOrder } from "./components/order-management/HomeOrder";
import { default as OrderPost } from "./components/order-management/OrderPost";
import { default as OrderReport } from "./components/order-management/OrderReport";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Product-management/Cart";
import DeliveryService from "./components/Delivery-Service/DeliveryService";
import ContactUs from "./components/Contact-Us/Contact-Us";

export default class MainRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<CartProvider>
					<div style={{ backgroundColor: "#ffff", margin: "0" }}>
						<SidebarDemo />

						<NavBar />

						{/* Priyankara */}
						<Route path="/" exact component={Home} />
						<Route path="/login" exact component={Signin} />
						<Route path="/Profile" exact component={Profile} />
						<Route path="/Registration" exact component={Registration} />

						{/* Chanduni */}
						<Route path="/order/create" exact component={CreateOrders} />
						<Route path="/order/update/:id" exact component={EditOrder} />
						<Route path="/order/home" exact component={HomeOrder} />
						<Route path="/order/post/:id" exact component={OrderPost} />
						<Route path="/order/report" exact component={OrderReport} />
						<Route path="/cart" exact component={Cart}></Route>

						{/* Ashen */}
						<Route path="/deliveryService" exact component={DeliveryService}></Route>
						<Route path="/contact-us" exact component={ContactUs}></Route>
					</div>
				</CartProvider>
			</BrowserRouter>
		);
	}
}
