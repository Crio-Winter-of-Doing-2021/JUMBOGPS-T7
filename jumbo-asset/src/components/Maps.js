import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import faker from "faker";
import MarkerInfo from "./MarkerInfo";

function MapMarker(props) {
  return (
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
      name={"First Place location"}
    />
  );
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker1: {},
    activeMarker2: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    // const markername = props.id
    this.setState({
      selectedPlace: props,
      activeMarker1: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    const cordinates = [
      { lat: 24.6, lng: 76.32, name: "First Place" },
      { lat: 25.6, lng: 75.32, name: "Second Place" },
      { lat: 26.6, lng: 74.32, name: "Third Place" },
      { lat: 27.6, lng: 73.32, name: "Fourth Place" },
      { lat: 28.6, lng: 72.32, name: "Fifth Place" },
    ];

    return (
      <div id="map">
        <Map
          google={this.props.google}
          onMouseover={this.onMapClicked}
          zoom={5}
          initialCenter={{
            lat: 25,
            lng: 80,
          }}
        >
          {cordinates.map((e) => {
            return <Marker position={{ lat: e.lat, lng: e.lng }} />;
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
