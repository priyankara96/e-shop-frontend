import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./myStyles.css";

class HomeOrder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		this.retrievePosts();
	}

	retrievePosts() {
		axios.get("http://localhost:4000/orders").then((res) => {
			if (res.data.success) {
				this.setState({
					posts: res.data.existingPosts,
				});
				console.log(this.state.posts);
			}
		});
	}

	onDelete = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this data again!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				axios.delete(`http://localhost:4000/order/delete/${id}`).then((res) => {
					swal("Deleted Successful", "Order is removed", "success");

					this.retrievePosts();
				});
			} else {
				swal("Your data is safe!");
			}
		});
	};

	filterData(posts, searchKey) {
		const result = posts.filter(
			(post) => post.name.toLowerCase().includes(searchKey) || post.town.toLowerCase().includes(searchKey)
		);
		this.setState({ posts: result });
	}

	handleSearchArea = (e) => {
		const searchKey = e.currentTarget.value;

		axios.get("http://localhost:4000/orders").then((res) => {
			if (res.data.success) {
				this.filterData(res.data.existingPosts, searchKey);
			}
		});
	};
	render() {
		return (
			<div>
				<div className="container">
					<br />
					<div style={{ fontSize: "15px" }}>
						<a href="/order" class="previous" style={{ color: "white" }}>
							&laquo; Previous
						</a>
					</div>
					<div className="text-center">
						<h2 className="adminletter" style={{ fontSize: "40px" }}>
							{" "}
							Order Summary{" "}
						</h2>
					</div>
					<div className="col-md-6 mb-4">
						<form class="form-inline">
							<i class="fas fa-search" aria-hidden="true"></i>
							<input
								className="form-control form-control-sm ml-3 w-75"
								type="search"
								placeholder="search"
								name="searchQuery"
								onChange={this.handleSearchArea}
							></input>
						</form>
					</div>

					<table class="table table-striped" style={{ fontSize: "17px" }}>
						<thead>
							<tr>
								<th scope="col">Order Index</th>
								<th scope="col">Customer Name</th>
								<th scope="col">PostalNo</th>
								<th scope="col">Street</th>
								<th scope="col">Town</th>
								<th scope="col">Contact Number</th>
								<th scope="col">Order Date</th>
								<th scope="col">Status</th>
								<th scope="col">Order Total(LKR)</th>
								<th scope="col">action</th>
							</tr>
						</thead>
						<tbody>
							{this.state.posts.map((posts, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>
										<a href={`/order/post/${posts._id}`} style={{ textDecoration: "none" }}>
											{posts.name}
										</a>
									</td>
									<td>{posts.postalNo}</td>
									<td>{posts.street}</td>
									<td>{posts.town}</td>
									<td>{posts.contactNo}</td>
									<td>{posts.orderDate}</td>
									<td>{posts.status}</td>
									<td>{posts.cartTotal}</td>

									<td>
										<a className="btn btn-primary" href={`/order/post/${posts._id}`}>
											<i className="fas fa-eye"></i>
										</a>
										&nbsp;
										<a className="btn btn-warning" href={`/order/update/${posts._id}`}>
											<i className="fas fa-edit"></i>
										</a>
										&nbsp;
										<a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
											<i className="fas fa-trash-alt"></i>
										</a>
									</td>
								</tr>
							))}
						</tbody>
						<br />
						<br />
					</table>
			
				
				</div>

				<div class="center">
					<div class="pagination">
						<a href="#">&laquo;</a>

						<a href="#" class="active">
							1
						</a>
						<a href="#">2</a>
						<a href="#">&raquo;</a>
					</div>
				</div>
			</div>
		);
	}
}
export default HomeOrder;
