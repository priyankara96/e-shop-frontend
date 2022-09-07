import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { blue } from "@mui/material/colors";
import "./Contact-Us.css";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { message } from "antd";
import MessageService from "../../services/message/MessageService";
const ContactUs = () => {
	const messageDTO = {
		name: "",
		email: "",
		mobileNumber: "",
		message: "",
	};

	const [messageModel, setMessageModel] = useState(messageDTO);
	const [submitted, setSubmitted] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const toast = useRef(null);
	const onInputChange = (event, name) => {
		const value = (event.target && event.target.value) || "";
		console.log(value);
		if (name === "email") {
			validateEmail(value);
		}

		let _message = { ...messageModel };

		_message[`${name}`] = value;

		setMessageModel(_message);
	};

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

	const saveMessage = () => {
		setSubmitted(true);

		let _messageDTO = { ...messageModel };

		const validation = validateInputData(_messageDTO);

		if (validation === true) {
			MessageService.saveMessage(_messageDTO)
				.then((response) => {
					if (response.status === 200) {
						toast.current.show({
							severity: "success",
							summary: "Success Message",
							detail: "Message Sent Successfully",
							life: 3000,
						});
					}
				})
				.catch((error) => {
					toast.current.show({
						severity: "error",
						summary: "Error Message",
						detail: "Message Sending Failed",
						life: 3000,
					});
				});
		} else {
			toast.current.show({
				severity: "error",
				summary: "Error Message",
				detail: "Please Fill All Fields",
				life: 3000,
			});
		}
	};

	const validateEmail = (email) => {
		const emailFromatConfigurations =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!email || emailFromatConfigurations.test(email) === false) {
			setIsValidEmail(false);
		} else {
			setIsValidEmail(true);
		}
	};

	return (
		<div class="contact-row">
			<Toast ref={toast} />
			<div class="col-md-12">
				<div className="form-data">
					<form>
						<div className="h2custome"> Contact us </div>

						<div>
							<InputText
								classNames="txtInput"
								onChange={(event) => onInputChange(event, "name")}
								className={classNames("txtInput", { "p-invalid": submitted && !messageModel.name })}
								id="name"
								required
								placeholder="Name"
							/>
							{/* {submitted && !messageModel.name && message.error("Name is required")} */}
						</div>

						<div>
							<InputText
								classNames="txtInput"
								id="email"
								onChange={(event) => onInputChange(event, "email")}
								className={classNames("txtInput", { "p-invalid": submitted && !messageModel.email })}
								required
								placeholder="Email"
							/>
							{/* {submitted && !messageModel.email && message.error("Email is required.")}
						{submitted && !isValidEmail && (
							
								message.error("Invalid email address. E.g. example@gmail.com") 
							
						)} */}
						</div>
						<div>
							<InputText
								classNames="txtInput"
								onChange={(event) => onInputChange(event, "mobileNumber")}
								className={classNames("txtInput", { "p-invalid": submitted && !messageModel.mobileNumber })}
								id="mobileNumber"
								required
								placeholder="Mobile Number"
							/>
						</div>
						<div>
							<InputTextarea
								classNames="txtInput"
								onChange={(event) => onInputChange(event, "message")}
								className={classNames("txtInput", { "p-invalid": submitted && !messageModel.message })}
								id="message"
								rows={5}
								cols={30}
								autoResize
								placeholder="Message"
							/>
						</div>

						<Button
							classNames="txtInput"
							className="txtInput"
							label="Submit"
							aria-label="Submit"
							onClick={() => saveMessage(messageModel)}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
