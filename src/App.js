import logo from './logo.svg';
import './App.css';
import React from "react";

// import React, { useRef } from 'react'
// import { Form, Button, Card } from 'react-bootstrap'
import Signup from "./signup.js"
import Login from "./Login.js"
import Dashboard from "./Dashboard.js"
import Challenge from "./Challenge.js"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'; 

function App() {
  return (
    
    <Router> {/*this is a JSX comment, note the syntax*/}
    <AuthProvider>
      {/* this is our home page, this div contains everything in our home page */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>  

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>  
        
        <Route exact path="/signup">
          <Signup />
        </Route>  

        <Route exact path="/login">
          <Login />
        </Route>
        
        <Route exact path="/challenge">
          <Challenge />
        </Route>
        
      </Switch>


      </AuthProvider>
    </Router>
    
  );
}

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to <code>HackShop!</code>    <br/>
            <Link to="/">This is a link to the homepage!</Link><br/>
            <Link to="/dashboard">This is a link to a dashboard!</Link><br/>
            <Link to="/signup">This is a link to a create account!</Link><br/>
            <Link to="/login">This is a link to a login</Link><br/>
            <Link to="/challenge">This is a link to a fun shopping challenge!</Link>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
  );
}


export default App;
