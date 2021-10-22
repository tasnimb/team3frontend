import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'

import {WeatherSquare} from './components/WeatherSquare'

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



  getWeather = () => {
      fetch("http://localhost:8081/api/getWeather", {
        method: "POST",
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({"city":"Paris"})
      }).then(response => response.json())
     .then(data => console.log(data));

  }

  getFlightDetails = () => {
        fetch("http://localhost:8081/api/getFlightDetails", {
        method: "POST",
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({"outBoundCity": "LHR", "inBoundCity":"DXB"})
        }).then(response => response.json())
        .then(data => console.log(data));
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

  render() {

    return (
      <div className="App">
        <Header></Header>
        <WeatherSquare//get the web weather data here by calling
            getWeather={this.getWeather}
            >
        </WeatherSquare>

        <WeatherSquare//get the web weather data here by calling
            getWeather={this.getFlightDetails}
            >
        </WeatherSquare>

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
