import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

function DisplayInfo({ data }) {
  console.log(data);
  return (
    <div className="ui segment">
      <h5 className="ui header"> Asset ID : {data.data.asset_id}</h5>
      <h5> Asset Type : {data.data.asset_type}</h5>
      <h6> Last Updated : {data.data.location.updated}</h6>
      <a href={"/assets/" + data.data.asset_id}> More Info </a>
    </div>
  );
  // }
}
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      pos: this.props.data,
      center: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ pos: nextProps.data });
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
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
    const styles = { width: "75%", height: "95%", borderRadius: "1.2%" };
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        style={styles}
        zoom={5}
        initialCenter={{
          lat: 62.39,
          lng: 72.52,
        }}
      >
        {this.props.infoWindow
          ? this.state.pos.data.map((pos) => {
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
          : this.props.children}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <DisplayInfo data={this.state.selectedPlace} />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
