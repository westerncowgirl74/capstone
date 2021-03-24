// Import React
import React, { Component } from 'react';

// Import Router for routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Bootstrap Classes
import "bootstrap/dist/css/bootstrap.min.css";

// Import the created components js files
import RegisterGameplay from "./components/register-gameplay.component";
import LogInGameplay from "./components/login-gameplay.component";
import CreateGameplay from "./components/create-gameplay.component";
import EditGameplay from "./components/edit-gameplay.component";
import GameplayList from "./components/gameplay-list.component";

// Import Logo
import logo from "./tech_tablet.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
    {/* Start Navagation bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="_blank">
              <img src={logo} width="50" height="50" alt="My Games" />
              </a>
              <Link to="/" className="navbar-brand">My Games App</Link>
            {/* Links to access components pages */}
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item"><Link to="/gameplay" className="nav-link">Welcome to My games!</Link></li>
                <li className="navbar-item"><Link to="/register" className="nav-link">Register</Link></li>
                <li className="navbar-item"><Link to="/login" className="nav-link">Log In</Link></li>
                <li className="navbar-item"><Link to="/create" className="nav-link">Create List</Link></li>
                <li className="navbar-item"><Link to="/edit" className="nav-link">Currently Playing</Link></li>
              </ul>
            </div>
          </nav>
{/* End Navagation bar */}
          {/* CREATE ROUTES FOR COMPONENETS */}
         
           {/*  Route to connect to component to Register App*/}
           <Route path="/register" exact component={RegisterGameplay} />

            {/*  Route to connect to component to log into App*/}
            <Route path="/login" component={LogInGameplay} />

          {/* Route to connect to component that lists all Gameplay items */}
          <Route path="/gameplay" component={GameplayList} />

          {/*  Route to connect to component that excepts parameters able to edit*/}
          <Route path="/edit/:id" component={EditGameplay} /> 
          {/* /:id means link not accessable*/}

          {/*  Route to connect to component that is for creating a gameplay item */}
          <Route path="/create" component={CreateGameplay} />

        </div>
      </Router>
    );
  }
}

export default App;