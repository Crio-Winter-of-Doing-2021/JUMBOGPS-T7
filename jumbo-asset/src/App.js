import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import TimeLine from "./pages/TimeLine";
import MapContainer from "./components/maps/MapContainer";
import { MarkerProvider } from "./ContextData";

export default function App() {
  return (
    <MarkerProvider>
      <NavBar />
    </MarkerProvider>
  );
}

class NavBar extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="ui massive top sticky inverted green menu my-nav">
            <a href="https://jumbotail.com/" target="_blank">
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
        <MapContainer />
      </>
    );
  }
}
