import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import background from "../../images/art.jpg";

// Update user details
export default class All_Edit_Data extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeName1 = this.onChangeName1.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeInputpw = this.onChangeInputpw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

 
        this.state = {
            Name: '',
            Name1: '',
            Birthday: '',
            Gender: '',
            NIC: '',
            Email: '',
            Number: '',
            Role: '',
            Inputpw: '',

            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/CommonSignup/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    name1: response.data.name1,
                    birthday: response.data.birthday.substring(0, 10),
                    gender: response.data.gender,
                    nic: response.data.nic,
                    email: response.data.email,
                    number: response.data.number,
                    role: response.data.role,
                    inputpw: response.data.inputpw,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:4000/CommonSignup/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.name),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeName1(e) {
        this.setState({
            name1: e.target.value
        })
    }

    onChangeBirthday(e) {
        this.setState({
            birthday: e.target.value
        })
    }


    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        })
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    onChangeInputpw(e) {
        this.setState({
            inputpw: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const {name,name1,nic,email,number,role,inputpw} = this.state;
        const alldata = {
            name: this.state.name,
            name1: this.state.name1,
            birthday: this.state.birthday,
            gender: this.state.gender,
            nic: this.state.nic,
            email: this.state.email,
            number: this.state.number,
            role: this.state.role,
            inputpw: this.state.inputpw,
        }

        console.log(alldata);
        //validation
        
        const cuem = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        if (name.length < 4)  {
            swal("First Name invalid !", "length shuld be greater than 4", "error");
        } else if (name1.length < 4)  {
            swal("Last Name invalid !", "length shuld be greater than 4", "error");
        } else if (nic.length < 9)  {
            swal("NIC Number invalid !", "length shuld be greater than 9", "error");
        } else if ((!cuem.test(String(email)))) {
            swal("Invalid email address !", "Please enter valid email address", "error");
        } else if (number.length < 4)  {
            swal("Invalid Contact Number !", "contact number should be valide pattern", "error");
        } else if (role.length < 4)  {
            swal("Role invalid !", "length shuld be greater than 4", "error");
        } else if (inputpw.length < 4)  {
            swal("Password invalid !", "length shuld be greater than 4", "error");
        } 
        else {
            
       
        axios.put('http://localhost:4000/AllData/update/' + this.props.match.params.id, alldata)
        .then(res => console.log(res.data));
        // alert("Edit Successfully")
        
        swal({
            title: "Done!",
            text: "Edit Successfully",
            icon: "success",
            button: "Okay!"
        })
        .then((value) => {
            window.location = '/Details';
        });
    }
}


render() {
    return (
        
      
    <div class="row"  style={{marginTop:'10px'}} >

    <div class="col-6">
      <br/>
      <br/>
      <br/>
      <br/>
    
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/edit-profile-4487168-3726231.png" width="90%" height="70%" marginLeft="20px" />
      
    </div>
    
    
    <div class="col-5">
    <div className="mycard">
    <div className="card" >
    
    <div className="card-body">
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
    <br/> 
    <h1 className="text-center" >  Edit User Details </h1> 

        <div className="col-md-8 mt-4 mx-auto">
        <br/>
          
            <form className="needs-validation" noValidate>
                <div>

                    <div className = "form-group" >
                    <b><label > First Name : &nbsp; </label></b>
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.name }
                    onChange = { this.onChangeName }
                    /> 
                    </div> <br/> 

                    <div className = "form-groupp" >
                    <b><label > Last Name : &nbsp; </label></b>
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.name1 }
                    onChange = { this.onChangeName1 }
                    /> 
                    </div> <br/>  

                    <div className = "form-groupp" >
                    <b><label > Birthday : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.birthday }
                    onChange = { this.onChangeBirthday }
                    /> 
                    </div> <br/> 
        

                    <div className = "form-groupp" >
                    <b><label > Gender : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.gender }
                    onChange = { this.onChangeGender }
                    /> 
                    </div> <br/> 

                    <div className = "form-groupp" >
                    <b><label > NIC : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.nic }
                    onChange = { this.onChangeNIC }
                    /> 
                    </div> <br/> 

                    <div className = "form-groupp" >
                    <b><label > Email : &nbsp; </label></b>
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.email }
                    onChange = { this.onChangeEmail }
                    /> 
                    </div> <br/>

                    <div className = "form-group" >
                    <b><label > Number : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.number }
                    onChange = { this.onChangeNumber }
                    /> 
                    </div> <br/>

                    <div className = "form-group" >
                    <b><label > Role : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.role }
                    onChange = { this.onChangeRole }
                    /> 
                    </div> <br/> 

                    <div className = "form-group" >
                    <b><label > Password : &nbsp; </label></b>  
                    <input type = "text"
                    required className = "form-controll"
                    value = { this.state.inputpw }
                    onChange = { this.onChangeInputpw }
                    /> 
                    </div> <br/> 
                    


                    <div className = "form-group" style={{marginTop:'5px'}} >
                    <button className="btn btn-success" type="submit"  onClick={this.onSubmit}>
                     <h4>Update</h4>
                    </button>
                    <a href="/Details"> <button type="button" class="btn btn-warning" > <h4>Cansal &nbsp;</h4> </button></a>
                    </div> 
                    
                </div> 
            </form>

          
          </div>
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