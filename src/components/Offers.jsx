import React from 'react'
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router-dom";

const Offers = () => {

    console.log("here")
    let history = useHistory();

    const departTime= useLocation().departTime;
    const returnTime= useLocation().returnTime;
    const departFrom= useLocation().departFrom;
    const returnFrom= useLocation().returnFrom;
    const prices= useLocation().prices;

    console.log("arrays")
    console.log(departTime)
    console.log(returnTime)
    console.log(departFrom)
    console.log(returnFrom)
    console.log(prices)
    console.log("arrays")
    /*
    
    if (typeof(offers) == "undefined") {
        history.push("/unavailable")
    }
    */
    console.log(prices)
    
    console.log("Journey 1")
    console.log("£" + prices[0])
    console.log(departFrom[0] + " -> " + returnFrom[0])
    console.log(departTime[0])
    console.log(returnFrom[0] + " -> " + departFrom[0])
    console.log(returnTime[0])
    

    /*

        */


    return (
        <div>
            <table>
            <tr>
            <td style ={{padding:"3em"}}>
                    
                    <Box style = {{backgroundColor:"white", color:"black", 
                height:"100%", 
                width:"auto", 
                borderRadius: "20px"}}>
                    <h1>Journey 1</h1>
                    <p>{"£" + prices[0]}</p>
                    <p>{departFrom[0] + " -> " + returnFrom[0]}</p>
                    <p>{departTime[0]}</p>
                    <p>{returnFrom[0] + " -> " + departFrom[0]}</p>
                    <p>{returnTime[0]}</p>
        
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
