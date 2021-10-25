import React from 'react'
import Box from "@material-ui/core/Box";

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
