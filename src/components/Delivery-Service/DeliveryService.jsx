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

import "./Delivery-Service.css";

const DeliveryService = () => {
	let deliverySeerviceModel = {
		id: null,
		name: "",
		email: "",
		telephoneNumber: "",
		address: "",
		description: "",
	};

	const [deliveryServices, setDeliveryServices] = useState(null);
	const [selecteddeliveryServices, setSelecteddeliveryServices] = useState(null);
	const [filters, setFilters] = useState(null);
	const [spinner, showSpinner] = useState(false);
	const [globalFilter, setGlobalFilter] = useState(null);

	const toast = useRef(null);
	const dt = useRef(null);

	useEffect(() => {
		getDeliveryServices(filters);
	}, []);

	const getDeliveryServices = () => {
		showSpinner(true);
		DeliveryServiceApiService.getDeliveryServiceDetails()
			.then((response) => {
				console.log(response);
				setDeliveryServices(response.data);
				showSpinner(false);
			})
			.catch((error) => {
				showSpinner(false);
			});
	};

	const leftToolbarTemplate = () => {
		return (
			<React.Fragment>
				<Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
				<Button label="Delete" icon="pi pi-trash" className="p-button-danger" />
			</React.Fragment>
		);
	};

	const rightToolbarTemplate = () => {
		return (
			<React.Fragment>
				<FileUpload mode="basic" name="demo[]" auto accept=".csv" chooseLabel="Import" className="mr-2 inline-block" />
				<Button label="Export" icon="pi pi-upload" className="p-button-help" />
			</React.Fragment>
		);
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
				<Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" />
				<Button icon="pi pi-trash" className="p-button-rounded p-button-warning mr-2" />
				<InputSwitch checked={true} />
			</React.Fragment>
		);
	};

	const openNew = () => {};

	return (
		<div>
			<div className="datatable-details" style={{ width: "125rem", paddingTop: "30px", paddingLeft: "350px" }}>
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
						rows={10}
						rowsPerPageOptions={[5, 10, 25]}
						paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
						currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Delivery Services"
						globalFilter={globalFilter}
						header={header}
						responsiveLayout="scroll"
					>
						<Column selectionMode="multiple" headerStyle={{ width: "3rem" }} exportable={false}></Column>
						<Column field="name" header="Name" sortable style={{ minWidth: "8rem" }}></Column>
						<Column field="email" header="Email" sortable style={{ minWidth: "10rem" }}></Column>
						<Column field="telephoneNumber" header="Telphone Number"></Column>
						<Column field="createdOn" header="Created Date"></Column>
						<Column field="updatedOn" header="Updated Date"></Column>

						<Column
							field="isActive"
							header="Status"
							body={statusBodyTemplate}
							sortable
							style={{ minWidth: "12rem" }}
						></Column>
						<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "8rem" }}></Column>
					</DataTable>
				</div>

				<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={spinner}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
		</div>
	);
};

export default DeliveryService;
