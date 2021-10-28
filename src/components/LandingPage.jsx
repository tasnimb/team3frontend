import React, { Component } from 'react'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import GOT from "./images/GOT.jpeg"
import CN from "./images/CN.jpeg"
import GL from "./images/GL.jpeg"
import "../App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LandingPage = () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let history = useHistory();

    const lengendStyle = {background:'white', color:'black'};
  
    return (
        <>
        <h1 style = {{textShadow:"0.5px 0.5px 0.5px black"}}> Sky Travel</h1>
        <p style = {{textShadow:"0.5px 0.5px 0.5px black", paddingLeft:"5%", paddingRight:"5%"}}> Welcome to Sky Travel! Begin your journey now and immerse yourselves in the worlds of your favourite shows</p>
        <button type="submit" className="btn btn-primary btn-block"  onClick={() => {history.push("/signin")} }>Get Started</button>
        <div style = {{paddingTop:"10px"}}>
        </div>
            <Carousel 
            showArrows={true} 
            autoPlay = {true} 
            infiniteLoop = {true} 
            dynamicHeight = {true}
            stopOnHover = {false}
            interval = {5000}
            dynamicHeight= {false}
            centerMode = {false}
            showThumbs = {false}
            showStatus = {false}

            >
                <div>
                    <img src={GOT}/>
                    <p className="legend" style = {lengendStyle}>Game of thrones - Reykjavic</p>
                </div>
                <div>
                    <img src={CN} /> 
                    <p className="legend" style = {lengendStyle}>Chernobyl - Pripryat</p>
                </div>
                <div>
                    <img src={GL} />
                    <p className="legend" style = {lengendStyle}>Gangs of London - London</p>
                </div>
            </Carousel>
        </>
    );
}

export default LandingPage
