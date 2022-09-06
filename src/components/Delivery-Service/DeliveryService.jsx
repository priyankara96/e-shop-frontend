import React, { Component, useEffect, useRef, useState } from "react";
import DeliveryServiceApiService from "../../services/deliver-service/DeliveryService-Service";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { Rating } from "primereact/rating";
import { InputSwitch } from "primereact/inputswitch";
import moment from "moment";
import "./Delivery-Service.scss";

const DeliveryService = () => {
	let deliverySeerviceModel = {
		id: null,
		name: "",
		email: "",
		telephoneNumber: "",
		address: "",
		description: "",
	};

	const menu = [
		{
			label: "Home",
			items: [
				{
					label: "Dashboard",
					icon: "pi pi-fw pi-home",
					to: "/",
				},
			],
		},
		{
			label: "UI Components",
			icon: "pi pi-fw pi-sitemap",
			items: [
				{ label: "Form Layout", icon: "pi pi-fw pi-id-card", to: "/formlayout" },
				{ label: "Input", icon: "pi pi-fw pi-check-square", to: "/input" },
				{ label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
				{ label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
				{ label: "Button", icon: "pi pi-fw pi-mobile", to: "/button" },
				{ label: "Table", icon: "pi pi-fw pi-table", to: "/table" },
				{ label: "List", icon: "pi pi-fw pi-list", to: "/list" },
				{ label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/tree" },
				{ label: "Panel", icon: "pi pi-fw pi-tablet", to: "/panel" },
				{ label: "Overlay", icon: "pi pi-fw pi-clone", to: "/overlay" },
				{ label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
				{ label: "Menu", icon: "pi pi-fw pi-bars", to: "/menu" },
				{ label: "Message", icon: "pi pi-fw pi-comment", to: "/messages" },
				{ label: "File", icon: "pi pi-fw pi-file", to: "/file" },
				{ label: "Chart", icon: "pi pi-fw pi-chart-bar", to: "/chart" },
				{ label: "Misc", icon: "pi pi-fw pi-circle-off", to: "/misc" },
			],
		},
		{
			label: "UI Blocks",
			items: [
				{ label: "Free Blocks", icon: "pi pi-fw pi-eye", to: "/blocks", badge: "NEW" },
				{ label: "All Blocks", icon: "pi pi-fw pi-globe", url: "https://www.primefaces.org/primeblocks-react" },
			],
		},
		{
			label: "Icons",
			items: [{ label: "PrimeIcons", icon: "pi pi-fw pi-prime", to: "/icons" }],
		},
		{
			label: "Pages",
			icon: "pi pi-fw pi-clone",
			items: [
				{ label: "Crud", icon: "pi pi-fw pi-user-edit", to: "/crud" },
				{ label: "Timeline", icon: "pi pi-fw pi-calendar", to: "/timeline" },
				{ label: "Empty", icon: "pi pi-fw pi-circle-off", to: "/empty" },
			],
		},
		{
			label: "Menu Hierarchy",
			icon: "pi pi-fw pi-search",
			items: [
				{
					label: "Submenu 1",
					icon: "pi pi-fw pi-bookmark",
					items: [
						{
							label: "Submenu 1.1",
							icon: "pi pi-fw pi-bookmark",
							items: [
								{ label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
							],
						},
						{
							label: "Submenu 1.2",
							icon: "pi pi-fw pi-bookmark",
							items: [
								{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" },
							],
						},
					],
				},
				{
					label: "Submenu 2",
					icon: "pi pi-fw pi-bookmark",
					items: [
						{
							label: "Submenu 2.1",
							icon: "pi pi-fw pi-bookmark",
							items: [
								{ label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" },
							],
						},
						{
							label: "Submenu 2.2",
							icon: "pi pi-fw pi-bookmark",
							items: [
								{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
								{ label: "Submenu 2.2.2", icon: "pi pi-fw pi-bookmark" },
							],
						},
					],
				},
			],
		},
		{
			label: "Get Started",
			items: [
				{
					label: "Documentation",
					icon: "pi pi-fw pi-question",
					command: () => {
						window.location = "#/documentation";
					},
				},
				{
					label: "View Source",
					icon: "pi pi-fw pi-search",
					command: () => {
						window.location = "https://github.com/primefaces/sakai-react";
					},
				},
			],
		},
	];

	const [deliveryServices, setDeliveryServices] = useState(null);
	const [deliveryService, setDeliveryService] = useState(deliverySeerviceModel);
	const [selecteddeliveryServices, setSelecteddeliveryServices] = useState(null);
	const [filters, setFilters] = useState(null);
	const [spinner, showSpinner] = useState(false);
	const [globalFilter, setGlobalFilter] = useState(null);
	const [deleveryServiceDialog, setdeleveryServiceDialog] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);

	const toast = useRef(null);
	const dt = useRef(null);

	useEffect(() => {
		getDeliveryServices();
	}, []);

	const getDeliveryServices = () => {
		showSpinner(true);
		setTimeout(() => {
			DeliveryServiceApiService.getDeliveryServiceDetails()
				.then((response) => {
					setDeliveryServices(response.data);
					showSpinner(false);
				})
				.catch((error) => {
					showSpinner(false);
				});
		}, 3000);
	};

	const onInputChange = (event, name) => {
		const value = (event.target && event.target.value) || "";

		if (name === "email") {
			console.log(value);
			validateEmail(value);
		}

		let _deliveryService = { ...deliveryService };

		_deliveryService[`${name}`] = value;

		setDeliveryService(_deliveryService);
	};

	const leftToolbarTemplate = () => {
		return (
			<React.Fragment>
				<Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openDeliveryServiceDialog} />
			</React.Fragment>
		);
	};

	const rightToolbarTemplate = () => {
		return (
			<React.Fragment>
				<Button label="Genarate Report" icon="pi pi-upload" className="p-button-help" />
			</React.Fragment>
		);
	};

	const validateEmail = (email) => {
		const emailFromatConfigurations =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email || emailFromatConfigurations.test(email) === false) {
			console.log("dev");
			setIsValidEmail(false);
		} else {
			setIsValidEmail(true);
		}
	};

	const openDeliveryServiceDialog = () => {
		setDeliveryService({ ...deliveryService });
		setdeleveryServiceDialog(true);
	};

	const handleDeliversyServiceSave = (rowData) => {
		let model = rowData;
		model.id = rowData._id;

		setDeliveryService({ ...model });
		setdeleveryServiceDialog(true);
	};

	const hideDialog = () => {
		setSubmitted(false);
		setdeleveryServiceDialog(false);
	};

	const deliveryServiceDialogFooter = (
		<React.Fragment>
			<Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
			<Button
				label="Save"
				icon="pi pi-check"
				className="p-button-text"
				onClick={() => saveDeliveryService(deliveryService)}
			/>
		</React.Fragment>
	);

	const validateInputData = (deliveryService) => {
		const isValid = Object.values(deliveryService).every((value) => {
			if (value === null || value === undefined || value === "") {
				return false;
			} else {
				return true;
			}
		});

		return isValid;
	};

	const saveDeliveryService = () => {
		setSubmitted(true);

		let _deliveryService = { ...deliveryService };

		const deleiveryServiceDTO = {
			id: _deliveryService.id === null ? 0 : _deliveryService.id,
			name: _deliveryService.name,
			email: _deliveryService.email,
			telephoneNumber: _deliveryService.telephoneNumber,
			address: _deliveryService.address,
			description: _deliveryService.description,
		};

		const validation = validateInputData(deleiveryServiceDTO);

		if (validation === true) {
			DeliveryServiceApiService.saveDeliveryService(deleiveryServiceDTO)
				.then((response) => {
					if (response.data.isSuccess) {
						toast.current.show({ severity: "info", summary: "Confirmed", detail: response.data.message, life: 3000 });
						setdeleveryServiceDialog(false);
						setDeliveryService(deliverySeerviceModel);

						getDeliveryServices();
					} else {
						toast.current.show({ severity: "error", summary: "Rejected", detail: response.data.message, life: 3000 });
					}
				})
				.catch((error) => {
					toast.current.show({
						severity: "error",
						summary: "Rejected",
						detail: "Error has been Occred please try again",
						life: 3000,
					});
				})
				.finally(() => {
					setSubmitted(false);
				});
		} else {
			toast.current.show({
				severity: "error",
				summary: "Rejected",
				detail: "Please fill all the fields",
				life: 3000,
			});
		}
	};

	const header = (
		<div className="table-header">
			<h5 className="mx-0 my-1">Delivery Services</h5>
			<span className="p-input-icon-left">
				<i className="pi pi-search" />
				<InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
			</span>
		</div>
	);

	const statusBodyTemplate = (rowData) => {
		return <span className={`delivery-service-status-badge-${rowData.isActive}`}>{rowData.isActive}</span>;
	};

	const actionBodyTemplate = (rowData) => {
		return (
			<React.Fragment>
				<Button
					icon="pi pi-pencil"
					className=" p-button-success mr-2"
					style={{ marginRight: ".5em" }}
					onClick={() => handleDeliversyServiceSave(rowData)}
				/>
				<Button icon="pi pi-trash" style={{ marginRight: ".5em" }} className=" p-button-warning mr-2" />
				<InputSwitch checked={true} style={{ marginRight: ".5em" }} />
			</React.Fragment>
		);
	};

	const createdOnsBodyTemplate = (rowData) => {
		return moment(rowData.createdOn).format("MMMM Do YYYY");
	};

	const updatedOnBodyTemplate = (rowData) => {
		return moment(rowData.updatedOn).format("MMMM Do YYYY");
	};

	return (
		<div className="layout-wrapper layout-static layout-theme-light">
			<div className="layout-main-container">
				<div>
					<Toast ref={toast} />
					<div className="card">
						<Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

						<DataTable
							ref={dt}
							value={deliveryServices}
							selection={selecteddeliveryServices}
							onSelectionChange={(e) => setSelecteddeliveryServices(e.value)}
							dataKey="_id"
							paginator
							rows={8}
							rowsPerPageOptions={[5, 10, 25]}
							paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
							currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Delivery Services"
							globalFilter={globalFilter}
							header={header}
							responsiveLayout="scroll"
						>
							<Column
								selectionMode="multiple"
								headerStyle={{ width: "3rem", fontSize: "15px" }}
								exportable={false}
							></Column>
							<Column field="name" header="Name" sortable style={{ minWidth: "8rem", fontSize: "15px" }}></Column>
							<Column field="email" header="Email" sortable style={{ minWidth: "10rem", fontSize: "15px" }}></Column>
							<Column
								field="telephoneNumber"
								style={{ minWidth: "10rem", fontSize: "15px" }}
								header="Telphone Number"
							></Column>
							<Column
								field="createdOn"
								body={createdOnsBodyTemplate}
								style={{ minWidth: "10rem", fontSize: "15px" }}
								header="Created Date"
							></Column>
							<Column
								field="updatedOn"
								body={updatedOnBodyTemplate}
								style={{ minWidth: "10rem", fontSize: "15px" }}
								header="Updated Date"
							></Column>

							{/* <Column
								field="isActive"
								header="Status"
								body={statusBodyTemplate}
								sortable
								style={{ minWidth: "12rem" }}
							></Column> */}
							<Column
								header="Actions"
								body={actionBodyTemplate}
								exportable={false}
								style={{ minWidth: "8rem", fontSize: "15px" }}
							></Column>
						</DataTable>
					</div>

					<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={spinner}>
						<CircularProgress color="inherit" />
					</Backdrop>

					<Dialog
						visible={deleveryServiceDialog}
						style={{ width: "550px" }}
						header="Delivery Service Details"
						modal
						className="p-fluid"
						footer={deliveryServiceDialogFooter}
						onHide={hideDialog}
					>
						<div className="field">
							<label htmlFor="name">Full Name </label>
							<InputText
								id="name"
								value={deliveryService.name}
								onChange={(event) => onInputChange(event, "name")}
								required
								autoFocus
								className={classNames({ "p-invalid": submitted && !deliveryService.name })}
							/>
							{submitted && !deliveryService.name && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Full Name is required.
								</small>
							)}
						</div>
						<div className="field">
							<label htmlFor="email">Email </label>
							<InputText
								id="email"
								value={deliveryService.email}
								onChange={(event) => onInputChange(event, "email")}
								required
								className={classNames({ "p-invalid": submitted && !deliveryService.email })}
							/>
							{submitted && !deliveryService.email && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Email is required.
								</small>
							)}
							{submitted && !isValidEmail && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Invalid email address. E.g. example@gmail.com
								</small>
							)}
						</div>
						<div className="field">
							<label htmlFor="telephoneNumber">Telephone Number </label>
							<InputText
								id="telephoneNumber"
								value={deliveryService.telephoneNumber}
								onChange={(event) => onInputChange(event, "telephoneNumber")}
								required
								className={classNames({ "p-invalid": submitted && !deliveryService.telephoneNumber })}
							/>
							{submitted && !deliveryService.telephoneNumber && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Telephone Number is required.
								</small>
							)}
						</div>

						<div className="field">
							<label htmlFor="address">Address </label>
							<InputText
								id="address"
								value={deliveryService.address}
								onChange={(event) => onInputChange(event, "address")}
								required
								className={classNames({ "p-invalid": submitted && !deliveryService.address })}
							/>
							{submitted && !deliveryService.address && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Address is required.
								</small>
							)}
						</div>
						<div className="field">
							<label htmlFor="description" style={{ fontSize: "10px" }}>
								Description
							</label>
							<InputTextarea
								id="description"
								value={deliveryService.description}
								onChange={(event) => onInputChange(event, "description")}
								required
								rows={3}
								cols={20}
							/>
							{submitted && !deliveryService.description && (
								<small className="p-error" style={{ fontSize: "10px" }}>
									Description is required.
								</small>
							)}
						</div>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export default DeliveryService;
