import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";


const SignIn = () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let history = useHistory();

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const getLoggedIn = () => {
        console.log("sending1")
        fetch("http://localhost:8081/api/getLoggedIn", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({"email":email, "password":password})
        
        })
        .then(response => response.json())
        .then(data => console.log(data)).catch(()=> { 
            console.log("caught log in error")
            history.push("/gallery")
          });
}

    return (
        <>
        <br/>
        <Box  className= "BoxObj" style = {{backgroundColor:"white", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px",
        boxShadow:"1px 1px 5px black"}}>

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
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {

                history.push("/gallery")
                
                }}>Sign In</button>
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
        <br/>
        </>
    )
}

export default SignIn