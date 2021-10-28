import React from 'react'
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router-dom";


const Offers = () => {

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
    
    console.log("here")
    let history = useHistory();



    try {
        const departTime= useLocation().flightInfo.departTime;
 
        } catch(err) {
            console.log("offers error")
            history.push("/error")
            window.location.reload();}


    
    /* Reroute back button use */

    

    const departTime= useLocation().flightInfo.departTime;
    const returnTime= useLocation().flightInfo.returnTime;
    const departFrom= useLocation().flightInfo.departFrom;
    const returnFrom= useLocation().flightInfo.returnFrom;
    const prices= useLocation().flightInfo.prices;
    var duration = useLocation().flightInfo.duration;

    
    

    

    function createOfferComponents(){
        var components = []
        for (let i = 0; i < prices.length; i++) {
            components[i] = <td className = "offer" style ={{padding:"3em"}}>
                                <a style= {{textDecoration:"none"}} href='https://www.skyscanner.net/?'>
            
                                <Box  className= "BoxObj" style = {{backgroundColor:"white", color:"black", 
                                    height:"100%", 
                                    width:"auto", 
                                    borderRadius: "20px",
                                    textAlign:"center",
                                    }}>
                                    <div style = {{padding:"1em"}}>
                                    <h2 style ={{color:"blue", fontSize:"20px", textDecoration:"underline 1px"}}>{"Journey " + (i+1)}</h2>
                                    <h2 style ={{color:"green", fontSize:"18px"}}>{"£" + prices[i]}</h2>
                                    <p>_____________________</p>
                                    <p>{departFrom[i] + "  →  " + returnFrom[i]}</p>
                                    <p>{departTime[i].split("T")[0]}</p>
                                    <p>{departTime[i].split("T")[1].slice(0,-3)}</p>
                                    <p>_____________________</p>
                                    <p>{returnFrom[i] + "  →  " + departFrom[i]}</p>
                                    <p>{returnTime[i].split("T")[0]}</p>
                                    <p>{returnTime[i].split("T")[1].slice(0,-3)}</p>
                                    </div>

                                </Box>
                                </a>
                            </td>
        }

    return components
    }
    

    duration = duration.split("T")[1].split("H")[0]

    return (
        <div style ={{width:"100%"}}>
             <Box style = {{backgroundColor:"white", color:"black",  
        minWidth:"100%",
        textAlign:"center"}}>
            <h2 style = {{paddingTop:"0.5em"}}>Your route:</h2>
            <div className="mapSquare" style = {{paddingBottom:"0.6em"}}>
            <iframe
                className= "BoxObj"
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
            <br/>
            <br/>
            <a style= {{textDecoration:"none"}} href="https://onetreeplanted.org/">
            <Box className="offer" style = {{backgroundColor:"green", color:"white",  
        minWidth:"100%",
        textAlign:"center"}}>
            <p>Plant {Math.round((duration*90)/21)} trees for a carbon neutral trip</p>
            </Box>
            </a>
            
        </div>
        </Box>
        <h2 style = {{textShadow:"0.5px 0.5px 0.5px black", padding:"0.5em"}}>Choose your journey:</h2>
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
