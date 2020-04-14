import React from 'react';
import './App.css';
import WorldwideContainer from './containers/WorldwideContainer';
import WhatsTrendingtrending from './components/WhatsTrending/corouselComponent';
import IndianStateWise from './components/indianStateWise/indianStateWise';
import temp from './components/temp/temp'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isChecked: false
      };
  }

  handleCheckboxClick () {
    this.setState({isChecked : !this.state.isChecked});
  }

  render() {

  return (
    <div className="app_container">
      <HashRouter>

      <nav role="navigation" id="nav_bar_hamburger" >
          <div id="menuToggle">
            <input type="checkbox" checked={this.state.isChecked} onClick={this.handleCheckboxClick.bind(this)}/>
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li onClick={this.handleCheckboxClick.bind(this)}><NavLink exact to="/">Worldwide</NavLink></li>
            <li onClick={this.handleCheckboxClick.bind(this)}><NavLink to="/indiastatewise">IndianStateWise</NavLink></li>
            <li onClick={this.handleCheckboxClick.bind(this)}><NavLink to="/trending">What's Trending</NavLink></li>
            <li onClick={this.handleCheckboxClick.bind(this)}><NavLink to="/comingsoon">ComingSoon</NavLink></li>
            </ul>
          </div>
        </nav>

          <div className="content">
            <Route exact path="/" component={WorldwideContainer} />
            <Route exact path="/covid19-tracker" component={WorldwideContainer} />
            <Route path="/indiastatewise" component={IndianStateWise} />
            <Route path="/trending" component={WhatsTrendingtrending} />
            <Route path="/comingsoon" component={temp} />
          </div>
      </HashRouter>
    </div>
  );
}
}

export default App;
