import React, { Component } from "react";

export default class adminpayment extends Component {
	render() {
		return (
			<div className="container">
				<div className="text-center">
					<br />
					<h1><font face = "Comic sans MS" size =" 6">Welcome to Payment Management</font></h1>
					<div class="container">
						<div class="row">
							<div class="col">
                <br/><br/>
								
                                <img src="https://www.paatham.com/assets/images/agetab/Fee%20Management.webp" style={{ height: "60%" }} />
							</div>
							<div class="col">
                <br/> <br/><br/><br/><br/>
                <button  type="button" class="btn btn-outline-info" style={{width:'220px', height:'70px'}}>
								<h2> <a href='/payment/tablehome'>View Payment Summary</a></h2></button>
                <br/><br/> <br/><br/>
                {/* <button  type="button" class="btn btn-outline-info" style={{width:'220px', height:'60px', }}>
                  <h2 ><a href='/report' >Generate Report</a></h2></button> */}
                
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
