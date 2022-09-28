import React, { useState, useEffect, useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/primeflex.css";
import dashboardService from "../../services/dashboard/dashboard.service";
import moment from "moment";

const lineData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			backgroundColor: "#2f4860",
			borderColor: "#2f4860",
			tension: 0.4,
		},
		{
			label: "Second Dataset",
			data: [28, 48, 40, 19, 86, 27, 90],
			fill: false,
			backgroundColor: "#00bb7e",
			borderColor: "#00bb7e",
			tension: 0.4,
		},
	],
};

const AdminMainDashBoard = () => {
	const [clientMessages, setClientMessages] = useState(null);
	const [deliveryServicesCount, setDeliveryServicesCount] = useState(0);
	const [totalUsersCount, setTotalUsersCount] = useState(0);
	const [totalPendingOrdersCount, setTotalPendingOrdersCount] = useState(0);
	const [totalMessagesCount, setTotalMessagesCount] = useState(0);
	const [lineOptions, setLineOptions] = useState(null);

	const applyLightTheme = () => {
		const lineOptions = {
			plugins: {
				legend: {
					labels: {
						color: "#495057",
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: "#495057",
					},
					grid: {
						color: "#ebedef",
					},
				},
				y: {
					ticks: {
						color: "#495057",
					},
					grid: {
						color: "#ebedef",
					},
				},
			},
		};

		setLineOptions(lineOptions);
	};

	const applyDarkTheme = () => {
		const lineOptions = {
			plugins: {
				legend: {
					labels: {
						color: "#ebedef",
					},
				},
			},
			scales: {
				x: {
					ticks: {
						color: "#ebedef",
					},
					grid: {
						color: "rgba(160, 167, 181, .3)",
					},
				},
				y: {
					ticks: {
						color: "#ebedef",
					},
					grid: {
						color: "rgba(160, 167, 181, .3)",
					},
				},
			},
		};

		setLineOptions(lineOptions);
	};

	useEffect(() => {
		getDashboardMasterData();
	}, []);

	const getDashboardMasterData = () => {
		dashboardService
			.getDashboardMasterData()
			.then((response) => {
				console.log(response.data);
				setDeliveryServicesCount(response.data.deliveryServicesCount);
				setTotalUsersCount(response.data.totalUsersCount);
				setTotalPendingOrdersCount(response.data.totalPendingOrdersCount);
				setTotalMessagesCount(response.data.totalMessagesCount);
				setClientMessages(response.data.clientMessages);
			})
			.catch((error) => {});
	};

	const createdOnsBodyTemplate = (rowData) => {
		return moment(rowData.createdOn).format("MMMM Do YYYY");
	};
	return (
		<div className="layout-wrapper layout-static layout-static-sidebar-inactive layout-theme-light">
			<div className="layout-main-container">
				<div className="grid">
					<div className="col-12 lg:col-6 xl:col-3">
						<div className="card mb-0">
							<div className="flex justify-content-between mb-3">
								<div>
									<span className="block text-500 font-medium mb-3">Customers</span>
									<div className="text-900 font-medium text-xl">
										{totalUsersCount === 0 ? "Not Available" : totalUsersCount}
									</div>
								</div>
								<div
									className="flex align-items-center justify-content-center bg-cyan-100 border-round"
									style={{ width: "2.5rem", height: "2.5rem" }}
								>
									<i className="pi pi-inbox text-cyan-500 text-xl" />
								</div>
							</div>
							<span className="text-green-500 font-medium">Active Users </span>
							<span className="text-500">Registered</span>
						</div>
					</div>
					<div className="col-12 lg:col-6 xl:col-3">
						<div className="card mb-0">
							<div className="flex justify-content-between mb-3">
								<div>
									<span className="block text-500 font-medium mb-3">Delivery Services</span>
									<div className="text-900 font-medium text-xxl">
										{deliveryServicesCount === 0 ? "No Delivery Services" : deliveryServicesCount}
									</div>
								</div>
								<div
									className="flex align-items-center justify-content-center bg-blue-100 border-round"
									style={{ width: "2.5rem", height: "2.5rem" }}
								>
									<i className="pi pi-car text-blue-500 text-xl" />
								</div>
							</div>
							<span className="text-green-500 font-medium">Now</span>
							<span className="text-500">All</span>
						</div>
					</div>

					<div className="col-12 lg:col-6 xl:col-3">
						<div className="card mb-0">
							<div className="flex justify-content-between mb-3">
								<div>
									<span className="block text-500 font-medium mb-3">Orders</span>
									<div className="text-900 font-medium text-xl">
										{totalPendingOrdersCount === 0 ? "No Pending Orders" : totalPendingOrdersCount}
									</div>
								</div>
								<div
									className="flex align-items-center justify-content-center bg-blue-100 border-round"
									style={{ width: "2.5rem", height: "2.5rem" }}
								>
									<i className="pi pi-shopping-cart text-blue-500 text-xl" />
								</div>
							</div>
							<span className="text-green-500 font-medium">Pending </span>
							<span className="text-500">To Do Approve</span>
						</div>
					</div>

					<div className="col-12 lg:col-6 xl:col-3">
						<div className="card mb-0">
							<div className="flex justify-content-between mb-3">
								<div>
									<span className="block text-500 font-medium mb-3">Messages</span>
									<div className="text-900 font-medium text-xl">
										{totalMessagesCount === 0 ? "Not Available" : totalMessagesCount}
									</div>
								</div>
								<div
									className="flex align-items-center justify-content-center bg-purple-100 border-round"
									style={{ width: "2.5rem", height: "2.5rem" }}
								>
									<i className="pi pi-comment text-purple-500 text-xl" />
								</div>
							</div>
							<span className="text-green-500 font-medium">Un Read </span>
							<span className="text-500">To do response</span>
						</div>
					</div>

					<div className="col-12 xl:col-6">
						<div className="card">
							<h5>Recent Messages</h5>
							<DataTable value={clientMessages} rows={5} paginator responsiveLayout="scroll">
								<Column field="name" header="Name" sortable style={{ width: "35%", fontSize: "12px" }} />
								<Column field="email" header="Email" sortable style={{ width: "35%", fontSize: "12px" }} />
								<Column
									field="mobileNumber"
									header="Mobile Number"
									sortable
									style={{ width: "35%", fontSize: "12px" }}
								/>
								<Column
									field="createdOn"
									header="Date"
									sortable
									style={{ width: "35%", fontSize: "12px" }}
									body={(rowData) => createdOnsBodyTemplate(rowData)}
								/>
								<Column
									header="View"
									style={{ width: "15%", fontSize: "12px" }}
									body={() => (
										<>
											<Button icon="pi pi-search" type="button" className="p-button-text" />
										</>
									)}
								/>
							</DataTable>
						</div>
					</div>
					<div className="col-12 xl:col-6">
						<div className="card" style={{ height: "28vw" }}>
							<h5>Sales Overview</h5>
							<Chart type="line" style={{ height: "35vw" }} data={lineData} options={lineOptions} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminMainDashBoard;
