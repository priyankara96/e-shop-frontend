import React, { Component } from 'react';
import axios from 'axios';
import "./myStyles.css";
class OrderPost extends Component{
  constructor(props){
    super(props);

    this.state={
      post:[]
    };
  }

  //retriew data of specific form
  componentDidMount(){
    const id =this.props.match.params.id;

    axios.get(`http://localhost:4000/order/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
    render(){
      const {name,postalNo,street,town,contactNo,orderDate,status,cartTotal} = this.state.post;
      return(
        <div>
        
        
        <div className="container">
        <br/>
        <div style={{fontSize:'15px'}} >
      <a href="/order/home" class="previous" style={{color:'white'}}>&laquo; Previous</a></div>
        <div class="row">
        <div class="col-6">
    <div style={{marginTop:'20px', fontSize:'25px'}}>
          <h1>{name}</h1>
          
          <hr/>
          <dl className="row" style={{fontSize:'20px'}}>
            <dt className="col-sm-3">Postal No</dt>
            <dd className="col-sm-9">{postalNo}</dd>
            <dt className="col-sm-3">Street</dt>
            <dd className="col-sm-9">{street}</dd>
            <dt className="col-sm-3">Town</dt>
            <dd className="col-sm-9">{town}</dd>
            <dt className="col-sm-3">Contact No</dt>
            <dd className="col-sm-9">{contactNo}</dd>
            <dt className="col-sm-3">Order Date</dt>
            <dd className="col-sm-9">{orderDate}</dd>
            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">{status}</dd>
            <dt className="col-sm-3">Order Total</dt>
            <dd className="col-sm-9">{cartTotal}</dd>
          </dl>
         
        </div>
    </div>
    <div class="col-6">
    <div className="imageprofile">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/14cb6b84808917.5d68451d7d126.gif"alt="" className="rounded-circle" style={{marginLeft:"50%", height:'50%', width:'50%'}}/>
          </div>
    </div>
    
    
  </div>
        <br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/>
        </div>
        </div>
        
      )
    }
  }
  export default OrderPost;