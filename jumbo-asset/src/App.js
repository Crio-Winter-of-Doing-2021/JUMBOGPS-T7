import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AssetInfo from "./components/timeline/AssetInfo";
import DashBoard from "./DashBoard";
import TimeLine from "./TimeLine";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <TimeLine />
        {/* <DashBoard /> */}
      </>
    );
  }
}
