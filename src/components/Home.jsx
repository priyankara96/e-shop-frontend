import React, { Component } from "react";
import HomeCart from "./Product-management/Home";
import Slider from "./Product-management/Slider";

export default class Home extends Component {
	render() {
		return (
			<div>
<Slider/>
				<HomeCart />
				{/* <h1>e-shop-frontend</h1> */}
				
			</div>
		);
	}
}
