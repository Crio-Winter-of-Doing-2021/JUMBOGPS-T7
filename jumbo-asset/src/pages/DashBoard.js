import React, { Component } from "react";
import Search from "../components/search/Search";
import SearchByID from "../components/search/SearchById";
import axios from "axios";
import MapContainer from "../components/maps/MapContainer";
// import getLatLngCenter from "../maps/CenterMap";

// function rad2degr(rad) {
//   return (rad * 180) / Math.PI;
// }
// function degr2rad(degr) {
//   return (degr * Math.PI) / 180;
// }

// export default function getLatLngCenter({ latLngInDegr }) {
//   var LATIDX = 0;
//   var LNGIDX = 1;
//   var sumX = 0;
//   var sumY = 0;
//   var sumZ = 0;

//   for (var i = 0; i < latLngInDegr.length; i++) {
//     var lat = degr2rad(latLngInDegr[i][LATIDX]);
//     var lng = degr2rad(latLngInDegr[i][LNGIDX]);
//     // sum of cartesian coordinates
//     sumX += Math.cos(lat) * Math.cos(lng);
//     sumY += Math.cos(lat) * Math.sin(lng);
//     sumZ += Math.sin(lat);
//   }

//   var avgX = sumX / latLngInDegr.length;
//   var avgY = sumY / latLngInDegr.length;
//   var avgZ = sumZ / latLngInDegr.length;

//   // convert average x, y, z coordinate to latitude and longtitude
//   var lng = Math.atan2(avgY, avgX);
//   var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
//   var lat = Math.atan2(avgZ, hyp);

//   return [rad2degr(lat), rad2degr(lng)];
// }

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_API_URL,
      params: {
        max: 100,
        start: new Date(),
        end: new Date(),
        type: new Set(),
      },
      loc: null,
      types: "",
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    console.log("UPDATED");
    console.log(this.state.loc);
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  renderMap = (response) => {
    console.log("RESPONSE", response);
    return (
      <div className="map">
        <MapContainer data={response} infoWindow={true} />
      </div>
    );
  };
  fetchData = (searchParams) => {
    console.log(searchParams);
    const config = {
      params: searchParams,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets", config)
      .then((response) => {
        // console.log(response.data);
        const mySet1 = new Set();
        mySet1.add("ALL");
        response.data.map((asset) => {
          mySet1.add(asset.asset_type);
        });
        console.log("ASSETS", mySet1);
        this.setState({ loc: response });
        this.setState({ types: mySet1 });
        // this.renderMap(response);
      })
      .catch((error) => console.log("OOPS ERROR", error));
    // console.log(this.state.loc);
  };
  onIdSubmit = (searchObj) => {
    console.log(searchObj);
    this.props.history.push("/assets/" + searchObj);
  };
  onFilterSearch = (searchParams) => {
    // console.log(searchParams);
    this.fetchData(searchParams);
  };
  render() {
    return (
      <>
        <div className="my-sidebar">
          <SearchByID callIdSearch={this.onIdSubmit} />
          <Search
            data={this.state.params}
            callFilterSearch={this.onFilterSearch}
            types={this.state.types}
          />
        </div>
        {this.state.loc ? (
          <div className="map">
            <MapContainer
              // initialCenter={getLatLngCenter}
              data={this.state.loc}
              infoWindow={true}
            />
          </div>
        ) : (
          "LOADING"
        )}
      </>
    );
  }
}
