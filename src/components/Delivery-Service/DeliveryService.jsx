import React, { Component, useEffect, useRef, useState } from "react";
import DeliveryServiceApiService from "../../services/deliver-service/DeliveryService-Service";
import ReportManagerApiService from "../../services/report-manager/report.manager.api";
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
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
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

	const [deliveryServices, setDeliveryServices] = useState(null);
	const [deliveryService, setDeliveryService] = useState(deliverySeerviceModel);
	const [selecteddeliveryServices, setSelecteddeliveryServices] = useState(null);
	const [filters, setFilters] = useState(null);
	const [spinner, showSpinner] = useState(false);
	const [searchText, setSearchText] = useState(null);
	const [deleveryServiceDialog, setdeleveryServiceDialog] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);

	const toast = useRef(null);
	const dt = useRef(null);

	useEffect(() => {
		getDeliveryServices();
	}, []);

	const getDeliveryServices = (value) => {
		showSpinner(true);
		setTimeout(() => {
			const filterModel = {
				searchText: value,
			};
			DeliveryServiceApiService.getDeliveryServiceDetails(filterModel)
				.then((response) => {
					setDeliveryServices(response.data);
					showSpinner(false);
				})
				.catch((error) => {
					showSpinner(false);
				});
		}, 1000);
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
				<Button
					label="Export Excel"
					icon="pi pi-file-excel"
					style={{ marginRight: "30px" }}
					className="p-button-success"
					onClick={exportExcel}
				/>
				<Button label="Genarate Report" icon="pi pi-file-pdf" className="p-button-help" onClick={exportDataPDF} />
			</React.Fragment>
		);
	};

	const exportExcel = () => {
		import("xlsx").then((xlsx) => {
			const worksheet = xlsx.utils.json_to_sheet(deliveryServices);
			const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
			const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
			saveAsExcelFile(excelBuffer, "deliveryServices");
		});
	};

	const saveAsExcelFile = (buffer, fileName) => {
		import("file-saver").then((module) => {
			if (module && module.default) {
				let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
				let EXCEL_EXTENSION = ".xlsx";
				const data = new Blob([buffer], {
					type: EXCEL_TYPE,
				});

				module.default.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION);
			}
		});
	};

	const downloadPdf = () => {
		ReportManagerApiService.downloadPdf().then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "report.pdf");
			document.body.appendChild(link);
			link.click();
		});
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
						toast.current.show({
							severity: "success",
							summary: "Confirmed",
							detail: response.data.message,
							life: 3000,
						});
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
				<InputText type="search" onInput={(e) => onSearchTextChanged(e.target.value)} placeholder="Search..." />
			</span>
		</div>
	);

	const onSearchTextChanged = (value) => {
		console.log(value);
		setSearchText(value);
		getDeliveryServices(value);
	};

	const cols = [
		{ field: "name", header: "Name" },
		{ field: "email", header: "Email" },
		{ field: "telephoneNumber", header: "TelePhone Number" },
		{ field: "createdOn", header: "Cretaed Date" },
		{ field: "updatedOn", header: "Updated Date" },
	];

	const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

	const exportDataPDF = () => {
		import("jspdf").then((jsPDF) => {
			import("jspdf-autotable").then(() => {
				const PDFDocument = new jsPDF.default(0, 0);

				PDFDocument.autoTable(exportColumns, deliveryServices);
				PDFDocument.save("deliveryServices.pdf");
			});
		});
	};
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
				<Button
					icon="pi pi-trash"
					style={{ marginRight: ".5em" }}
					className=" p-button-warning mr-2"
					onClick={() => handleDelete(rowData._id)}
				/>
				<InputSwitch
					checked={rowData.isActive}
					style={{ marginRight: ".5em" }}
					onChange={(e) => {
						handleEnableDisableDeliveryService(rowData._id, rowData.isActive);
					}}
				/>
			</React.Fragment>
		);
	};

	const handleEnableDisableDeliveryService = (id, isActive) => {
		confirmDialog({
			message:
				isActive === true
					? "Do you want to Disable to Delivery Service?"
					: "Do you want to Enable to Delivery Service?",
			header: isActive === true ? "Disable to Delivery Service Confirmation" : "Enable Delivery Service Confirmation",
			icon: "pi pi-info-circle",
			acceptClassName: "p-button-success",
			accept: () => acceptEnableDisableDeliveryService(id, isActive),
			reject,
		});
	};

	const acceptEnableDisableDeliveryService = (id, isActive) => {
		const permistionDTO = {
			id: id,
			isActive: isActive,
		};

		DeliveryServiceApiService.enableDisableDeliveryService(permistionDTO)
			.then((response) => {
				if (response.data.isSuccess) {
					toast.current.show({ severity: "success", summary: "Confirmed", detail: response.data.message, life: 3000 });
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
			});
	};

	const handleDelete = (id) => {
		confirmDialog({
			message: "Do you want to delete this record?",
			header: "Delete Confirmation",
			icon: "pi pi-info-circle",
			acceptClassName: "p-button-danger",
			accept: () => acceptFunc(id),
			reject,
		});
	};

	const acceptFunc = (id) => {
		DeliveryServiceApiService.deleteDeliveryService(id)
			.then((response) => {
				if (response.data.isSuccess === true) {
					toast.current.show({ severity: "success", summary: "Confirmed", detail: response.data.message, life: 3000 });
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
			});
	};

	const reject = () => {
		toast.current.show({ severity: "warn", summary: "Rejected", detail: "You have rejected", life: 3000 });
	};

	return (
		<div className="layout-wrapper layout-static layout-static-sidebar-inactive layout-theme-light">
			<div className="layout-main-container">
				<div>
					<Toast ref={toast} />
					<ConfirmDialog />
					<div className="card">
						<Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

						<DataTable
							id="deliveryService-Table"
							ref={dt}
							value={deliveryServices}
							selection={selecteddeliveryServices}
							onSelectionChange={(e) => setSelecteddeliveryServices(e.value)}
							dataKey="_id"
							paginator
							rows={5}
							rowsPerPageOptions={[5, 10, 25]}
							paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
							currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Delivery Services"
							header={header}
							responsiveLayout="scroll"
						>
							<Column field="name" header="Name" sortable style={{ minWidth: "8rem", fontSize: "15px" }}></Column>
							<Column field="email" header="Email" sortable style={{ minWidth: "10rem", fontSize: "15px" }}></Column>
							<Column
								field="telephoneNumber"
								style={{ minWidth: "10rem", fontSize: "15px" }}
								header="Telphone Number"
							></Column>
							<Column field="createdOn" style={{ minWidth: "10rem", fontSize: "15px" }} header="Created Date"></Column>
							<Column field="updatedOn" style={{ minWidth: "10rem", fontSize: "15px" }} header="Updated Date"></Column>

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
