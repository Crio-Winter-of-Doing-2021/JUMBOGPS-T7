import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import TimeLine from "./pages/TimeLine";

export default function App() {
  return (
    <>
      <div className="app">
        <NavBar />
      </div>
    </>
  );
}
class NavBar extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="ui massive top sticky inverted green menu nav">
            <a rel="noreferrer" href="https://jumbotail.com/" target="_blank">
              <div className="header item">Jumbo GPS</div>
            </a>
            <Link className="item" to="/assets">
              DashBoard
            </Link>
            <Link className="item" to="/assets/1">
              TimeLine
            </Link>
          </div>
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/assets" exact component={DashBoard} />
            <Route path="/assets/id" exact children={TimeLine} />
            <Route path="/assets/:id" exact component={TimeLine} />
          </Switch>
        </Router>
      </>
    );
  }
}
