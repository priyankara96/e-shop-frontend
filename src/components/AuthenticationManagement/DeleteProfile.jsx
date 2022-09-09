import React, { useState, useEffect } from "react";
import { Button} from "antd";
import useUser from "../../services/UserContext";
import useRequest from "../../services/RequestContext";
import { useHistory } from "react-router-dom";
import './DeleteProfile.css'
import 'antd/dist/antd.css';


function DeleteProfile() {
    const { updateToken } = useRequest();
    const { setUser } = useUser();
  
    const history = useHistory();
    const logout = async () => {
      await updateToken();
      setUser({});
  
      history.push("/login");
      window.location.reload(true);
    }; 

  return (

    <>
    
    <div>
      <div className="main-container-profilee">

        <div className="form-profilee">

          <h3>E-SHOP</h3>
          <h1>User Profile</h1>
          <br/>
            <form>
            <h2 class="text-danger">Account does not exist !</h2>
            <h2 class="text-danger">Has been deleted.</h2>
            <div style={{marginLeft:"200px"}}>
            <a href="/">
                <Button type="primary" onClick={logout}>
                    Go to home page
                </Button>
            </a>
            </div>
            </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default DeleteProfile;