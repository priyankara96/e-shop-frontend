import React, { Component } from 'react';
import "./AMDashboard.css"
import './StylesCard.css';
import Admin from "../../images/Admin.png";
import Admin2 from "../../images/Admin.jpg";
import Details from "../../images/Details.png";
import Report from "../../images/Report.png";
import new_user from "../../images/add_new_user.png";
import background from "../../images/background2.jpeg";

// Dashboard
export default class AMDashboard extends Component {

  render() {
    return (
    <div className style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
        <br/>
    <div className="col-md-8 mt-4 mx-auto">
        <div className="text-center">
        <h1 className="text-primary"><font face = "Comic sans MS" size =" 6">Authentication Management</font></h1>
        </div>

        <form onSubmit = { this.onSubmit } className="needs-validation" noValidate >
        <br/>

     
        <div class="container">
        <div class="row hidden-md-up">
            <div class="row hidden-md-up">
        {/* 01 */}
                <div class="col-md-4" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={new_user} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> Add a new Customer </a>   
                    </button>
                    </div>
                </div>
                </div>
                </div>
        {/* 02 */}
                <div class="col-md-4" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Admin2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> Add a new Admin </a>   
                    </button>
                    </div>
                </div>
                </div>
                </div>
        {/* 03 */}
        <div class="col-md-4" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Details} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> Details of all Users </a>   
                    </button>
                    </div>
                </div>
                </div>
                </div>



<div class="container" style={{marginTop:"15px"}}>
<div class="row hidden-md-up">
        {/* 04 */}
                <div class="col-md-4" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={Report} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> Generate Report </a>   
                    </button>
                    </div>
                </div>
                </div>
                </div>




        </div>
        </div>
        </div>
        </div>
        </div>
        <br/> <br/>
        </form>

    </div> <br/><br/><br/><br/>
    </div>
    )
  }
}