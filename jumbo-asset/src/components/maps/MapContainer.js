import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
function DisplayInfo({ data }) {
  console.log(data);
  return (
    <div className="ui inverted segment">
      <h5 className="ui header"> Asset ID : {data.asset_id}</h5>
      <h5> Asset Type : {data.asset_type}</h5>
      <h6> Last Updated : {data.location.updated}</h6>
      <a href={"/assets/" + data.asset_id}> More Info </a>
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
      center: this.props.initialCenter,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation != this.state.currentLocation) {
      {
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
          let center = new maps.LatLng(7, 72);
          map.panToBounds(center);
        }
      }
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
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  getDate = (date) => {
    const dateUTC = new Date(date);
    const dateIST = new Date(dateUTC.getTime());
    return dateIST.toDateString();
  };
  getBounds = () => {
    console.log(this.props.google.LatLngBounds());
  };
  render() {
    const styles = { width: "75%", height: "95%", borderRadius: "1.2%" };
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        style={styles}
        zoom={5}
        // bounds={() => {
        //   console.log(this.props.google.LatLngBounds());
        //   return new this.props.google.LatLngBounds();
        // }}
        initialCenter={this.props.initialCenter}
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
          {this.state.selectedPlace.data ? (
            <div className="ui black inverted message">
              <div className="header">
                Asset ID : {this.state.selectedPlace.data.asset_id}
              </div>
              <ul className="list">
                <li>Asset Type : {this.state.selectedPlace.data.asset_type}</li>
                <li>
                  Last Updated :
                  {this.getDate(this.state.selectedPlace.data.location.updated)}
                </li>
                <li>
                  <a href={"/assets/" + this.state.selectedPlace.data.asset_id}>
                    More Info
                  </a>
                </li>
              </ul>
              {/* <DisplayInfo data={this.state.selectedPlace.data} /> */}
            </div>
          ) : (
            <div>N/A</div>
          )}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
