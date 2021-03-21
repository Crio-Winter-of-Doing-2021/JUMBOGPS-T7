import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AssetInfo from "./components/timeline/AssetInfo";
import DashBoard from "./DashBoard";
// import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Assets</Link>
                </li>
                <li>
                  <Link to="/assetId">Timeline</Link>
                </li>
                <li>
                  <Link to="/asset">Assets</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/asset">
                {/* <Assets /> */}
                {Assets()}
              </Route>
              <Route path="/assetId">
                <Timeline />
              </Route>
              <Route path="/">
                <Assets />
              </Route>
            </Switch>
          </div>
        </Router>
        <MapContainer />
        <SideBar />
      </>
    );
  }
}

function Assets() {
  return (
    <>
      <DashBoard />
    </>
  );
}

function Timeline() {
  return (
    <>
      <AssetInfo />
      {/* <MapContainer /> */}
    </>
  );
}
