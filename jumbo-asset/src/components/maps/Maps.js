import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import coordinates from "../../data";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker1: {},
    activeMarker2: {},
    data: {},
  };

  onMarkerClick = (props, marker, e) =>
    // const markername = props.id
    this.setState({
      data: props.data,
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
    return (
      <div>
        <Map
          className="map"
          google={this.props.google}
          onMouseover={this.onMapClicked}
          zoom={5}
          initialCenter={{
            lat: 25,
            lng: 80,
          }}
        >
          {/* <Listing places={this.state.places} /> */}
          <Marker
            title="Location"
            id={1}
            position={{ lat: 24.6, lng: 76.32 }}
            draggable={true}
            // onDragend={this.moveMarker.bind(this)}
          >
            <InfoWindow visible={true}>
              <div>
                <p>
                  Click on the map or drag the marker to select location where
                  the incident occurred
                </p>
              </div>
            </InfoWindow>
          </Marker>
          {
            /* {coordinates.map((e) => { */
            // return (
            // <Marker
            //   key={e.id}
            //   data={e}
            //   onClick={this.onMarkerClick}
            //   position={{ lat: e.lat, lng: e.lng }}
            // />
            //     <Marker
            //       title={e.name}
            //       id={e.id}
            //       position={{ lat: e.lat, lng: e.lng }}
            //       draggable={true}
            //       // onDragend={this.moveMarker.bind(this)}
            //     >
            //       <InfoWindow visible={false}>
            //         <div>
            //           <p>
            //             Click on the map or drag the marker to select location
            //             where the incident occurred
            //           </p>
            //         </div>
            //       </InfoWindow>
            //     </Marker>
            //   );
            // })}
            // <InfoWindow
            //   marker={this.state.activeMarker}
            //   visible={this.state.showingInfoWindow}
            // >
            //   <div>
            //     <h1>{this.state.data.name}</h1>
            //   </div>
            // </InfoWindow>*/
          }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
