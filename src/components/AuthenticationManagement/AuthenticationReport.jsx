import React, { Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf'
import 'jspdf-autotable'
import * as AiIcons from 'react-icons/ai';
import background from "../../images/background2.jpeg";



// Generate report - all users
export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = { user: [], posts: [] };
    }

    componentDidMount() {
        this.retrievePosts();
    }


    retrievePosts() {
        axios.get('http://localhost:4000/CommonSignup/')
            .then(response => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteUser(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:4000/CommonSignup/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                users: this.state.users.filter(el => el._id !== id)
            })
        }
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:4000/CommonSignup/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.name.includes(searchKey) || props.name.toLowerCase().includes(searchKey) ||
                props.name1.includes(searchKey) || props.name1.toLowerCase().includes(searchKey) ||
                props.nic.includes(searchKey) || props.nic.toLowerCase().includes(searchKey) ||
                props.role.includes(searchKey) || props.role.toLowerCase().includes(searchKey) 
            )

            this.setState({ user: result })

        });

    }

      //pdf generating
      jsPdfGenerator = () => {

        //new document in jspdf
        var doc = new jsPdf('p','pt');

        doc.text(210,30,"Details of Users")
        doc.autoTable({  html:'#my-pdf' })

        doc.autoTable({
          columnStyles: { europe: { halign: 'center' } }, 
          margin: { top: 10 },
        })

        //save the pdf
        doc.save("Details of Users.pdf");
      }

    render() {
        return ( 
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                <a href="/AuthenticationManagementDashboard" type="button" class="btn btn-outline-secondary" style={{marginLeft:"10px", marginTop:"5px"}} > <h5><AiIcons.AiOutlineCaretLeft /> &nbsp; </h5> </a>
            <div className = "container" >
            <div style = {{ float: 'none' }} >
            </div> <br/>

            <div className = "row" >
                <div className = "col-lg-9 mt-2 mb-2" >
                <h1> Details of all Users </h1> <br/>

                <button type="button" title="Report generation" class="btn btn-outline-primary btn-sm" 
                        onClick={this.jsPdfGenerator} > <h4>Download as a PDF</h4>
                </button> 
                
                </div> 

                <div className = "col-lg-3 mt-2 mb-2" >
                    <input className = "form-controll"
                        type = "search"
                        placeholder = "Search"
                        name = "searchQuery"
                        onChange = { this.handleSearchArea } >
                    </input> 
                </div> 
            
            </div>

            <form style={{backgroundColor: "#ffff"}}>
            <table class="table table-bordered table-white" id="my-pdf" >
            <thead className = "thead-light" >
            <tr>
                <th scope = "col" > First Name </th> 
                <th scope = "col" > Last Name </th> 
                <th scope = "col" > Birth Day </th> 
                <th scope = "col" > Gender </th> 
                <th scope = "col" > NIC </th> 
                <th scope = "col" > Email </th> 
                <th scope = "col" > TP </th> 
                <th scope = "col" > Role </th> 
            </tr> 
            </thead> 
            <tbody > {
                this.state.user.map(props =>
                    <tr key = { props.id } >

                        <td> { props.name } </td> 
                        <td> { props.name1 } </td> 
                        <td> { props.birthday.substring(0, 10) } </td>  
                        <td> { props.gender } </td> 
                        <td> { props.nic } </td> 
                        <td> { props.email } </td> 
                        <td> { props.number } </td> 
                        <td> { props.role } </td> 

                    </tr>
                )

            }

            </tbody>
            </table>
            </form>
            
            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
            
        )
    }
}