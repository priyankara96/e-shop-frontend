import React, { Component } from 'react';
import axios from 'axios';

export default class EditPayment extends Component {


  constructor(props){
    super(props);
    this.state={
      holdername:"",
      cvc:"",
      cardnum:"",
      cardname:"",
      expirdate:"",
      status:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;
    const {holdername,cvc,cardnum,cardname,expirdate,status} = this.state;

    const data ={
      holdername:holdername,
      cvc:cvc,
      cardnum:cardnum,
      cardname:cardname,
      expirdate:expirdate,
      status:status
    }

    console.log(data)

    axios.put(`http://localhost:4000/payment/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post Updated Successfully")
        this.setState(
          {
            holdername:"",
            cvc:"",
            cardnum:"",
            cardname:"",
            expirdate:"",
            status:""
          }
        )
      }
    })


  }


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:4000/payment/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          holdername:res.data.post.holdername,
          cvc:res.data.post.cvc,
          cardnum:res.data.post.cardnum,
          cardname:res.data.post.cardname,
          expirdate:res.data.post.expirdate,
          status:res.data.post.status,
        });

        console.log(this.state.post);
      }

    });

  }

  render() {
    return (
        <div class="row"  style={{marginTop:'25px'}} >

    <div class="col-6">
      <br/>
      <br/>
      <br/>
      <br/>
    
      <img src="https://media.istockphoto.com/vectors/credit-card-sign-for-mobile-app-design-realistic-3d-vector-digital-vector-id1256139153?k=20&m=1256139153&s=612x612&w=0&h=4Z7WBpCBYbmPBQB0YMmPPhZTh-0py8CpETriCUA8iHU=" width="90%" height="78%"  style={{marginLeft:'25px'}} />
      
    </div>
    
    
    <div class="col-5">
      <div className="mycard">
    <div className="card" >
    
<div className="card-body">

 

        <div className="col-md-8 mt-4 mx-auto">
        <br/>


          <h1 className="h3 mb-3 font-weight-normal">  Edit Form</h1>

        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}} >Card Holdeer Name</label>
              <input type="text"
              className="form-control"
              name="holdername"
              placeholder="Holder Name"
              value={this.state.holdername}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Cvc</label>
              <input type="text"
              className="form-control"
              name="cvc"
              placeholder="XXX"
              value={this.state.cvc}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Card Number</label>
              <input type="text"
              className="form-control"
              name="cardnum"
              placeholder="Card Number"
              value={this.state.cardnum}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Card Name</label>
              <input type="text"
              className="form-control"
              name="cardname"
              placeholder="Card Name"
              value={this.state.cardname}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Expire Date</label>
              <input type="date"
              className="form-control"
              name="expirdate"
              placeholder="Expire Date"
              value={this.state.expirdate}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Status</label>
              <input type="text"
              className="form-control"
              name="status"
              placeholder="Pending"
              value={this.state.status}
              onChange={this.handleInputChange}/>
            </div>





            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
            <br/>
           
          </form>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        
        </div>
    )
  }
}