import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import Search from "./components/search/Search";
import SearchByID from "./components/search/SearchById";
import coordinates from "./data.js";
export default class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  onSearchSubmit(searchObj) {
    console.log(searchObj);
  }

  render() {
    return (
      <>
        <div className="my-sidebar">
          <SearchByID callApi={this.onSearchSubmit} />
          <Search />
        </div>
        <MapContainer data={coordinates} />
      </>
    );
  }
}
