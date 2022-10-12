import React, { Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class report extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}


componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:4000/payments").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }


  });
}



onDelete = (id) =>{

  axios.delete(`http://localhost:4000/payment/delete/${id}`).then((res) =>{
    alert("Delete Succesfully");
    this.retrievePosts();
  })

}

filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.holdername.includes(searchKey) ||
    post.holdername.toLowerCase().includes(searchKey) ||
    post.cvc.includes(searchKey) ||
    post.cvc.toLowerCase().includes(searchKey) ||
    post.cardnum.includes(searchKey) ||
    post.cardnum.toLowerCase().includes(searchKey) ||
    post.cardname.includes(searchKey) ||
    post.cardname.toLowerCase().includes(searchKey) ||
    post.expirdate.includes(searchKey) ||
    post.expirdate.toLowerCase().includes(searchKey) ||
    post.status.includes(searchKey) ||
    post.status.toLowerCase().includes(searchKey) 
  )

  this.setState({posts:result})

}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:4000/payments").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

 //pdf generating
 jsPdfGenerator = () => {

  //new document in jspdf
  var doc = new jsPdf('p','pt');

  doc.text(210,30,"Card Payment Details")
  doc.autoTable({  html:'#my-table' })

  doc.autoTable({
    columnStyles: { europe: { halign: 'center' } }, 
    margin: { top: 10 },
  })

  //save the pdf
  doc.save("Card Payment Details.pdf");
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h4>Payment List For Admin </h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
      <br/> <button onClick={this.jsPdfGenerator} type="button" class="btn btn-primary">Pdf</button> <br/>
      <br/>
        <table id="my-table" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CardHolder Name</th>
              <th scope="col">Cvc</th>
              <th scope="col">Card Number</th>
              <th scope="col">Card Name</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.holdername}
                    </a>
                </td>
                <td>{posts.cvc}</td>
                <td>{posts.cardnum}</td>
                <td>{posts.cardname}</td>
                <td>{posts.expirdate}</td>
                <td>{posts.status}</td>
                <td>
                  <a className="btn btn-warning" href={`/payment/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

        <button className="btn btn-success" style={{marginTop:"50px"}}><a href="/add" style={{textDecoration:'none',color:'white'}}> New Payment</a></button>
        <br/>
        
      </div>
    )
  }
}