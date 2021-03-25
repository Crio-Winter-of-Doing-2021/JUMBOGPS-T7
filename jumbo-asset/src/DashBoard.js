import React, { Component } from "react";
import MapContainer from "./components/maps/Maps";
import Search from "./components/search/Search";
import SearchByID from "./components/search/SearchById";
import coordinates from "./data.js";
import { withRouter } from "react-router";
import axios from "axios";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_API_URL,
      params: {
        max: null,
        type: null,
        startDate: null,
        endDate: null,
      },
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
    this.setState({ id });
  }
  fetchData = (id) => {
    axios
      .get(this.state.url + "assets", {
        params: this.state.params,
      })
      .then(function (response) {
        console.log(response);
      });
  };
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
        {/* <MapContainer data={coordinates} /> */}
      </>
    );
  }
}
