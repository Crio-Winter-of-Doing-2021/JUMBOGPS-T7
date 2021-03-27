// import React, { Component } from "react";
// import { Marker } from "google-maps-react";
// import PropTypes from "prop-types";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Markers from "./Markers";
// export default class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.mapRef = React.createRef();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps);
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }

//   loadMap = () => {
//     console.log(this.mapRef);
//     console.log("IN LOADING");
//     console.log(this.props.google);
//     if (this.props && this.props.google) {
//       const maps = this.props.google.maps;
//       console.log("MAPS");
//       let zoom = 13;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign(
//         {},
//         {
//           center: center,
//           zoom: zoom,
//         }
//       );
//       this.mapRef = new maps.Map(this.mapRef.current, mapConfig);
//     }
//     console.log(this.mapRef);
//   };
//   render() {
//     return (
//       <div className="maps" ref={this.mapRef}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />;
//       </div>
//     );
//   }
// }

// Map.propTypes = {
//   google: PropTypes.object,
//   zoom: PropTypes.number,
//   initialCenter: PropTypes.object,
//   centerAroundCurrentLocation: PropTypes.bool,
//   onMove: PropTypes.func,
// };
// Map.defaultProps = {
//   zoom: 13,
//   initialCenter: {
//     lat: 37.774929,
//     lng: -122.419416,
//   },
//   centerAroundCurrentLocation: false,
// };
