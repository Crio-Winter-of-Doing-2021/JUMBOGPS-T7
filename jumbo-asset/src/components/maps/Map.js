import React, { Component } from "react";
import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import ReactDOM from "react-dom";
import MapContext from "../../MapContext";

class Map extends Component {
  static contextType = MapContext;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.context);
    this.loadmap();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  loadmap = () => {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;
      const node = ReactDOM.findDOMNode(this.mapRef.current);
      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom,
        }
      );
      this.mapRef = new maps.Map(node, mapConfig);
    }
  };
  render() {
    const mapStyle = {
      width: "100vw",
      height: "100vh",
    };
    return (
      <div ref={this.mapRef} style={mapStyle}>
        HELLO MAPS
      </div>
    );
  }
}
