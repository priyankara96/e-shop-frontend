import React from "react";
import useUser from "../services/UserContext";
import useRequest from "../services/RequestContext";
import { useHistory } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { SidebarCustomerDemo } from "../components/Navigators/SidebarCustomer";
import { SidebarAdminDemo } from "../components/Navigators/SidebarAdmin";
import cart from "../images/cart.jpg";
import user1 from "../images/usersone.png";

function Header() {
	const { user } = useUser();
	console.log("User", user);

	const { updateToken } = useRequest();
	const { setUser } = useUser();

	const history = useHistory();
	const logout = async () => {
		await updateToken();
		setUser({});

		history.push("/login");
		window.location.reload(true);
	};

	if (user == undefined) {
		return (
			<>
				<SidebarCustomerDemo />
				<div>
					{" "}
					{/* ----------------------- When there is no login opportunity */}
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
										<a class="nav-link" href="/contact-us">
											Contact Us
										</a>
									</div>
								</div>
								<a href="/login">
									{" "}
									{/* Don't change link */}
									<button className="imagebutton" style={{ marginRight: "1%" }}>
										<img src={cart} style={{ width: "50px", height: "50px" }} />
									</button>
								</a>

								<a href="/login">
									{" "}
									{/* Don't change link */}
									<button className="imagebutton" style={{ marginRight: "1%" }}>
										<img src={user1} style={{ width: "50px", height: "50px" }} />
									</button>
								</a>

								<form class="form-inline my-2 my-lg-0">
									<a class="nav-link" href="/login" onClick={logout}>
										<AiOutlineLogin />
										&nbsp; Sign in &nbsp;
									</a>
								</form>
							</div>
						</nav>
					</div>
				</div>
			</>
		);
	} else if (user.role == "Customer") {
		//  ------------------- When there is a Customer login opportunity
		return (
			<>
				<SidebarCustomerDemo />
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

									<a class="nav-link" href="/">
										Contact Us
									</a>
								</div>
							</div>

							<a href="#">
								<button className="imagebutton" style={{ marginRight: "1%" }}>
									<img src={cart} style={{ width: "50px", height: "50px" }} />
								</button>
							</a>

							<a href="/Profile">
								<button className="imagebutton" style={{ marginRight: "1%" }}>
									{" "}
									{/* href="/Profile" */}
									<img src={user1} style={{ width: "50px", height: "50px" }} />
								</button>
							</a>

							<form class="form-inline my-2 my-lg-0">
								<a class="nav-link" onClick={logout}>
									<AiOutlineLogin />
									&nbsp; Logout &nbsp;
								</a>
							</form>
						</div>
					</nav>
				</div>
			</>
		);
	} else {
		//  --------------------------------------------------- When there is an admin login opportunity
		return (
			<>
				<SidebarAdminDemo />
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
									<a class="nav-link active" aria-current="page" href="/AdminDashbord">
										Home
									</a>
								</div>
							</div>

							<a href="/Profile">
								<button className="imagebutton" style={{ marginRight: "1%" }}>
									{" "}
									{/* href="/Profile" */}
									<img src={user1} style={{ width: "50px", height: "50px" }} />
								</button>
							</a>

							<form class="form-inline my-2 my-lg-0">
								<a class="nav-link" onClick={logout}>
									<AiOutlineLogin />
									&nbsp; Logout &nbsp;
								</a>
							</form>
						</div>
					</nav>
				</div>
			</>
		);
	}
}
export default Header;
