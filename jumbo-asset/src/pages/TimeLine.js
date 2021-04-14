import React, { Component } from "react";
import axios from "axios";
import AssetInfo from "../components/timeline/AssetInfo";
import MapContext from "../MapContext";
import { getCordinates } from "../utils";
import SearchByID from "../components/search/SearchById";
export default class DashBoard extends Component {
  static contextType = MapContext;
  constructor(props) {
    super(props);
    this.state = {
      data: true,
    };
  }
  componentDidMount() {
    console.log("Fetching");

    const id = this.props.match.params.id;
    const { setTDetails } = this.context;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets/" + id, config)
      .then((response) => {
        const { X, Y, newArray, lineArray } = getCordinates(response);
        console.log(X, Y, newArray, lineArray);
        setTDetails(X, Y, newArray, response, lineArray, false);
        // setDetails(response, false);
      })
      .catch((err) => {
        this.setState({ data: false });
      });
  }

  onIdSubmit = (id) => {
    const { setTDetails } = this.context;
    console.log("Fetching");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets/" + id, config)

      .then((response) => {
        const { X, Y, newArray, lineArray } = getCordinates(response);
        console.log(X, Y, lineArray);
        setTDetails(X, Y, newArray, response, lineArray, false);
      })
      .catch((err) => {
        this.setState({ data: false });
      });
  };

  render() {
    const { pos } = this.context;
    // console.log(pos);
    return (
      <div className="my-sidebar">
        {this.state.data ? (
          <>
            <AssetInfo data={pos.data} onIdSubmit={this.fetchData} />
          </>
        ) : (
          <div className="ui negative message">"Asset Data Not Found"</div>
        )}
        <SearchByID callIdSearch={this.onIdSubmit} />
      </div>
    );
  }
}
