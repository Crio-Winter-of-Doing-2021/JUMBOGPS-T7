import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "./DashBoard";
import TimeLine from "./TimeLine";
import MapContainer from "./components/maps/Maps";
import Maps from "./Maps";
// import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <nav className="ui massive top sticky inverted green menu my-nav">
            <a href="https://jumbotail.com/" target="_blank">
              <div className="header item">Jumbo GPS</div>
            </a>
            <Link className="item" to="/assets">
              DashBoard
            </Link>
            <Link className="item" to="/assets/id">
              TimeLine
            </Link>
          </nav>

          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/assets" exact component={DashBoard} />
            <Route path="/assets/id" exact children={Timeline} />
            <Route path="/assets/:id" exact component={TimeLine} />
          </Switch>
        </Router>
        <MapContainer />
      </>
    );
  }
}

const Timeline = () => {
  return <TimeLine />;
};
