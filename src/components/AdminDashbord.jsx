import React, { Component } from 'react';
import "./Dashboard.css"
import background from "../images/admin-background.jpg";
import image1 from "../images/Admin.png";
import image2 from "../images/Add.png";

export default class MainDashboard extends Component {

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      

    <div className='page'>
    <div><br/>
    <div className="text-center">
    <h1 className="text-primary"><font face = "Comic sans MS" size =" 6">Admin Dashboard</font></h1>
    </div>

<div class="py-3">
    <div class="container">
      <div class="row hidden-md-up">
{/* 01 */}
                <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image1} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="/AuthenticationManagementDashboard" style={{ textDecoration: 'none', color: 'Info' }}> Authentication Management </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>
{/* 02 */}
          <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 02 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>
{/* 03 */}
          <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 03 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>
{/* 04 */}
          <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 04 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>

      </div><br/>
{/* 05 */}
        <div class="row">
        <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 05 </a>   
                    </button>
                    </div>
                </div>
                </div>
        </div>
{/* 06 */}
        <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 06 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>
{/* 07 */}
         <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 07 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>
{/* 08 */}
         <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 08 </a>   
                    </button>
                    </div>
                </div>
                </div>
         </div>

         </div><br/>
{/* 09 */}
        <div class="row">
        <div class="col-md-3" >
                <div className='card-container'>
                <div class="card text-center" style = {{backgroundColor:'#F9FAFC'}}>
                    <div class="card-block" ><br/>
                    <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
                    <h4 class="card-title"></h4>  
                    <button type="button" class="btn btn-light btn-lg">
                     <a href="#" style={{ textDecoration: 'none', color: 'Info' }}> 09 </a>   
                    </button>
                    </div>
                </div>
                </div>
        </div>


        </div><br></br>

    </div>
  </div>







    </div>
      
    

    </div>
    </div>
    )


    
  }
}