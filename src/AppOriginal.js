import './App.css';
import React from 'react';
//import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EPG from './components/EPG';
import Details from './components/Details';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header'

//npm install react-router-dom
//npm install axios



function App() {

  return (
    <div>
      <Header />
    <div className="App" class = "App-header" >
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/epg" component={EPG} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/">
            <Redirect to="/landingpage"/>
          </Route>
        </Switch>
      </Router>

    </div>
    <footer style ={{backgroundColor:"white"}}>

      <p style = {{color:"grey", textAlign:"center", textDecoration:"underline"}}> Privacy policy </p>
    </footer>
    </div>
  );
}

export default App;
