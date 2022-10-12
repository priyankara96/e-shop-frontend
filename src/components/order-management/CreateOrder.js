import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import insert from "../../images/insert.gif";
import "./myStyles.css";

export default class CreateOrders extends Component {
	//intialization

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			postalNo: "",
			street: "",
			town: "",
			contactNo: "",
			orderDate: "",
			status: "Pending",
			// cartTotal: "",
		};
	}

	componentDidMount() {
		const cart = localStorage.getItem("react-use-cart");
		const cartdata = JSON.parse(cart);
		console.log(cartdata.cartTotal);

		this.setState({
			cartTotal: cartdata.cartTotal,
		});
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			...this.state,
			[name]: value,
		});
	};
	//save to db
	onSubmit = (e) => {
		e.preventDefault();

		const { name, postalNo, street, town, contactNo, orderDate, status, cartTotal } = this.state;

		const data = {
			name: name,
			postalNo: postalNo,
			street: street,
			town: town,
			contactNo: contactNo,
			orderDate: orderDate,
			status: status,
			cartTotal: cartTotal,
		};
		//window.location='/payhome'
		// console.log(data)

		//validation

		const re = /^[0-9\b]+$/;
		if (name == "" || postalNo == "" || street == "" || town == "" || contactNo == "" || orderDate == "") {
			swal("Please fill the form correctly", "Form values cannot be empty", "error");
		} else if (name.length < 2) {
			swal("User name invalid", "length should be greater than 2", "error");
		} else if (!re.test(String(contactNo)) || contactNo.length != 10) {
			swal("Contact Number invalid", "contact number should be valid pattern", "error");
		} else if (town.length < 2) {
			swal(" Please enter valid town", "length should be greater than 2", "error");
		} else {
			swal({
				title: "Are you sure?",
				text: `Name: ${this.state.name} | Postal No.: ${this.state.postalNo} | Street: ${this.state.street} | Town: ${this.state.town} | Contact No: ${this.state.contactNo} | Status: ${this.state.status} | Total: ${this.state.cartTotal}`,
				icon: "info",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					axios.post("http://localhost:4000/order/save", data).then((res) => {
						if (res.data.success) {
							localStorage.removeItem("react-use-cart");
							this.setState({
								name: "",
								postalNo: "",
								street: "",
								town: "",
								contactNo: "",
								orderDate: "",
								status: "Pending",
							});
							// swal("Order Added Successfully!", "Your oder will be accepted"+ `${this.state.status}`, "success");
						}
					});
					swal("Order Added Successfully!", {
						icon: "success",
					});
				} else {
					swal("Your Order is not completed!");
				}
			});
		}
	};
	demo = () => {
		//setState
		this.setState({
			name: "Chanduni Nethmini",
		});

		this.setState({
			postalNo: "259",
		});

		this.setState({
			street: "Lake road",
		});

		this.setState({
			town: "Colombo2",
		});
		this.setState({
			contactNo: "0710000000",
		});
	};

	render() {
		return (
			<div>
				<div className="alignment">
					<h3>Please enter correct information to Place your order</h3>
				</div>
				<div class="row">
					<div class="col-6">
						<img src={insert} className="rounded-circle" style={{ width: "70%", height: "70%", marginLeft: "30%" }} />

						<section id="hire">
							<div className="">
								<div class="container-fluid">
									<div class="Jumbotron jumbotron-fluid">
										<div className="container hire">
											<br />
											<marquee direction="left">
												<p class="display-3 ">Thanks for choosing E-SHOP</p>
											</marquee>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div class="col-6">
						<div style={{}}>
							<div className="" style={{ marginTop: "%" }}>
								<div className="card card1" style={{ width: "70%" }}>
									<div className="col-md-8 mt-4 mx-auto">
										<h1 className="text-center">
											<b></b>{" "}
										</h1>

										<form className="needs-validation" align="center" style={{ width: "110%" }}>
											<div className="form-group" style={{ marginBottom: "15px" }}>
												<label style={{ marginBottom: "5px" }} className="topic">
													<b>Customer Name: </b>
												</label>
												<input
													type="text"
													id="validationTooltip01"
													className="form-control"
													name="name"
													placeholder="Enter Your Name"
													value={this.state.name}
													onChange={this.handleInputChange}
													required
												/>
											</div>

											<label style={{ marginBottom: "5px" }} className="topic">
												<b>Address: </b>
											</label>
											<div class="row">
												<div class="col">
													<input
														type="number"
														className="form-control"
														name="postalNo"
														placeholder="postal no"
														value={this.state.postalNo}
														onChange={this.handleInputChange}
														required
													/>
												</div>

												<div class="col">
													<input
														type="text"
														className="form-control"
														name="street"
														placeholder="street"
														value={this.state.street}
														onChange={this.handleInputChange}
													/>
												</div>

												<div class="col">
													<input
														type="text"
														className="form-control"
														name="town"
														placeholder="town"
														value={this.state.town}
														onChange={this.handleInputChange}
													/>
												</div>
											</div>

											<div className="form-group" style={{ marginBottom: "15px" }}>
												<label style={{ marginBottom: "5px" }} className="topic">
													<b>Contact Number: </b>
												</label>
												<input
													type="text"
													className="form-control"
													name="contactNo"
													placeholder="Enter Your TeleNo"
													value={this.state.contactNo}
													onChange={this.handleInputChange}
												/>
											</div>

											<div className="form-group" style={{ marginBottom: "15px" }}>
												<label style={{ marginBottom: "5px" }} className="topic">
													<b>Order Date</b>
												</label>
												<input
													type="date"
													className="form-control"
													name="orderDate"
													placeholder="Date"
													value={this.state.orderDate}
													onChange={this.handleInputChange}
												/>
											</div>

											<label style={{ marginBottom: "5px" }} className="topic">
												<b>Order Status: Pending</b>
											</label>
											<br />
											<label style={{ marginBottom: "5px" }} className="topic">
												<b>Order Total: {this.state.cartTotal}</b>
											</label>
											<br />

											<button type="button" class="btn btn-outline-dark btn-sm textsize2" onClick={this.demo}>
												{" "}
												Demo{" "}
											</button>
											<br />
											<button
												className="btn btn-primary textsize"
												type="submit"
												style={{ marginTop: "15px", width: "200px", height:'40px' }}
												onClick={this.onSubmit}
											>
												<i className="far fa-check-square"></i>
												&nbsp; Place the Order
											</button>

											<br />
											
											<button className="btn btn-primary textsize2" type="submit" style={{ marginTop: "15px", width: "200px", height:'40px'  }}>
												<a href="/payment/create" style={{ textDecoration: "none", color: "white" }}>
													{" "}
													<i className="far fa-check-square"></i>
													&nbsp; Continue with payment
												</a>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}
}
