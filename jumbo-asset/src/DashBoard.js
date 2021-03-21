import React, { Component } from "react";
import { MapContainer } from "./components/maps/Maps";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        <MapContainer />
      </div>
    );
  }
}
