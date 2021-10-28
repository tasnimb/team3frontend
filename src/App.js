import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'

import {WeatherButton} from './components/WeatherButton'
import {FlightsButton} from './components/FlightsButton'
import {GetFlight} from './components/GetFlight'
import {Map} from './components/Map'

import {LoginButton} from './components/LoginButton'
import {RegisterButton} from './components/RegisterButton'


class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
      this.setState({user: {}})
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }
  onChangeForm = (e) => {
    let user = this.state.user
    if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
        user.email = e.target.value;
    }
    this.setState({user})
}

  getWeather = () => {
      fetch("http://34.243.161.7:8090/Team3/api/getWeather", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({"latitude":"51.2763", "longitude":"30.2219"})
      }).then(response => response.json())
      .then(data => console.log(data));

  }

  getFlightDetails = () => {
        fetch("http://34.243.161.7:8090/Team3/getFlightDetails", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({"depCity": "LHR", "arrCity":"DXB", "depDate":"2021-11-01", "retDate":"2021-11-25"})
        })
        .then(response => response.json())
        .then(data => console.log(data));
  }

  getFlightPrice = () => {
    fetch("http://localhost:8081/api/getFlightPrice", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({
        "searchData" : {"data": {
          "type": "flight-offers-pricing",
          "flightOffers": [
              {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2021-11-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
              {
                "duration": "PT14H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "SYD",
                      "terminal": "1",
                      "at": "2021-11-01T13:10:00"
                    },
                    "arrival": {
                      "iataCode": "KUL",
                      "terminal": "M",
                      "at": "2021-11-01T18:45:00"
                    },
                    "carrierCode": "MH",
                    "number": "122",
                    "aircraft": {
                      "code": "333"
                    },
                    "operating": {
                      "carrierCode": "MH"
                    },
                    "duration": "PT8H35M",
                    "id": "1",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "KUL",
                      "terminal": "M",
                      "at": "2021-11-01T22:00:00"
                    },
                    "arrival": {
                      "iataCode": "BKK",
                      "at": "2021-11-01T23:10:00"
                    },
                    "carrierCode": "MH",
                    "number": "796",
                    "aircraft": {
                      "code": "738"
                    },
                    "operating": {
                      "carrierCode": "MH"
                    },
                    "duration": "PT2H10M",
                    "id": "2",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "EUR",
              "total": "451.50",
              "base": "385.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "451.50"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "MH"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "EUR",
                  "total": "451.50",
                  "base": "385.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "1",
                    "cabin": "ECONOMY",
                    "fareBasis": "QBXOWAU",
                    "class": "Q",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "QBXOWAU",
                    "brandedFare": "BASIC",
                    "class": "Q",
                    "includedCheckedBags": {
                      "weight": 20,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
      }
          ]
          }
        }
      })  
    })
    .then(response => response.json())
    .then(data => console.log(data));



  }

  getRegister = () => {
    fetch("http://localhost:8081/api/getRegister", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({"firstName": "John", "LastName":"Smith", "email":"J.Smith@gmail.com", "passWord":"passWord"})
    })
    .then(response => response.text())
    .then(data => console.log(data));
  }



  render() {

    return (
      <div className="App">
        <Header></Header>
        <WeatherButton
            getWeather={this.getWeather}
            >
        </WeatherButton>

        <FlightsButton
            getFlights={this.getFlightDetails}
        >
        </FlightsButton>

        <GetFlight
            getFlightPrice={this.getFlightPrice}
        >
        </GetFlight> 

        <Map /> 
          {/* pass in the departing city and arrival city for front end team, love from backend team */}

        <LoginButton getLogin = {this.getLogin}/>
        <RegisterButton getRegister = {this.getRegister}/>  


        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
