import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";

const SignUp = () => {

    let history = useHistory();

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    return (
        <Box style = {{backgroundColor:"white", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px",

        }}>

        <form style = {{padding: "30px"}}>
            <h1 style ={{color:"black", textAlign:"center"}}>Sign Up</h1>

            <div className ="form-group">
                <label>First Name</label>
                <input type='text' className="form-control" placeholder="Please enter your first name" />
            </div>

            <div className ="form-group">
                <label>Last Name</label>
                <input type='text'  className="form-control" placeholder="Please enter your last name"/>
            </div>

            <div className ="form-group">
                <label>Email address</label>
                <input type='email' className="form-control" placeholder="email@example.com" />
            </div>

            <div className ="form-group">
                <label>Password</label>
                <input type='password' className="form-control" placeholder="***********" />
            </div>

            <div className="form-group">
                <a href="#">Terms and conditions & Privacy policy</a>
            </div>

            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> I agree to the terms and conditions</label>
                    </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Create Account</button>

            <div>
                <p>Already a member?</p>
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/signin")}}>Sign In</button>
            </div>


            
            </form>
        </Box>
    )
}

export default SignUp