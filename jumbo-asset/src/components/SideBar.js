import React, { Component } from "react";
import Search from "./search/Search";
import SearchByID from "./search/SearchById";
export default class SideBar extends Component {
  onSearchSubmit(searchObj) {
    console.log(searchObj);
  }
  render() {
    return (
      <div id="my-sidebar">
        <SearchByID callApi={this.onSearchSubmit} />
        <Search />
      </div>
    );
  }
}
