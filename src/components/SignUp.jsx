import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";


const SignUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let checkError = false;
    Boolean(checkError);

    const initialValues = {firstName: "", lastName: "", email: "", password: "" };
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    //const [firstName, setFirstName] = useState(``);
    //const [lastName, setLastName] = useState(``);

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);

    let history = useHistory();

    const getRegistered = () => {
        fetch("http://localhost:8081/api/getRegister", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({"firstName": formValues.firstName, "lastName": formValues.lastName, "email":formValues.email, "password":formValues.password})
        })
        .then(response => response.json())
        .then(data => console.log(data));
      }

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        checkError = false;
        if(!values.firstName){
            errors.firstName = "*First Name is required";
            checkError = true;
        }
        if(!values.lastName){
            errors.lastName = "*Last Name is required";
            checkError = true;
        }
        if(!values.email){
            errors.email = "*Email is required";
            checkError = true;
        } else if(!regex.test(values.email)){
            errors.email = "*This is not a valid email format";
            checkError = true;
        }
        if(!values.Password){
            errors.password = "*Password is required";
            checkError = true;
        }else if(values.password < 4) {
            errors.password = "*Password must be over 4 characters";
            checkError = true;
        }
        return errors;
    }

    

    return (
        <>
        <br/>
        <Box  className= "BoxObj" style = {{backgroundColor:"white", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px",
        boxShadow:"1px 1px 5px black",
        color:"black"

        }}>

        <form onSubmit={handleSubmit} style = {{padding: "30px"}}>
            <h1 style ={{color:"black", textAlign:"center"}}>Sign Up</h1>

            <div className ="form-group">
                <label>First Name</label>
                <input type='text' 
                name="firstName"
                className="form-control" 
                placeholder="Please enter your first name" 
                value={formValues.firstName}
                onChange={handleChange}/>
            </div>
            <p className = "errors">{formErrors.firstName}</p>

            <div className ="form-group">
                <label>Last Name</label>
                <input type='text' 
                name="lastName"
                className="form-control" 
                placeholder="Please enter your last name"
                value={formValues.lastName}
                onChange={handleChange}/>
            </div>
            <p className = "errors">{formErrors.lastName}</p>

            <div className ="form-group">
                <label>Email address</label>
                <input type='email' 
                name="email"
                className="form-control" 
                laceholder="email@example.com" 
                value={formValues.email}
                onChange={handleChange}/>
            </div>
            <p className = "errors">{formErrors.email}</p>

            <div className ="form-group">
                <label>Password</label>
                <input type='password' 
                name="password"
                className="form-control" 
                placeholder="***********" 
                value={formValues.password}
                onChange={handleChange}/>
            </div>
            <p className = "errors">{formErrors.password}</p>

            <div className="form-group">
                <a href="#">Terms and conditions & Privacy policy</a>
            </div>

            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> I agree to the terms and conditions</label>
                    </div>
            </div>

            
            <button type="submit" onClick={() => { 

                console.log(checkError)
                console.log(formValues.firstName)
                if(formValues.firstName.length>0 && formValues.lastName.length>0 && formValues.email.length>0 && formValues.password.length>0){getRegistered()
                    history.push("/signup")
                    }}} className="btn btn-primary btn-block" >Create Account</button>

            <div>
                <p>Already a member?</p>
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/signin")}}>Sign In</button>
            </div>


            
            </form>
        </Box>
        <br/>
        </>
    )
}

export default SignUp