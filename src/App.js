import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery'
import Details from './components/Details';
import Offers from './components/Offers'
import LandingPage from './components/LandingPage';
import Unavailable from './components/Unavailable'
import LoadingScreen from "./components/Unavailable"
import Policy from "./components/Policy"
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter as Router, withRouter,Route, Switch, Redirect, useLocation, useHistory } from "react-router-dom";
import Header from './components/Header'


//npm install react-router-dom
//npm install axios



function App() {

  let history = useHistory();

  /*

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  */

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

    <Router>



    <div style = {{fontFamily:"Sky"}}>
    <div>
      <Header/>
    <div className="App" class = "App-header" >

        <Switch>
  
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/unavailable" component={Unavailable} />
          <Route exact path="/policy" component={Policy} />
          <Route exact path="/welcome" component={LandingPage} />
          <Route exact path="/">
            <Redirect to="/welcome"/>
          </Route>
        </Switch>

    </div>
    <Footer/>
    </div>
    </div>


    </Router>

    
    
  );
  
}

export default App;