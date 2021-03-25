import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "./DashBoard";
import TimeLine from "./TimeLine";

// import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        <nav class="ui massive top sticky inverted green menu my-nav">
          <a href="https://jumbotail.com/" target="_blank">
            <div class="header item">Jumbo GPS</div>
          </a>
        </nav>
        <Router>
          <Link class="item" to="/assets">
            DashBoard
          </Link>
          <Link class="item" to="/assets/id">
            TimeLine
          </Link>
          <Switch>
            <Route path="/assets">
              <DashBoard />
            </Route>
            <Route path="/assets/id">
              <TimeLine />
            </Route>

            <Route path="/">
              <DashBoard />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
