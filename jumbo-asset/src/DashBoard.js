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
        max: 100,
      },
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
    this.setState({ id });
  }
  fetchData = (id) => {
    const config = {
      params: this.state.params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios.get(process.env.REACT_APP_API_URL+"/assets", config).then(function (response) {
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
