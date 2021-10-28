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
            updateState(data)}).catch(()=> { 
                history.push('/error')
              });
    }

    function updateState(data){
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
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

    <div className="imageWrapper" style ={{cursor:"pointer"}} onClick={() =>  {   /*    history.push({
            pathname: '/details',
            title: props.title,
            location: props.location,
            airport: props.airport,
            state: {

                temperature0:5,
                temperature1:5,
                temperature2:5,
                temperature3:5,
                temperature4:5,
                temperature5:5,
                temperature6:5,

                weatherConditions0:"Clear",
                weatherConditions1:"Clear",
                weatherConditions2:"Clear",
                weatherConditions3:"Clear",
                weatherConditions4:"Clear",
                weatherConditions5:"Clear",
                weatherConditions6:"Clear"
     } })
     */
getWeather()
}}>
        <img src={props.image} width = "100px" height = "200px" style ={{boxShadow:"1px 1px 5px black", objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
        <p className = "cornerLink">{props.title + " - " + props.location}</p>
    </div>
    </>
    )
}

export default GalleryObj
