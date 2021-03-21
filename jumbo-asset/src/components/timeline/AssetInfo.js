import React, { Component } from "react";
import { MapContainer } from "../maps/Maps";

export default class AssetInfo extends Component {
  render() {
    return (
      <div class="my-timeline">
        <div class="ui grid">
          <div class="two wide column">
            <h1>IN TIMELINE</h1>
          </div>
          <div class="two wide column"></div>
          <MapContainer />
        </div>
      </div>
    );
  }
}
