import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <HashRouter> 
        <div>
          <h1>Single Page App Routing</h1> 
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          <div className="content"> 
            <Route exact path="/" component={Home}></Route>
            <Route path="/stuff" component={Stuff}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
