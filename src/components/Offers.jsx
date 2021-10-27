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
    
    
    if (typeof(prices[0]) == "undefined") {
        history.push("/unavailable")

    }
    
    

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
                                    <h2>{"Journey " + (i+1)}</h2>
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
        <div style ={{width:"100%"}}>
             <Box style = {{backgroundColor:"white", color:"black",  
        minWidth:"100%",
        textAlign:"center"}}>
            <h2 style = {{paddingTop:"0.5em"}}>Your route:</h2>
            <div className="mapSquare" style = {{paddingBottom:"0.6em"}}>
            <iframe
                style = {{borderRadius:"1em", border:"3px double", borderColor:"black"}}
                title="Google Map"
                width="55%"
                height="400em"
                loading="lazy"
                allowFullScreen
                
                src={"https://www.google.com/maps/embed/v1/directions?key=AIzaSyBbMF8RmakgiAM7bUmKab0M_pclQTitGfs&origin="
                + departFrom[0] + "+Airport" +
                "&destination="
                + returnFrom[0] + "+Airport" +
                "&mode=flying"}>
            </iframe>
        </div>
        </Box>
        <h2 style = {{padding:"0.5em"}}>Choose your journey:</h2>
            <table>
            <tr className ="formGroup">
                

         {createOfferComponents()
         }
  
        </tr>
        </table>


  
        </div>
    )
}

export default Offers
