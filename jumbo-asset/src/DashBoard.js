import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import Search from "./components/search/Search";
import SearchByID from "./components/search/SearchById";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  onSearchSubmit(searchObj) {
    console.log(searchObj);
  }

  render() {
    return (
      <>
        <div id="my-sidebar">
          <SearchByID callApi={this.onSearchSubmit} />
          <Search />
        </div>
        <MapContainer />
      </>
    );
  }
}
