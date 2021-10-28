import React from 'react'
import Plane from "./images/airplane.gif"

const Loading = () => {
    return (
        <div style ={{textAlign:"center"}}>
            <img src = {Plane} style ={{ width:"25%", margin:"auto"}}/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading
