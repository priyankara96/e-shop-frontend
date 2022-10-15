import React, { Component } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import cart from "../../images/cart.jpg";
import user from "../../images/usersone.png";

export class NavBar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="#"></a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div class="navbar-nav">
								<a class="nav-link active" aria-current="page" href="/">
									Home
								</a>
								<a class="nav-link" href="#">
									Products
								</a>
								<a class="nav-link" href="#">
									About US
								</a>
								<a class="nav-link">Contact Us</a>
							</div>
						</div>
						<button className="imagebutton" style={{ marginRight: "1%" }}>
							<img src={cart} style={{ width: "50px", height: "50px" }} />
						</button>

						<button className="imagebutton" style={{ marginRight: "1%" }}>
							{" "}
							{/* href="/Profile" */}
							<img src={user} style={{ width: "50px", height: "50px" }} />
						</button>

						<form class="form-inline my-2 my-lg-0">
							<a class="nav-link" href="/login">
								<AiOutlineLogin />
								&nbsp; Sign in &nbsp;
							</a>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}
