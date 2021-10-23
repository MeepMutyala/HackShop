import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> {/*this is a JSX comment, note the syntax*/}
      <div className="Home">  {/*this is our home page, this div contains everything in our home page*/}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>  

        <Route exact path="/Game">
          <Game />
        </Route>  
        
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>  
        
      </Switch>

      </div>
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
            <Link to="/game">This is a link to a game!</Link><br/>
            <Link to="/leaderboard">This is a link to a leaderboard!</Link>
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

function Game() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Leaderboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
