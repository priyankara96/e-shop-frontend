import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { blue } from "@mui/material/colors";
import "./Contact-Us.css";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

const ContactUs = () => {
	return (
		<div class="contact-row">
			<div class="col-md-12">
				<form action="index.html" method="post">
					<h2> Contact us </h2>
					<div className="container">
						<div className="field col">
							<span className="p-float-label">
								<InputText classNames="txtInput" className="txtInput" id="email" required />
								<label htmlFor="email">Email </label>
							</span>
						</div>
						<span className="p-float-label">
							<InputText classNames="txtInput" className="txtInput" id="email" required />
							<label htmlFor="email">Email </label>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
