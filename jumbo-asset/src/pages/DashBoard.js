import React, { Component } from "react";
import Search from "../components/search/Search";
import SearchByID from "../components/search/SearchById";
import axios from "axios";
import MapContext from "../MapContext";
import { getCordinates } from "../utils";

export default class DashBoard extends Component {
  static contextType = MapContext;
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
      types: [],
    };
  }
  componentDidMount() {
    this.fetchData();
    this.fetchAssetTypes();
  }
  componentDidUpdate(prevState, prevProps) {
    const { infoWindow } = this.context;
    // console.log(infoWindow);
    if (!infoWindow) {
      this.fetchData();
      this.fetchAssetTypes();
    }
  }
  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo);
  }

  fetchAssetTypes = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assetTypes", config)
      .then((response) => {
        this.setState({ types: response.data });
      })
      .catch((error) => console.log("OOPS ERROR", error));
  };
  fetchData = (searchParams) => {
    const { setDetails } = this.context;
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
        // setPos(response);
        const { X, Y, newArray } = getCordinates(response.data);
        console.log(X, Y, newArray);
        setDetails(X, Y, newArray, response, true);
        // setInfoWindow(true);
      })
      .catch((error) => console.log("OOPS ERROR", error));
  };
  onIdSubmit = (searchObj) => {
    this.props.history.push("/assets/" + searchObj);
  };
  onFilterSearch = (searchParams) => {
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
      </>
    );
  }
}
