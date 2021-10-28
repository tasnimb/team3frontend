import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import GalleryObj from "./GalleryObj";

import GOT from "./images/GOTposter.jpeg"
import CN from "./images/CN.jpeg"
import GL from "./images/GLtile.jpeg"
import MOE from "./images/moeTitle.jpg"
import GA from "./images/gaTitle.jpg"
import B from "./images/bpTitle.jpg"
import SG from "./images/sgTitle.jpg"

import TRAVELVID from "./videos/video.mp4"

const Gallery = () => {
    
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      React.useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        
    }
    
        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        
    }
      })


    return (
        <>
        <div style = {{padding:"0.6em"}} />
        <div className = "videoWrapper" style = {{borderTop:"8px double white", borderBottom:"8px double white"}}>
            <video  width="100%" height="600" autoPlay muted loop style = {{objectFit:"cover"}}>
                <source src={TRAVELVID} type="video/mp4"/>
            </video>
            <div className = "overlay" style = {{backgroundImage:"linear-gradient(180deg, rgba(0,0,0,0),rgba(0,0,0,0.4),rgba(0,0,0,0.5), rgba(0,0,0,0.6), rgba(0,0,0,1))"}}> 
            <p  style = {{textShadow:"0.5px 0.5px 0.5px black", fontSize:"50px"}}>Sky Travel</p>
            <p style = {{textShadow:"0.5px 0.5px 0.5px black"}}>Select your favourite shows, plan your journey, travel the world</p>

            </div>
        </div>
        <div style = {{padding:"0.6em"}} />
        <table className = "GalleryTable">

            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GOT} title ="Game of Thrones" location = "Reykjavik" latitude = "64.1466" longitude = "-21.9426" airport ="KEF"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl" location = "Pripyat" latitude = "51.4045" longitude = "30.0542" airport ="IEV"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London" location = "London" latitude = "51.5072" longitude = "-0.1276" airport ="LHR"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {MOE} title ="Mare of Easttown" location = "Pennsylvania" latitude = "41.2033" longitude = "-77.1945" airport ="PHL"/></td>
            <td><GalleryObj image = {GA} title ="Grey's Anatomy" location = "Washington" latitude = "47.7511" longitude = "-120.7401" airport ="DCA"/></td>
            <td><GalleryObj image = {B} title ="Bulletproof" location = "Cape Town" latitude = "-33.9249" longitude = "18.4241" airport ="CPT"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {SG} title ="Squid Game" location = "Daejeon" latitude = "36.3504" longitude = "127.3845" airport ="CJJ"/></td>
            </tr>
        </table>
        </>
    )
}

export default Gallery