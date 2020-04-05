import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import WorldwideContainer from './containers/WorldwideContainer';
import temp from './components/worldwideData/temp';

function App() {
  return (
    <Router>
        <div className="routingContainer">
          <nav className="NavLink ">
          <ul className="header width">
            <li><NavLink to={'/covid19-tracker'} className="nav-link"> Worldwide </NavLink></li>
            <li><NavLink to={'/a'} className="nav-link">Coming soon</NavLink></li>
          </ul>
          </nav>
         <Switch>
         <Route path = "/" exact component = {WorldwideContainer}/>
          <Route path = "/covid19-tracker" component = {WorldwideContainer}/>
          <Route path = "/a" component = {temp}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
