import React, { Component, useContext } from "react";
import Search from "../components/search/Search";
import SearchByID from "../components/search/SearchById";
import axios from "axios";
import MarkerContext from "../ContextData";
export default class DashBoard extends Component {
  static contextType = MarkerContext;
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
    this.fetchData();
  }
  fetchData = () => {
    const { markers, setMarkers } = this.context;
    const config = {
      params: this.state.params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      loc: null,
    };
    const response = axios
      .get(process.env.REACT_APP_API_URL + "/assets", config)
      .then(function (response) {
        console.log(response);
        setMarkers(response.data);
        // console.log(this.context);
      });
    this.setState({ loc: response });
    // this.setState({ contex : })
    this.contextType = this.state.loc;
    // console.log(this.state.loc);?
  };
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
      </>
    );
  }
}
