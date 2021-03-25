import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import AssetInfo from "./components/timeline/AssetInfo";

export default class TimeLine extends Component {
  render() {
    return (
      <>
        <div class="my-sidebar">
          <AssetInfo />
        </div>
        <MapContainer />
      </>
    );
  }
}
