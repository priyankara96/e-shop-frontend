import react, {Component} from 'react';
import axios from 'axios';



export default class PostPayementDetails extends Component {
    constructor(props){
        super(props);
        
        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });

    }

     


    

  render(){
    const {holdername,cvv,card,cardname,expiredate,status}= this.state.post;

    return(

            

    <div style={{marginTop:'20px'}}>



        <h4>{holdername}</h4>
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">Cvv</dt>
            <dd className="col-sm-9">{cvv}</dd>

            <dt className="col-sm-3">Card Number</dt>
            <dd className="col-sm-9">{card}</dd> 

            <dt className="col-sm-3">Card Name</dt>
            <dd className="col-sm-9">{cardname}</dd>

            <dt className="col-sm-3">Expire Date</dt>
            <dd className="col-sm-9">{expiredate}</dd>

            <dt className="col-sm-3">Status</dt>
            <dd className="col-sm-9">{status}</dd>


            
        </dl>
        
        

    </div>

        

    )
  }
}
