import React from "react";
import Itemcard from "./ItemCard";
import data from "./data";
import "./productstyle.css";

const HomeCart = () => {
	return (
		<div>
			<section className="py-6 container">
				<div className="row justify-content-center" style={{ height: "600px", overflowY: "scroll" }}>
					{data.productData.map((item, index) => {
						return (
							<Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default HomeCart;
