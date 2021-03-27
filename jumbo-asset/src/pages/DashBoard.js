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
        startDate: null,
        endDate: null,
        type: null,
      },
      loc: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    const config = {
      params: this.state.params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      loc: null,
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets", config)
      .then((response) => {
        console.log(response.data);
        this.setState({ loc: response });
      })
      .catch((error) => console.log("OOPS ERROR", error));
    console.log(this.state.loc);
  };
  onIdSubmit = (searchObj) => {
    console.log(searchObj);
    this.props.history.push("/assets/" + searchObj);
  };
  onFilterSearch = (searchParams) => {
    console.log(searchParams);
    this.setState({ params: searchParams });
    this.fetchData();
  };
  render() {
    return (
      <>
        <div className="my-sidebar">
          <SearchByID callIdSearch={this.onIdSubmit} />
          <Search
            data={this.state.params}
            callFilterSearch={this.onFilterSearch}
          />
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
