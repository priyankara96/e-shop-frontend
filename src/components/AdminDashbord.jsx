import React, { Component } from "react";
import "./Dashboard.css";
import background from "../images/admin-background.jpg";
import image1 from "../images/Admin.png";
import image2 from "../images/Add.png";

export default class MainDashboard extends Component {
	render() {
		return (
			<div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
				<div className="page">
					<div>
						<br />
						<div className="text-center">
							<h1 className="text-primary">
								<font face="Comic sans MS" size=" 6">
									Admin Dashboard
								</font>
							</h1>
						</div>

						<div class="py-3">
							<div class="container">
								<div class="row hidden-md-up">
									{/* 01 */}
									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src={image1}
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a
															href="/AuthenticationManagementDashboard"
															style={{ textDecoration: "none", color: "Info" }}
														>
															{" "}
															<h4>Authentication<br/>Management</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* 02 */}
									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src="https://kartkonnect.com/wp-content/uploads/2020/08/new14.jpg"
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="/order" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															<h4>Order<br/>Management</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>

									{/* 03 */}

									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src="https://www.paatham.com/assets/images/agetab/Fee%20Management.webp"
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="/admin/payment" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															<h4>Payment<br/>Management</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* 04 */}
									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src="https://shipsy.io/wp-content/uploads/2021/05/Blog-119-2.jpg"
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="/deliveryService" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															<h4>Delivery Service<br/>Management</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<br />
								{/* 05 */}
								<div class="row">
									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src="https://images.theconversation.com/files/236859/original/file-20180918-158240-1jd9gm6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="/admin" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															<h4>Statistics<br/>&nbsp;</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* 06 */}
									<div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src="https://www.pcworld.com/wp-content/uploads/2022/07/gmail_logo-100758589-orig.jpg?quality=50&strip=all"
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="/mailer" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															<h4>Send Mail<br/>&nbsp;</h4>
															{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* 07 */}
									{/* <div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src={image2}
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="#" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															07{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div> */}
									{/* 08 */}
									{/* <div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src={image2}
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="#" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															08{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								<br />
								{/* 09 */}
								<div class="row">
									{/* <div class="col-md-3">
										<div className="card-container">
											<div class="card text-center" style={{ backgroundColor: "#F9FAFC" }}>
												<div class="card-block">
													<br />
													<img
														style={{ height: 130, width: 180 }}
														class="rounded-circle"
														src={image2}
														alt="Card image cap"
													/>
													<h4 class="card-title"></h4>
													<button type="button" class="btn btn-light btn-lg">
														<a href="#" style={{ textDecoration: "none", color: "Info" }}>
															{" "}
															09{" "}
														</a>
													</button>
												</div>
											</div>
										</div>
									</div> */}
								</div>
								<br></br>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
