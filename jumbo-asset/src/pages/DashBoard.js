import React, { Component } from "react";
import Search from "../components/search/Search";
import SearchByID from "../components/search/SearchById";
import axios from "axios";
import MapContainer from "../components/maps/MapContainer";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_API_URL,
      params: {
        max: 100,
      },
      loc: null,
    };
  }
  componentDidMount() {
    const config = {
      params: this.state.params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      loc: null,
    };
    axios
      .get(process.env.REACT_APP_API_URL + "/assets", config)
      .then((response) => {
        console.log(response.data);
        this.setState({ loc: response });
      });
    console.log(this.state.loc);
  }
  onIdSubmit = (searchObj) => {
    console.log(searchObj);
    this.props.history.push("/assets/" + searchObj);
  };
  onFilterSearch = (searchParams) => {
    this.setState({ params: searchParams });
  };
  render() {
    return (
      <>
        <div className="my-sidebar">
          <SearchByID callIdSearch={this.onIdSubmit} />
          <Search callFilterSearch={this.onFilterSearch} />
        </div>
        {this.state.loc ? (
          <div className="map">
            <MapContainer data={this.state.loc} infoWindow={true} />
          </div>
        ) : (
          "LODING"
        )}
      </>
    );
  }
}
