import React from 'react'
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
const LOCATIONURL = `http://localhost:8081/`;

const GalleryObj = (props) => {

    let history = useHistory();
    

    /*
    function getWeather(){
        fetch("http://localhost:8081/api/getWeather", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify({"city":props.location})
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            updateState(data)})
    }

    function updateState(data){
        history.push({
            pathname: '/details',
            state: {
                temperature:Math.round((data.main.temp - 273.15)*10)/10,
                weatherConditions:data.weather[0].main
            }
        })
    }
    */

    return (
    <>

    <div class="imageWrapper" onClick={() => {history.push("/details")
//getWeather()
} }>
        <img src={props.image} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
        <p className = "cornerLink">{props.title}</p>
    </div>
    </>
    )
}

export default GalleryObj
