import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import WorldwideContainer from './containers/WorldwideContainer';
import temp from './components/worldwideData/temp';
import IndianStateWise from './components/indianStateWise/indianStateWise';

function App() {
  return (
    <div className="app_container">
      <Router>

        <nav role="navigation" id="nav_bar_hamburger">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/covid19-tracker"><li>Worldwide</li></a>
              <a href="/india-statewise"><li>India-Statewise</li></a>
              <a href="/coming-soon"><li>Coming Soon</li></a>
            </ul>
          </div>
        </nav>



        <div className="routingContainer">
          {/* <nav className="NavLink ">
            <ul className="header width">
              <li><NavLink to={'/covid19-tracker'} className="nav-link"> Worldwide </NavLink></li>
              <li><NavLink to={'/india-statewise'} className="nav-link">India-Statewise</NavLink></li>
              <li><NavLink to={'/coming-soon'} className="nav-link">Coming Soon</NavLink></li>
            </ul>
          </nav> */}
          <Switch>
            {/* <Route path="/" exact component={WorldwideContainer} /> */}
            <Route path="/covid19-tracker" component={WorldwideContainer} />
            <Route path="/india-statewise" component={IndianStateWise} />
            <Route path="/coming-soon" component={temp} />
          </Switch>
          <hr />
        </div>
      </Router>
    </div>
  );
}

export default App;
