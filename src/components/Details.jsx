import React, { useMemo, useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";

import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-date-picker'
import DatePicker from "react-datepicker";

import testim1 from "./images/GOTImages/gotim1.jpeg";
import testim2 from "./images/GOTImages/gotim2.jpeg";
import testim3 from "./images/GOTImages/gotim3.jpeg";


//const LOCATIONURL = `http://localhost:4001/location`;

const Details = ({temperature}) => {

    let history = useHistory();
    const state = useLocation().state;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
      

    

    //const { state } = this.props.location

   /* const [location, setLocation] = useState({});

    useEffect(() => {
        const getData = async () => {
            setLocation(await getLocation());
        }

        setTimeout(() => {
            getData();
        }, 5000)
    },[]);

    const getLocation = async () => {
        try {
            const res = await axios.get(LOCATIONURL);
            return res.data.length ?
        }
    }*/

/*    const [loadingData, setLoadingData] = useState(true);

    let history = useHistory();
    
      const columns = useMemo( () => [
          {
              Header: "Name of Show/Movie",
              accessor: "Movie1"
          },
          {
              Header: "Location",
              accessor: "London"
          },
          {
              Header: "Weather",
              accessor: "weather.main"
          },
          {
              Header: "Temperature",
              accessor: "main.temp"
          }
      ], []);

        const [data, setData] = useState([]);

    useEffect(() => {
        (async function getData() {
          await axios
          .get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=b9c093c7f807a5ad859daac19b72b70f")
          .then((response) => {
              console.log(response.data);
              setData(response.data);
          });
      }, }, []);
*/
//      Add this in return: <Table columns={columns} data={data} />
       
      //const a = "./images/GOTImages/gotim2.jpeg";

      return (
          /*
        <div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/epg")} }>Return to EPG</button>
        </div>

       //Placeholder below before adding API
        <Table striped bordered hover variant="light">
        <thead>
            <tr>
                <th>Name of Show/Movie</th>
                <th>Location</th>
                <th>Weather</th>
                <th>Temperature</th>
                <th>Flight Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Movie name</td>
                <td>London</td>
                <td>Rainy</td>
                <td>14 degrees</td>
                <td>Already here</td>
            </tr>
            </tbody>
        </Table>
        </div>
        */
        <>
        <h1  style = {{color:"white"}}>Visit location, home of show title</h1>
        <table >
            <tr>
                <td>
                    <img src={testim1} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
                <td>
                    <img src={testim2} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
                <td>
                    <img src={testim3} width = "100px" height = "200px" style ={{objectFit:"cover", display:"block", marginLeft:"auto", marginRight:"auto", borderRadius:"7px", border:"2px double white", width:'100%'}} />
                </td>
            </tr>
        </table>
        <div style = {{paddingBottom:"0.6em"}} />
        <Box style = {{backgroundColor:"white", color:"black", 
        height:"100%", 
        width:"auto", 
        borderRadius: "20px"}}>

        <div style = {{padding: "30px", textAlign:"center"}}>
            <h1 style ={{color:"black", textAlign:"center"}}>Plan your trip!</h1>

            <select id = "dropdown" >
                <option value="N/A">Please choose an airport</option>
                <option value="1">London Heathrow</option>
                <option value="2">London Gatwick</option>
                <option value="2">Manchester</option>
                <option value="2">London Stansted</option>
                <option value="2">London Luton</option>
                <option value="2">Edinburgh</option>
                <option value="2">Birmingham</option>
                <option value="2">Bristol</option>
                <option value="2">Glasgow</option>
                <option value="2">Belfast International</option>
                <option value="2">Newcastle</option>
                <option value="2">London City</option>
                <option value="2">Liverpool</option>
                <option value="2">East Midlands</option>
                <option value="2">Leeds Bradford</option>
                <option value="2">Aberdeen</option>
                <option value="2">Belfast City</option>
                <option value="2">London Southend</option>
                <option value="2">Southampton</option>
                <option value="20">Jersey</option>
                <option value="21">Cardiff</option>
                <option value="22">Doncaster Sheffield</option>
                <option value="23">Exeter</option>
                <option value="24">Glasgow Prestwick</option>
                <option value="25">Humberside</option>

             

            </select>

            <div>
                <label style = {{fontSize:"18px"}}>Please choose a departure date:</label>
                <DatePicker
                    dateFormat="d MMMM, yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
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
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    />


            </div>

            <h1>{state.temperature} &deg;C</h1>
            <h1>{state.weatherConditions}</h1>
            

        </div>
        <button type="submit" className="btn btn-primary btn-block"  onClick={() => {history.push("/offers")} }>Find your flights</button>
        </Box>

        </>
      )
      
}

export default Details;