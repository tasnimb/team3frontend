import React, { useMemo, useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";


import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-date-picker'
import DatePicker from "react-datepicker";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import gotim1 from "./images/GOTImages/gotim1.jpeg";
import gotim2 from "./images/GOTImages/gotim2.jpeg";
import gotim3 from "./images/GOTImages/gotim3.jpeg";

import cnim1 from "./images/CNImages/cnim1.jpg"
import cnim2 from "./images/CNImages/cnim2.jpg"
import cnim3 from "./images/CNImages/cnim3.jpg"

import golim1 from "./images/GOLImages/golim1.jpg"
import golim2 from "./images/GOLImages/golim2.jpg"
import golim3 from "./images/GOLImages/golim3.jpg"

import moeim1 from "./images/MOEImages/moeim1.jpg"
import moeim2 from "./images/MOEImages/moeim2.jpg"
import moeim3 from "./images/MOEImages/moeim3.jpg"

import gaim1 from "./images/GAImages/gaim1.jpg"
import gaim2 from "./images/GAImages/gaim2.jpg"
import gaim3 from "./images/GAImages/gaim3.jpg"

import bpim1 from "./images/BPImages/bpim1.jpg"
import bpim2 from "./images/BPImages/bpim2.jpg"
import bpim3 from "./images/BPImages/bpim3.jpg"

import sgim1 from "./images/SGImages/sgim1.jpg"
import sgim2 from "./images/SGImages/sgim2.jpg"
import sgim3 from "./images/SGImages/sgim3.jpg"

import Clouds from "./images/weather/clouds.png"
import Clear from "./images/weather/clear.png"
import Fog from "./images/weather/fog.png"
import Sand from "./images/weather/sand.png"
import Tornado from "./images/weather/tornado.png"
import Snow from "./images/weather/snow.png"
import Rain from "./images/weather/rain.png"
import Drizzle from "./images/weather/rain.png"
import Thunderstorm from "./images/weather/thunderstorm.png"

//const LOCATIONURL = `http://localhost:4001/location`;

const Details = () => {

    let history = useHistory();
    const state = useLocation().state;
    const title = useLocation().title;
    const location = useLocation().location;

    /* Reroute back button use */
    if (title == null) {
        history.push('/gallery')
    }

    var im1;
    var im2;
    var im3;

    if (title == "Game of Thrones") {
        im1 = gotim1
        im2 = gotim2
        im3 = gotim3
    } else if (title == "Chernobyl") {
        im1 = cnim1
        im2 = cnim2
        im3 = cnim3
    } else if (title == "Gangs of London") {
        im1 = golim1
        im2 = golim2
        im3 = golim3
    } else if (title == "Mare of Easttown") {
        im1 = moeim1
        im2 = moeim2
        im3 = moeim3
    } else if (title == "Grey's Anatomy") {
        im1 = gaim1
        im2 = gaim2
        im3 = gaim3
    }
    else if (title == "Bulletproof") {
        im1 = bpim1
        im2 = bpim2
        im3 = bpim3
    }
    else {
        im1 = sgim1
        im2 = sgim2
        im3 = sgim3
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    function selectConditions(weatherConditions) {
        if (weatherConditions == "Clouds"){
            return Clouds;
        }
        if (weatherConditions == "Clear"){
            return Clear;
        }
        if (weatherConditions == "Mist"){
            return Fog;
        }
        if (weatherConditions == "Fog"){
            return Fog;
        }
        if (weatherConditions == "Dust"){
            return Fog;
        }
        if (weatherConditions == "Smoke"){
            return Fog;
        }
        if (weatherConditions == "Sand"){
            return Sand;
        }
        if (weatherConditions == "Tornado"){
            return Tornado;
        }
        if (weatherConditions == "Snow"){
            return Snow;
        }
        if (weatherConditions == "Rain"){
            return Rain;
        }
        if (weatherConditions == "Drizzle"){
            return Rain;
        }
        if (weatherConditions == "Thunderstorm"){
            return Thunderstorm;
        }
    }
      
    var arrCity = useLocation().airport;
    const [depCity, setDepCity] = useState();
    const [depDate, setDepDate] = useState();
    const [retDate, setRetDate] = useState();
    
var dataLength;

    async function getFlightDetails() {
        console.log(depCity)
        console.log(arrCity)
        console.log(depDate)
        console.log(retDate)

        /* hard coded 

        arrCity = "DXB"
        setDepCity("LHR")
        setDepDate("2021-11-01")
        setRetDate("2021-11-25")

         */
        history.push("/loading")
        await fetch("http://localhost:8081/api/getFlightDetails", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({"depCity": depCity, "arrCity":arrCity, "depDate":depDate, "retDate":retDate})
        //body: JSON.stringify({"depCity": "LHR", "arrCity":"DXB", "depDate":"2021-11-01", "retDate":"2021-11-25"})
        })
        .then(response => response.json())
        .then(data => {



            dataLength = data.data.length
            updateState(data)
            }).catch(()=> { 
                console.log("caught api error")
                if (dataLength == 0) {
                    history.push('/unavailable')
                } else {
                history.push('/error')
                }
                //window.location.reload();
              });
    }

    function updateState(data){
        const count = data.data.length;
        const prices = []
        const departTime = []
        const returnTime = []
        const departFrom = []
        const returnFrom = []
        for (let i = 0; i < count; i++) {
            departTime[i] = data.data[i].itineraries[0].segments[0].departure.at
            returnTime[i] = data.data[i].itineraries[1].segments[0].departure.at
            departFrom[i] = depCity
            returnFrom[i] = arrCity
            prices[i] = data.data[i].price.total
        }

        console.log("logging history")
        history.push({

            
            pathname:'/offers',

            flightInfo: {
            prices:prices,
            departTime:departTime,
            returnTime:returnTime,
            departFrom:departFrom,
            returnFrom:returnFrom,
            duration:data.data[0].itineraries[0].duration
            }
        })
    
}


        function handleSelectChange(event){ 
            setDepCity(event.target.value);}

        function handleDate1Change(date){
            setDepDate((date.getYear() + 1900) + "-" + getDoubleDigits((date.getMonth() + 1)) + "-" + getDoubleDigits(date.getDate()));
        }
        
        function handleDate2Change(date){
            setRetDate((date.getYear() + 1900) + "-" + getDoubleDigits((date.getMonth() + 1)) + "-" + getDoubleDigits(date.getDate()));
        }

        function getDoubleDigits(number) {
            if (number < 10) {
 
                return "0" + number;
            }

            else {
                return number;
            }
        }
        

        var day = new Date()
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[7] = "Sunday";
        weekday[8] = "Monday";
        weekday[9] = "Tuesday";
        weekday[10] = "Wednesday";
        weekday[11] = "Thursday";
        weekday[12] = "Friday";
        weekday[13] = "Saturday";


        
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
        <br/>
        <h1 style = {{textShadow:"0.5px 0.5px 0.5px black", color:"white"}}>Visit {location}, the home of {title}</h1>
        <table >
            <tr>
                <td>
                    <img src={im1} width = "100px" height = "200px" style ={{boxShadow:"1px 1px 5px black", objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
                <td>
                    <img src={im2} width = "100px" height = "200px" style ={{boxShadow:"1px 1px 5px black", objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
                <td>
                    <img src={im3} width = "100px" height = "200px" style ={{boxShadow:"1px 1px 5px black", objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
            </tr>
        </table>
        
        <div style = {{paddingBottom:"0.6em"}} />
        <Box className= "BoxObj" style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"50%", 
        borderRadius: "20px",
        }} >
            

        <div style = {{padding: "30px", textAlign:"center"}}>
            
            <h1 style ={{color:"black", textAlign:"center"}}>Plan your trip!</h1>

            <select value = {depCity} onChange ={handleSelectChange} id = "dropdown" >
                <option value="N/A">Please choose an airport</option>
                <option value="LHR">London Heathrow</option>
                <option value="LGW">London Gatwick</option>
                <option value="MAN">Manchester</option>
                <option value="STN">London Stansted</option>
                <option value="LTN">London Luton</option>
                <option value="EDI">Edinburgh</option>
                <option value="BHX">Birmingham</option>
                <option value="BRS">Bristol</option>
                <option value="GLA">Glasgow</option>
                <option value="BFS">Belfast International</option>
                <option value="NCL">Newcastle</option>
                <option value="LCY">London City</option>
                <option value="LPL">Liverpool</option>
                <option value="EMA">East Midlands</option>
                <option value="LBA">Leeds Bradford</option>
                <option value="ABZ">Aberdeen</option>
                <option value="BHD">Belfast City</option>
                <option value="SEN">London Southend</option>
                <option value="SOU">Southampton</option>
                <option value="JER">Jersey</option>
                <option value="CWL">Cardiff</option>
                <option value="DSA">Doncaster Sheffield</option>
                <option value="EXT">Exeter</option>
                <option value="PIK">Glasgow Prestwick</option>
                <option value="HUY">Humberside</option>

             

            </select>


            <div>
                <label style = {{fontSize:"18px"}}>Please choose a departure date:</label>
                <DatePicker
                    dateFormat="d MMMM, yyyy"
                    selected={startDate}
                    onChange={(date) => {setStartDate(date)
                        handleDate1Change(date)
                    //console.log(date)
                    }
                }
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}

                    />
            </div>
            <div>
                <label style = {{fontSize:"18px"}}>Please choose a return date:</label>
                <DatePicker
                    dateFormat="d MMMM, yyyy"
                    selected={endDate}
                    onChange={(date) => {setEndDate(date);
                        handleDate2Change(date);
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    />

            
            </div>
            


                </div>
        <div style ={{marginLeft:"auto", marginRight:"auto", width:"25%"}}>
        
        
        <Carousel 
            showArrows={false} 
            autoPlay = {true} 
            infiniteLoop = {true} 
            stopOnHover = {false}
            interval = {5000}
            dynamicHeight= {false}
            centerMode = {false}
            showThumbs = {false}
            showStatus = {false}
            showIndicators = {false}



            >
                <div>
                    <p>{weekday[day.getDay()]}:</p>
                    <img src= {selectConditions(state.weatherConditions0)}/>
                    <h1>{state.temperature0} &deg;C</h1>
                    
                </div>
                <div>
                <p>{weekday[day.getDay()+1]}:</p>
                    <img src= {selectConditions(state.weatherConditions1)}/>
                    <h1>{state.temperature1} &deg;C</h1>
                </div>
                <div>
                <p>{weekday[day.getDay()+2]}:</p>
                    <img src= {selectConditions(state.weatherConditions2)}/>
                    <h1>{state.temperature2} &deg;C</h1>
                </div>
                <div>
                <p>{weekday[day.getDay()+3]}:</p>
                    <img src= {selectConditions(state.weatherConditions3)}/>
                    <h1>{state.temperature3} &deg;C</h1>
                </div>
                <div>
                <p>{weekday[day.getDay()+4]}:</p>
                    <img src= {selectConditions(state.weatherConditions4)}/>
                    <h1>{state.temperature4} &deg;C</h1>
                </div>
                <div>
                <p>{weekday[day.getDay()+5]}:</p>
                    <img src= {selectConditions(state.weatherConditions5)}/>
                    <h1>{state.temperature5} &deg;C</h1>
                </div>
                <div>
                <p>{weekday[day.getDay()+6]}:</p>
                    <img src= {selectConditions(state.weatherConditions6)}/>
                    <h1>{state.temperature6} &deg;C</h1>
                </div>

            </Carousel>
            </div>
                
        <button type="submit" className="btn btn-primary btn-block"  onClick={() => {
            
            getFlightDetails()
    ;
    } }>Find your flights</button>
        <br/>
        <br/>

        </Box>
        <br/>
        </>
      )
      
}

export default Details;