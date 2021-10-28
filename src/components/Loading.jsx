import React from 'react'
import Plane from "./images/airplane.gif"
import { useHistory } from "react-router-dom";

const Loading = () => {

    let history = useHistory();



    const toError = () => {
        const currentUrl = window.location.pathname
        if (currentUrl == "/loading") {
            history.push('/error')
        }
    }

    setTimeout(toError, 30000)
    return (
        <div style ={{textAlign:"center"}}>
            <img src = {Plane} style ={{ width:"25%", margin:"auto"}}/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading
