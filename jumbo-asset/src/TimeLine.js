import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import AssetInfo from "./components/timeline/AssetInfo";

export default class DashBoard extends Component {
  render() {
    return (
      <>
        <MapContainer />
        <AssetInfo />
      </>
    );
  }
}
