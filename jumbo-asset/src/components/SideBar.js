import React, { Component } from "react";
import Search from "./search/Search";
import SearchByID from "./search/SearchById";
import AssetInfo from "./timeline/AssetInfo";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  onSearchSubmit(searchObj) {
    console.log(searchObj);
  }

  render() {
    return (
      <div id="my-sidebar">
        {this.props.search ? (
          <>
            <SearchByID callApi={this.onSearchSubmit} />
            <Search />{" "}
          </>
        ) : (
          <AssetInfo />
        )}
      </div>
    );
  }
}
