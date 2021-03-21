import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AssetInfo from "./timeline/AssetInfo";
import DashBoard from "../DashBoard";

export default function NavBar() {
  return (
    <>
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
      <div class="ui secondary pointing menu">
        <a class="active item">Home</a>
        <a class="item">Messages</a>
        <a class="item">Friends</a>
        <div class="right menu">
          <a class="ui item">Logout</a>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
    </>
  );
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
