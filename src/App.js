import logo from './logo.svg';
import './App.css';
import React from "react";
// import React, { useRef } from 'react'
import {Navbar, Nav, Container, Row, Col, Button} from "react-bootstrap";

import Signup from "./signup.js"
import Login from "./Login.js"
import Dashboard from "./Dashboard.js"
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'; 

const StyledLink = styled(Link)`
  color: Gray;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;


function App() {
  return (

    <Router> {/*this is a JSX comment, note the syntax*/}
      <Navbar className ="navBarStyle" variant="dark">
    <Navbar.Brand href="#home">HackShop</Navbar.Brand>
    <Nav className="me-auto">
    <StyledLink to="/" style={{padding:"1vh 0 0 0"}}>Home</StyledLink>
      <StyledLink to="/login"style={{padding:"1vh 0 0 0"}}>Log in</StyledLink>
      <StyledLink to="/signup" style={{float: "right"}}><Button variant="danger">Sign up</Button></StyledLink>
    </Nav>
  </Navbar>
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
        
        
      </Switch>


      </AuthProvider>

    </Router>

  );
}

function Home() {
  return (
      <div className="App-header">
         <Row>
         <Col xs={2}>
         </Col>
        <Col xs={4}>
        <img src={logo} className="App-logo" alt="logo" />
        </Col>
         <Col xs={6}>
         <br/>
         <br/>
         <br />
         <div style={{float: "right", textAlign:"right", margin:"0 8vh 0 0"}}>
         <h1>
            Welcome to <code><a href="https://github.com/MeepMutyala/HackShop">HackShop!</a></code><br/>

            <Link to="/">This is a link to the homepage!</Link><br/>
            <Link to="/dashboard">This is a link to a dashboard!</Link><br/>
            <Link to="/signup">This is a link to a create account!</Link><br/>
            <Link to="/login">This is a link to a login</Link>
          </h1>
          </div>
          </Col>
         </Row>

        </div>
  );
}




export default App;
