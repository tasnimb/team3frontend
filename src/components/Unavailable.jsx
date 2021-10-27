import React from 'react'
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router-dom";

const Offers = () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let history = useHistory();

    return (

        <>

            <Box className= "BoxObj" style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px"}}>
            <div style ={{padding:"1em"}}>
            <h1>Sorry, no flights are available for these dates</h1>
            </div>
            <button type="submit" className="btn btn-primary btn-block"  onClick={() => {history.push("/gallery")}}>
                Back to browsing
            </button>
            <br/>
            <br/>


        </Box>
        </>
    )
}

export default Offers