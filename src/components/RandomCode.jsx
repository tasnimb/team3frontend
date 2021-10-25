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
  
      return (
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
