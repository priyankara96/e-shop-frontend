import React, { Component } from 'react';
import axios from 'axios';
import { Button } from "antd";
import * as AiIcons from 'react-icons/ai';
import background from "../../images/background2.jpeg";

// Show all users  data
const Alldata = props => ( 
    <tr >
        <td > { props.alldata.name } </td> 
        <td > { props.alldata.name1 } </td> 
        <td > { props.alldata.birthday.substring(0, 10) } </td>
        <td > { props.alldata.gender } </td>
        <td > { props.alldata.nic } </td> 
        <td > { props.alldata.email } </td> 
        <td > { props.alldata.number } </td> 
        <td > { props.alldata.role } </td> 

            <td>
                <a href = { "/alledit/" + props.alldata._id } onclick="window.location.reload(true)" > Edit </a> &nbsp; | &nbsp;
                <a href = "/Details" style={{color:"red"}} onClick={() => { props.deleteAlldata(props.alldata._id) }}>Delete</a > 
            </td> 
    </tr>
)

export default class AlldatasList extends Component {
    constructor(props) {
        super(props);

        this.deleteAlldata = this.deleteAlldata.bind(this) 
        this.handleSearchArea = this.handleSearchArea.bind(this);

        this.state = { alldataa: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/CommonSignup/')
            .then(response => {
                this.setState({ alldataa: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteAlldata(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:4000/CommonSignup/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                alldataa: this.state.alldataa.filter(el => el._id !== id)
            })
        }

    }

    alldataList() {
        return this.state.alldataa.map(currentalldata => {
            return < Alldata alldata = { currentalldata }
            deleteAlldata = { this.deleteAlldata }
            key = { currentalldata._id }
            />;
        })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:4000/CommonSignup/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.name.includes(searchKey) || 
                props.name1.includes(searchKey) ||
                props.nic.includes(searchKey) ||
                props.role.includes(searchKey)
            )

            this.setState({ alldataa: result })

        });

    }


    render() {
        return ( 
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                <a href="/AuthenticationManagementDashboard" type="button" class="btn btn-outline-secondary" style={{marginLeft:"50px", marginTop:"5px"}} > <h5><AiIcons.AiOutlineCaretLeft /> &nbsp; </h5> </a>
            <div style={{marginLeft:"50px", marginRight:"50px", marginTop:"0px"}}>
                <br/>
            <div className = "row" >
            <h1 className="text-center"  > Details of all Users </h1> 
            </div>


            <div className = "row" >
                <div className = "col-lg-9 mt-2 mb-2" ></div> 
                <div className = "col-lg-3 mt-2 mb-2" >
                    <input className = "form-controll"
                        type = "search"
                        placeholder = "Search"
                        name = "searchQuery"
                        onChange = { this.handleSearchArea } >
                    </input> 
                </div> 
            </div>
            <br/>
            
            <form style={{backgroundColor: "#ffff"}}>
            <table class="table table-bordered table-white">
                <thead className = "thead-light" >
                    <tr>
                        <th> First Name </th> 
                        <th> Last Name </th> 
                        <th> Birth Day </th> 
                        <th> Gender </th> 
                        <th> NIC </th> 
                        <th> Email </th> 
                        <th> TP </th> 
                        <th> Role </th>
                        <th > Actions </th> 
                    </tr > 
                </thead> 
            <tbody > { this.alldataList() } 
            </tbody> 
            </table>

            {/* ************ */}
            <div class="center">
					<div class="pagination">
						<a href="#">&laquo;</a>

						<a href="/Details" class="active">
							1
						</a>
						{/* <a href="#">2</a> */}
						<a href="#">&raquo;</a>
					</div>
			</div>

            </form>

            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        )
    }
}