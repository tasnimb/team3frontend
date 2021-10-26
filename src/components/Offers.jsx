import React from 'react'
import Box from "@material-ui/core/Box";
import testim from "./images/GOTImages/gotim1.jpeg";
import testim2 from "./images/GOTImages/gotim2.jpeg";
import testim3 from "./images/GOTImages/gotim3.jpeg";

const Offers = () => {

    return (
        <div>
            <table>
            <tr>
                <td style ={{padding:"3em"}}>
            <Box style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px"}}>
            <h1>Flight offers</h1>
        </Box>
        </td>
        <td style ={{padding:"3em"}}>
            <Box style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px"}}>
            <h1>Map</h1>
        </Box>
        </td>
        </tr>
        </table>


  
        </div>
    )
}

export default Offers
