import React, { Component } from "react";
import { MapContainer } from "../maps/MapContainer";
import { Marker } from "google-maps-react";
export default class AssetInfo extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props.data.data);
    this.state = {
      assetInfo: props.data.data,
    };
  }
  getDateTime = () => {
    console.log(this.state.assetInfo.location[0].updated);
  };
  render() {
    return (
      <>
        <div className="ui teal inverted segment">
          <div className="ui red inverted">
            <h4>Asset ID : {this.state.assetInfo.asset_id}</h4>
            <h4>Asset Type : {this.state.assetInfo.asset_type}</h4>
            <h4>Last Updated : {this.getDateTime}</h4>

            <br />
          </div>
        </div>
        <MapContainer infoWindow={false}>
          {this.state.assetInfo.location.map((pos) => {
            return (
              <Marker
                position={{
                  lat: pos.latitude,
                  lng: pos.longitude,
                }}
              />
            );
          })}
        </MapContainer>
      </>
    );
  }
}
