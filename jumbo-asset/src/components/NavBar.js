import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../DashBoard";

export default function NavBar() {
  return (
    <Router>
      <div class="ui massive top sticky inverted green menu my-nav">
        <a href="https://jumbotail.com/" target="_blank">
          <div class="header item">Jumbo GPS</div>
        </a>
        <a class="item">DashBoard</a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">DashBoard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <DashBoard />
          </Route>
          <Route path="/assets">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
