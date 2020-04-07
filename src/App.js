import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import WorldwideContainer from './containers/WorldwideContainer';
import temp from './components/worldwideData/temp';
import IndianStateWise from './components/indianStateWise/indianStateWise';

function App() {
  return (
    <Router>
        <div className="routingContainer">
          <nav className="NavLink ">
          <ul className="header width">
            <li><NavLink to={'/covid19-tracker'} className="nav-link"> Worldwide </NavLink></li>
            <li><NavLink to={'/india-statewise'} className="nav-link">India-Statewise</NavLink></li>
            <li><NavLink to={'/coming-soon'} className="nav-link">Coming Soon</NavLink></li>
          </ul>
          </nav>
         <Switch>
         <Route path = "/" exact component = {WorldwideContainer}/>
          <Route path = "/covid19-tracker" component = {WorldwideContainer}/>
          <Route path = "/india-statewise" component = {IndianStateWise}/>
          <Route path = "/coming-soon" component = {temp}/>
         </Switch>
         <hr/>
      </div>
    </Router>
  );
}

export default App;
