
import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Signup from "./signup.js"
import Login from "./Login.js"
import Dashboard from "./Dashboard.js"
import Challenge from "./Challenge.js"
import Hangman from "./Hangman.js"



const Routing = () => {
  return(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="./signup" component={Signup} />
        <Route exact path="./Login" component={Login} />
        <Route exact path="./Dashboard" component={Dashboard} />
        <Route exact path="./Challenge" component={Challenge} />
        <Route exact path="./Hangman" component={Hangman} />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
