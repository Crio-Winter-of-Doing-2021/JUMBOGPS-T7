import React, { Component } from "react";
import MapContainer from "../components/maps/MapContainer";
import axios from "axios";
import AssetInfo from "../components/timeline/AssetInfo";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets/" + id, config)
      .then((response) => {
        this.setState({ data: response });
        console.log(response);
      });
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <div className="my-sidebar">
              <AssetInfo data={this.state.data} />
            </div>
            <div className="map">
              <MapContainer data={this.state.data} infoWindow={false}>
                {console.log(this.state.data.data.location)}
                {this.state.data.data.location.map((pos) => {
                  return (
                    <Marker
                      onClick={this.onMarkerClick}
                      data={pos}
                      position={{
                        lat: pos.latitude,
                        lng: pos.longitude,
                      }}
                    />
                  );
                })}
              </MapContainer>
            </div>
          </>
        ) : (
          "LODING MAP"
        )}
      </>
    );
  }
}
