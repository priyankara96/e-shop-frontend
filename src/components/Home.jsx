import React, { Component } from "react";
import HomeCart from "./Product-management/Home";
import Slider from "./Product-management/Slider";

export default class Home extends Component {
	render() {
		return (
			<div>
<Slider/>

<br/><hr/>
<br/>
<div className="text-center">
<h1><font face = "Comic sans MS" size =" 6">Our Products</font></h1></div>
<br/><br/>
				<HomeCart /> <br/><br/>
				{/* <h1>e-shop-frontend</h1> */}
				
			</div>
		);
	}
}
