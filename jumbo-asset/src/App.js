import React, { Component } from "react";
import MapContainer from "./components/Maps";
import SideBar from "./components/SideBar";

export default class App extends Component {
  render() {
    return (
      <>
        <MapContainer />
        <SideBar />
      </>
    );
  }
}
