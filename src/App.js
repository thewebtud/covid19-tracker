import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import WorldwideContainer from './containers/WorldwideContainer';
import temp from './components/worldwideData/temp';
import IndianStateWise from './components/indianStateWise/indianStateWise';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="app_container">
      <HashRouter>

      <nav role="navigation" id="nav_bar_hamburger">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li><NavLink exact to="/">Worldwide</NavLink></li>
            <li><NavLink to="/indiastatewise">IndianStateWise</NavLink></li>
            <li><NavLink to="/comingsoon">ComingSoon</NavLink></li>
            </ul>
          </div>
        </nav>

          <div className="content">
            <Route exact path="/" component={WorldwideContainer} />
            <Route exact path="/covid19-tracker" component={WorldwideContainer} />
            <Route path="/indiastatewise" component={IndianStateWise} />
            <Route path="/comingsoon" component={temp} />
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
