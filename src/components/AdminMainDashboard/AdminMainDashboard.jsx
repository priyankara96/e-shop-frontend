import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeflex/primeflex.css";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import dashboardService from "../../services/dashboard/dashboard.service";
import moment from "moment";
import MessageService from "../../services/message/MessageService";
import { Toast } from "primereact/toast";

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
	let clientMessageModel = {
		id: null,
		name: "",
		email: "",
		mobileNumber: "",
		message: "",
		isActive: false,
	};

	const [clientMessages, setClientMessages] = useState(null);
	const [clientMessage, setClientMessage] = useState(clientMessageModel);
	const [deliveryServicesCount, setDeliveryServicesCount] = useState(0);
	const [totalUsersCount, setTotalUsersCount] = useState(0);
	const [totalPendingOrdersCount, setTotalPendingOrdersCount] = useState(0);
	const [totalMessagesCount, setTotalMessagesCount] = useState(0);
	const [lineOptions, setLineOptions] = useState(null);
	const [submitted, setSubmitted] = useState(false);
	const [clientMessageDialog, setClientMessageDialog] = useState(false);
	const [chartData1, setChartData1] = useState({
		labels: ["", ""],
		datasets: [
			{
				data: [0, 0],
				backgroundColor: ["#", "#"],
				hoverBackgroundColor: ["#", "#"],
			},
		],
	});
	const [lightOptions] = useState({
		plugins: {
			legend: {
				labels: {
					color: "#495057",
				},
			},
		},
	});

	const toast = useRef(null);
	const dt = useRef(null);

	useEffect(() => {
		getDashboardMasterData();
	}, []);

	const getDashboardMasterData = () => {
		dashboardService.getDashboardMasterData().then((response) => {
			setDeliveryServicesCount(response.data.deliveryServicesCount);
			setTotalUsersCount(response.data.totalUsersCount);
			setTotalPendingOrdersCount(response.data.totalPendingOrdersCount);
			setTotalMessagesCount(response.data.totalMessagesCount);
			setClientMessages(response.data.clientMessages);
			setChartData1({
				labels: ["Sales", "Orders"],
				datasets: [
					{
						data: [response.data.totalSalesCount, response.data.totalPendingOrdersCount],
						backgroundColor: ["#42A5F5", "#66BB6A"],
						hoverBackgroundColor: ["#64B5F6", "#81C784"],
					},
				],
			});
		});
	};

	const openClientMessageDialog = (rowData) => {
		let _clientMessage = { ...rowData };

		console.log(_clientMessage);
		setClientMessage({ ..._clientMessage });
		setClientMessageDialog(true);
	};

	const hideDialog = () => {
		setSubmitted(false);
		setClientMessageDialog(false);
	};

	const clientMessageDialogFooter = () => {
		<React.Fragment>
			<Button label="Cancel" icon="pi pi-times" className="p-button-text" />
			<Button label="Save" icon="pi pi-check" className="p-button-text" />
		</React.Fragment>;
	};

	const markAsRead = (id) => {
		console.log(id);
		MessageService.markAsRead(id)
			.then((response) => {
				if (response.data.isSuccess) {
					toast.current.show({ severity: "success", summary: "Confirmed", detail: response.data.message, life: 3000 });
					setClientMessageDialog(false);
					setClientMessage(clientMessageModel);
					getDashboardMasterData();
				}
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
									body={(rowData) => (
										<>
											<Button
												icon="pi pi-search"
												type="button"
												className="p-button-text"
												onClick={() => openClientMessageDialog(rowData)}
											/>
										</>
									)}
								/>
							</DataTable>
						</div>
					</div>
					<div className="col-12 xl:col-6">
						<div className="card" style={{ height: "23vw" }}>
							<h5>Sales Overview</h5>

							<Chart
								type="pie"
								data={chartData1}
								options={lightOptions}
								style={{ position: "relative", width: "40%" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<Toast ref={toast} />
			<Dialog
				visible={clientMessageDialog}
				style={{ width: "500px" }}
				header="Client Message"
				modal
				className="p-fluid"
				footer={clientMessageDialogFooter}
				onHide={hideDialog}
			>
				<div className="field">
					<label htmlFor="name">Customer Name </label>
					<InputText id="name" value={clientMessage.name} required disabled />
				</div>
				<div className="field">
					<label htmlFor="email">Email </label>
					<InputText id="email" value={clientMessage.email} required disabled />
				</div>
				<div className="field">
					<label htmlFor="mobileNumber">Telephone Number </label>
					<InputText id="mobileNumber" value={clientMessage.mobileNumber} required disabled />
				</div>
				<div className="field">
					<label htmlFor="message" style={{ fontSize: "10px" }}>
						Message
					</label>
					<InputTextarea id="message" value={clientMessage.message} required rows={3} cols={20} disabled />
				</div>
				<Button
					label="Mark as Read"
					icon="pi pi-check"
					className="p-button-text"
					onClick={() => markAsRead(clientMessage._id)}
				/>
			</Dialog>
		</div>
	);
};

export default AdminMainDashBoard;
