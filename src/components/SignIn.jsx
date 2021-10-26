import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";


const SignIn = () => {

    let history = useHistory();

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);


    return (
        <Box style = {{backgroundColor:"white", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px"}}>

        <form style = {{padding: "30px", paddingLeft:"55px", paddingRight:"55px"}}>
            <h1 style ={{color:"black", textAlign:"center"}}>Sign In</h1>

            <div className ="form-group">
                <label style = {{fontSize:"18px"}}>Email address</label>
                <input type='email' className="form-control" placeholder="email@example.com" />
            </div>

            <div className ="form-group">
                <label style = {{fontSize:"18px"}}>Password</label>
                <input type='password' className="form-control" placeholder="***********" />
            </div>

            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1" style ={{fontSize:"13px", textAlign:"center" }}>Remember me</label>
                    </div>
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/gallery")}}>Sign In</button>
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/signup")} }>Sign Up?</button>
            </div>
            
            <div >
                 <a href="#" >
                     <p style ={{fontSize:"13px", textAlign:"center" }}> Forgotten password? </p>
                     </a>
            </div>
            

        </form>
        </Box>
    )
}

export default SignIn