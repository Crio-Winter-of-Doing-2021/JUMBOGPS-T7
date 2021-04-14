import React, { Component } from "react";
import {
  Map,
  Polyline,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";
import MapContext from "../../MapContext";
import DisplayWindow from "./DisplayWindow";
export class MapContainer extends Component {
  static contextType = MapContext;

  constructor(props) {
    super(props);

    this.state = {
      pos: this.props.data,
      center: this.props.initialCenter,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const map = this.map;
    const { mapCenterX, mapCenterY } = this.context;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(mapCenterX, mapCenterY);
      map.Bound(center);
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ pos: nextProps.data });
  }
  recenterMap = () => {};
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      geoRoutes: [],
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  mapClicked = (mapProps, map, event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(this.state.geoRoutes);
    const tempArray = this.state.geoRoutes || [];
    const tmpObject = { lat: lat, lng: lng };
    tempArray.push(tmpObject);
  };
  getBounds = () => {
    console.log(this.props.google.LatLngBounds());
  };
  render() {
    const { mapCenterX, markers, mapCenterY, pos, infoWindow } = this.context;
    // console.log(mapCenterX, mapCenterY, markers, pos, infoWindow);
    // console.log(lineArray);
    const styles = { width: "75%", height: "95%", borderRadius: "1.2%" };
    return (
      <Map
        onClick={this.mapClicked}
        google={this.props.google}
        style={styles}
        zoom={6}
        initialCenter={{ lat: mapCenterX, lng: mapCenterY }}
      >
        <button>CLICK</button>
        {!infoWindow
          ? markers.map((pos) => {
              // console.log(pos);
              return <Marker position={pos} />;
            })
          : pos.data
          ? pos.data.map((pos) => {
              // console.log(pos);
              return (
                <Marker
                  key={pos.asset_id}
                  onClick={this.onMarkerClick}
                  data={pos}
                  position={{
                    lat: pos.location.latitude,
                    lng: pos.location.longitude,
                  }}
                />
              );
            })
          : null}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {this.state.selectedPlace.data ? (
            <DisplayWindow data={this.state.selectedPlace.data} />
          ) : (
            <div>N/A</div>
          )}
        </InfoWindow>

        {!infoWindow && this.state.geoRoutes
          ? this.state.geoRoutes.map((pos) => {
              return (
                <Marker
                  style={{ backgroundColor: "#222", cursor: "pointer" }}
                  position={pos}
                />
              );
            })
          : console.log("NOT PRINTING")}
        {this.state.geoRoutes ? (
          <Polyline
            path={this.state.geoRoutes}
            strokeColor="#222"
            strokeOpacity={0.8}
            strokeWeight={2}
          />
        ) : null}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
