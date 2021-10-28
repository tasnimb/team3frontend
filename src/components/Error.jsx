import React from 'react'
import Plane from "./images/airplane.gif"
import { useHistory, useLocation } from "react-router-dom";


const Error = () => {
    let history = useHistory();
    return (
        <div style ={{textAlign:"center"}}>
            <img src = {Plane} style ={{ width:"25%", margin:"auto"}}/>
            <p>Sorry, something went wrong</p>
            <button type="submit" className="btn btn-primary btn-block"  onClick={() => {history.push("/gallery")}}>
                Back to browsing
            </button>
        </div>
    )
}

export default Error