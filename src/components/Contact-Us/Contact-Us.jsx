import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { blue } from "@mui/material/colors";
import "./Contact-Us.css";
import { InputText } from "primereact/inputtext";
const ContactUs = () => {
	return (
		<div class="contact-row">
			<div class="col-md-12">
				<form action="index.html" method="post">
					<h2> Sign Up </h2>
					<div className="field">
						<label htmlFor="email">Email </label>
						<InputText id="email" required />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
