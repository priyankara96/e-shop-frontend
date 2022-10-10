import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Footer from '../../Footer';
// import './myStyle.css'


export default class CreatePayment extends Component {

  constructor(props){
    super(props);
    this.state={
        holdername:"",
        cvc:"",
        cardnum:"",
        cardname:"",
        expirdate:"",
        status:"pending"
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
  
    //const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const con = /^[0-9\b]+$/;
    const cv =  /^[0-9\b]+$/;
    if(holdername == "" || cvc == "" || cardnum == "" || cardname == "" || expirdate == "" || status==""){
      swal("Please fill the form correctly", "Form values cannot be empty", "error");
    }


     else if((!con.test(String(cardnum))) || (cardnum.length != 16))
    {swal("Invalid Card Number !", "card number should be valide pattern", "error");}
   
   else if((!cv.test(String(cvc))) || (cvc.length != 3)){
    swal("Invalid Cvv !", "Do not enter less than 3 letters !", "error");
   }
    else{
      swal({
        title: "Are you sure?",
        text: `Name: ${this.state.holdername} | Cvv: ${this.state.cvc} | Card Number: ${this.state.cardnum} | Card name: ${this.state.cardname} | Expire Date: ${this.state.expirdate} | Status: ${this.state.status}}` ,
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

    axios.post("http://localhost:4000/payment/save",data).then((res) =>{
      if(res.data.success){
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

          // swal("Order Added Successfully!", "Your oder will be accepted"+ `${this.state.status}`, "success");

        }

      })

      swal("Order Added Successfully!", {

        icon: "success",

      });

    } else {

      swal("Your Order is not completed!");

    }

  });
} 

}

//demo button method
demo =() => { 

  //setState
  this.setState ({
    holdername:"Nipuna Udayantha"
  })

  this.setState ({
    cvc:"756"
  })

  this.setState ({
    cardnum:"8765345678987623"
  }) 

  this.setState ({
    cardname:"Visa"
  }) 

}

  render() {
    return (
        
      
<div class="row"  style={{marginTop:'25px'}} >

    <div class="col-6">
      <br/>
      <br/>
      <br/>
      <br/>
    
      <img src="https://media.istockphoto.com/vectors/credit-card-sign-for-mobile-app-design-realistic-3d-vector-digital-vector-id1256139153?k=20&m=1256139153&s=612x612&w=0&h=4Z7WBpCBYbmPBQB0YMmPPhZTh-0py8CpETriCUA8iHU=" width="90%" height="78%" />
      
    </div>
    
    
    <div class="col-5">
      <div className="mycard">
    <div className="card" >
    
<div className="card-body">

 

        <div className="col-md-8 mt-4 mx-auto">
        <br/>


          <h1 className="h3 mb-3 font-weight-normal">Card New Payment</h1>


          
          
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <b><label style={{marginBottom:'5px'}} >Card Holdeer Name</label></b>
              <input type="text"
              className="form-control"
              name="holdername"
              placeholder="Holder Name"
              value={this.state.holdername}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <b><label style={{marginBottom:'5px'}}>Cvc</label></b>
              <input type="text"
              className="form-control"
              name="cvc"
              placeholder="XXX"
              value={this.state.cvc}
              onChange={this.handleInputChange}/>
            </div>


            <div className="form-group" style={{marginBottom:'15px'}}>
              <b><label style={{marginBottom:'5px'}}> Card Number</label></b>
              <input type="text"
              className="form-control"
              name="cardnum"
              placeholder="0000 0000 0000 0000"
              value={this.state.cardnum}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <b><label style={{marginBottom:'5px'}}>Card Name</label></b>
              <input type="text"
              className="form-control"
              name="cardname"
              placeholder="Card Name"
              value={this.state.cardname}
              onChange={this.handleInputChange}/>
            </div>
        
            <div className="form-group" style={{marginBottom:'15px'}}>
              <b><label style={{marginBottom:'5px'}}>Expire Date</label></b>
              <input type="date"
              className="form-control"
              name="expirdate"
              placeholder="Expire Date"
              value={this.state.expirdate}
              onChange={this.handleInputChange}/>
            </div>

            

            <b><label style={{marginBottom:'5px'}}>Payment Status: Pending </label></b>
            <br/>

            

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          <br/><br/>
          <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.demo} > Demo </button>

          </form>
          <br></br>

          <marquee direction="left"><h2 class="display-3"><img src="http://gifgifs.com/animations/jobs-people/office-and-businessmen/Handshake.gif"/><b><i>Secure Payment With E-SHOP </i></b></h2></marquee>
          </div>
          </div>
          </div>
        </div>
        <br/>
<br/>
        </div>
        </div>
    )
  }
}