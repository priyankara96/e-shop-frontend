import React, { Component } from "react";
import axios from "axios";
import jsPdf from "jspdf";
import "jspdf-autotable";
import "./myStyles.css";

class OrderReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:4000/orders").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }



 
  //Report pdf generating
  jsPdfGenerator = () => {
    //new document in jspdf
    var doc = new jsPdf("l", "pt", "a3");

    doc.text(600, 20, "Order Details Report", { align: "center" });
    doc.autoTable({ html: "#order-table" });

    doc.autoTable({
      columnStyles: { europe: { halign: "center" } },
      margin: { top: 10 },
    });

    //save the pdf
    doc.save("Order Details.pdf");
  };

  render() {
    return (
      <div>
        <div className="container">
        <br/>
        <div style={{fontSize:'15px'}} >
      <a href="/order/home" class="previous" style={{color:'white'}}>&laquo; Previous</a></div>
          <div className="text-center">
            <br />
            <br />
            <h2 className="adminletter" style={{fontSize:'25px'}}>
              {" "}
              Order Report {" "}
            </h2>
            <br />
            <br />
          </div>
          

          <table id="order-table" className="table table-striped" style={{fontSize:'15px'}}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order Index</th>
                <th scope="col">Customer Name</th>
                <th scope="col">PostalNo</th>
                <th scope="col">Street</th>
                <th scope="col">Town</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Order Date</th>
                <th scope="col">Status</th>
                <th scope="col">Order Total(LKR)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{posts.name}</td>
                  <td>{posts.postalNo}</td>
                  <td>{posts.street}</td>
                  <td>{posts.town}</td>
                  <td>{posts.contactNo}</td>
                  <td>{posts.orderDate}</td>
                  <td>{posts.status}</td>
                  <td>{posts.cartTotal}</td>
                </tr>
              ))}
            </tbody>
            <br />
            <br />
          </table>

         

          <br />
          <div style={{marginLeft:'80%'}}>
            <button className="btn btn-primary" onClick={this.jsPdfGenerator} style={{width:'170px', height:'40px', fontSize:'15px'}}>
            Generate Report PDF
          </button></div>
          
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default OrderReport;
