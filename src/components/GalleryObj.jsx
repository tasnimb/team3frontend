import React from 'react'
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
const LOCATIONURL = `http://localhost:8081/`;

const GalleryObj = (props) => {

    let history = useHistory();
    

    function getWeather(){
        fetch("http://localhost:8081/api/getWeather", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify({"latitude":props.latitude, "longitude":props.longitude})
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            window.scrollTo(0, 0)
            updateState(data)})
    }

    function updateState(data){
        history.push({
            pathname: '/details',
            title: props.title,
            location: props.location,
            airport: props.airport,
            state: {

                temperature0:Math.round((data.daily[0].temp.day - 273.15)*10)/10,
                temperature1:Math.round((data.daily[1].temp.day - 273.15)*10)/10,
                temperature2:Math.round((data.daily[2].temp.day - 273.15)*10)/10,
                temperature3:Math.round((data.daily[3].temp.day - 273.15)*10)/10,
                temperature4:Math.round((data.daily[4].temp.day - 273.15)*10)/10,
                temperature5:Math.round((data.daily[5].temp.day - 273.15)*10)/10,
                temperature6:Math.round((data.daily[6].temp.day - 273.15)*10)/10,

                weatherConditions0:data.daily[0].weather[0].main,
                weatherConditions1:data.daily[1].weather[0].main,
                weatherConditions2:data.daily[2].weather[0].main,
                weatherConditions3:data.daily[3].weather[0].main,
                weatherConditions4:data.daily[4].weather[0].main,
                weatherConditions5:data.daily[5].weather[0].main,
                weatherConditions6:data.daily[6].weather[0].main
            }
        })
    }


    return (
    <>

    <div class="imageWrapper" style ={{cursor:"pointer"}} onClick={() => {//history.push("/details")
getWeather()
} }>
        <img src={props.image} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
        <p className = "cornerLink">{props.title + " - " + props.location}</p>
    </div>
    </>
    )
}

export default GalleryObj
