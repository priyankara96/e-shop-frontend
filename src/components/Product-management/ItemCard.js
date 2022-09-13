import { fontSize } from "@mui/system";
import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
	const { addItem } = useCart();
	return (
		<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
			<div className="card p-0 overflow-hidden h-100 shadow" style={{ borderRadius: "20px", borderColor: "blue" }}>
				<img src={props.img} className="card-img-top img-fluid" />
				<div className="card-body text-center">
					<h2 className="card-title">{props.title}</h2>
					<h5 className="card-title">Availability : {props.desc}</h5>
					<h3 className="card-title">Rs.{props.price}</h3>
					<button className="btn btn-primary" onClick={() => addItem(props.item)}>
						<a href="/cart" style={{ textDecoration: "none", color: "white", fontSize:'15px'}}>
							Add to Cart{" "}
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Itemcard;
