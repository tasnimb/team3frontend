import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import GalleryObj from "./GalleryObj";
import GOT from "./images/GOTposter.jpeg"
import CN from "./images/CN.jpeg"
import GL from "./images/GLtile.jpeg"
import TRAVELVID from "./videos/video.mp4"

const Gallery = () => {


    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);


    return (
        <>
        <div style = {{padding:"0.6em"}} />
        <div className = "videoWrapper" style = {{borderTop:"8px double white", borderBottom:"8px double white"}}>
            <video  width="100%" height="600" autoPlay muted loop style = {{objectFit:"cover"}}>
                <source src={TRAVELVID} type="video/mp4"/>
            </video>
            <div className = "overlay" style = {{backgroundImage:"linear-gradient(180deg, rgba(0,0,0,0),rgba(0,0,0,0.4),rgba(0,0,0,0.5), rgba(0,0,0,0.6), rgba(0,0,0,1))"}}> 
            <p  style = {{fontSize:"50px"}}>Sky Travel</p>
            <p>Select your favourite shows, plan your journey, travel the world</p>

            </div>
        </div>
        <div style = {{padding:"1em"}} />
        <table className = "GalleryTable">

            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GOT} title ="Game of Thrones" location = "Reykjavik"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl" location = "Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London" location = "London"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            </tr>
        </table>
        <table className = "GalleryTable">
            <tr className = "SpaceUnder">
            <td><GalleryObj image = {CN} title ="Chernobyl - Ukraine"/></td>
            <td><GalleryObj image = {GL} title ="Gangs of London - London"/></td>
            <td><GalleryObj image = {GOT} title ="Game of Thrones - Iceland"/></td>
            </tr>
        </table>
        </>
    )
}

export default Gallery