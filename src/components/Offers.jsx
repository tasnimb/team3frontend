import React from 'react'
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router-dom";

const Offers = () => {

    console.log("here")
    let history = useHistory();


    const departTime= useLocation().flightInfo.departTime;
    const returnTime= useLocation().flightInfo.returnTime;
    const departFrom= useLocation().flightInfo.departFrom;
    const returnFrom= useLocation().flightInfo.returnFrom;
    const prices= useLocation().flightInfo.prices;

    /*
    console.log("arrays")
    console.log(departTime)
    console.log(returnTime)
    console.log(departFrom)
    console.log(returnFrom)
    console.log(prices)
    console.log("arrays")
    */

    
    if (typeof(prices[0]) == "undefined") {
        history.push("/unavailable")

    }
    
    /*

    console.log(prices)
    
    console.log("Journey 1")
    console.log("£" + prices[0])
    console.log(departFrom[0] + " -> " + returnFrom[0])
    console.log(departTime[0])
    console.log(returnFrom[0] + " -> " + departFrom[0])
    console.log(returnTime[0])

     */

    function createOfferComponents(){
        var components = []
        for (let i = 0; i < prices.length; i++) {
            components[i] = <td className = "offer" style ={{padding:"3em"}}>
            
                                <Box style = {{backgroundColor:"white", color:"black", 
                                    height:"100%", 
                                    width:"auto", 
                                    borderRadius: "20px",
                                    textAlign:"center"}}>
                                    <div style = {{padding:"1em"}}>
                                    <h1>{"Journey " + (i+1)}</h1>
                                    <p>{"£" + prices[i]}</p>
                                    <p>{departFrom[i] + " -> " + returnFrom[i]}</p>
                                    <p>{departTime[i]}</p>
                                    <p>{returnFrom[i] + " -> " + departFrom[i]}</p>
                                    <p>{returnTime[i]}</p>
                                    </div>

                                </Box>
                            </td>
        }

    return components
    }


    return (
        <div>
             <Box style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px",
        textAlign:"center"}}>
            <h1>Map</h1>
        </Box>
            <table>
            <tr className ="formGroup">

         {createOfferComponents()}
  
        </tr>
        </table>


  
        </div>
    )
}

export default Offers
