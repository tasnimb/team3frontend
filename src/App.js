import './App.css';
import React from 'react';
//import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery'
import Details from './components/Details';
import Offers from './components/Offers'
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header'

//npm install react-router-dom
//npm install axios



function App() {


  return (
    <div style = {{fontFamily:"Sky"}}>
    <div>
      <Header />
    <div className="App" class = "App-header" >
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/offers" component={Offers} />
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
    </div>
  );
}

export default App;