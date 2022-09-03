import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { blue } from "@mui/material/colors";
import "./Contact-Us.css";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";

const ContactUs = () => {
	return (
		<div class="contact-row">
			<div class="col-md-12">
				<form>
					<h2> Contact us </h2>
					<div className="container">
						<div>
							<InputText classNames="txtInput" className="txtInput" id="email" required placeholder="Name" />
						</div>
						<div>
							<InputText classNames="txtInput" className="txtInput" id="email" required placeholder="Email" />
						</div>
						<div>
							<InputText classNames="txtInput" className="txtInput" id="email" required placeholder="Mobile Number" />
						</div>
						<div>
							<InputTextarea
								classNames="txtInput"
								className="txtInput"
								rows={5}
								cols={30}
								autoResize
								placeholder="Message"
							/>
						</div>

						<Button classNames="txtInput" className="txtInput" label="Submit" aria-label="Submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
