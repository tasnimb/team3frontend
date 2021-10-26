import React, { useMemo, useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import 'popper.js';
import axios from "axios";
import { useHistory } from "react-router-dom";

const LOCATIONURL = `http://localhost:4001/location/3`;

const Details = () => {
    let history = useHistory();

    const [location, setLocation] = React.useState(null);

    React.useEffect(() => {
        axios.get(LOCATIONURL).then((response) => {
            setLocation(response.data);
        });
    }, [])

    if (!location) return null;

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
        <div>

        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={() => {history.push("/epg")} }>Return to EPG</button>
        </div>

        <Table striped bordered hover variant="light">
        <thead>
            <tr>
                <th>Name of Show/Movie</th>
                <th>Location</th>
                <th>Weather</th>
                <th>Temperature</th>
                <th>Travel Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{location.movie}</td>
                <td>{location.location}</td>
                <td>{location.weather}</td>
                <td>{location.temperature}</td>
                <td><a href={"http://localhost:3000/details"}>Book your Holiday!</a></td>
            </tr>
            </tbody>
        </Table>
        </div>
      )
      
}

export default Details;
