import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";

// Priyankara
import Header from "./components/Header";
import AdminDashbord from "./components/AdminDashbord";
import Signin from "./components/AuthenticationManagement/Signin";
import Profile from "./components/AuthenticationManagement/Profile";
import DeleteProfile from "./components/AuthenticationManagement/DeleteProfile";
import Registration from "./components/AuthenticationManagement/Registration";
import AMDashboard from "./components/AuthenticationManagement/AMDashboard";
import Add_Admin from "./components/AuthenticationManagement/Add_Admin";
import Add_Customer from "./components/AuthenticationManagement/Add_Customer";

// Chanduni
// import { SidebarDemo } from "./components/Navigators/Sidebar";
// import { NavBar } from "./components/Navigators/NavBar";
import { default as CreateOrders } from "./components/order-management/CreateOrder";
import { default as EditOrder } from "./components/order-management/EditOrder";
import { default as HomeOrder } from "./components/order-management/HomeOrder";
import { default as OrderPost } from "./components/order-management/OrderPost";
import { default as OrderReport } from "./components/order-management/OrderReport";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Product-management/Cart";
import DeliveryService from "./components/Delivery-Service/DeliveryService";
import ContactUs from "./components/Contact-Us/Contact-Us";
import AdminMainDashBoard from "./components/AdminMainDashboard/AdminMainDashboard";
import order from "./components/order-management/order";

// Nipuna 
import CreatePayment from "./components/Payment/CreatePayemnt";
import EditPayment from "./components/Payment/EditPayment";
import PostPayementDetails from "./components/Payment/PostPaymentDetails";
import PaymentDetailsTable from "./components/Payment/PaymentDetailsTable";

export default class MainRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<CartProvider>
					<div style={{ backgroundColor: "#ffff", margin: "0" }}>
						{/* <SidebarDemo />
						<NavBar /> */}
						<Header />

						{/* Priyankara */}
						<Route path="/" exact component={Home} />
						<Route path="/AdminDashbord" exact component={AdminDashbord} />
						<Route path="/login" exact component={Signin} />
						<Route path="/Profile" exact component={Profile} />
						<Route path="/DeleteProfile" exact component={DeleteProfile} />
						<Route path="/Registration" exact component={Registration} />
						<Route path="/AuthenticationManagementDashboard" exact component={AMDashboard} />
						<Route path="/Add_Admin" exact component={Add_Admin} />
						<Route path="/Add_Customer" exact component={Add_Customer} />

						{/* Chanduni */}
						<Route path="/order/create" exact component={CreateOrders} />
						<Route path="/order/update/:id" exact component={EditOrder} />
						<Route path="/order/home" exact component={HomeOrder} />
						<Route path="/order/post/:id" exact component={OrderPost} />
						<Route path="/order/report" exact component={OrderReport} />
						<Route path="/cart" exact component={Cart}></Route>
						<Route path="/order" exact component={order}></Route>

						{/* Ashen */}
						<Route path="/deliveryService" exact component={DeliveryService}></Route>
						<Route path="/contact-us" exact component={ContactUs}></Route>
						<Route path="/admin" exact component={AdminMainDashBoard}></Route>

						{/* Nipuna */}
						<Route path="/create" exact component={CreatePayment}></Route>
						<Route path="/payment/edit/:id" exact component={EditPayment}></Route>
						<Route path="/postdetails" exact component={PostPayementDetails}></Route>
						<Route path="/tablehome" exact component={PaymentDetailsTable}></Route>
					</div>
				</CartProvider>
			</BrowserRouter>
		);
	}
}
