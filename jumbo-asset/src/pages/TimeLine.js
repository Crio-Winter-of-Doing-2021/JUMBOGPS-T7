import React, { Component } from "react";
import MapContainer from "../components/maps/Maps";
import axios from "axios";
import AssetInfo from "../components/timeline/AssetInfo";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets/" + id, config)
      .then((response) => {
        this.setState({ data: response });
      });
  }

  render() {
    return (
      <>
        <div className="my-sidebar">
          {this.state.data ? <AssetInfo data={this.state.data} /> : "LOADING"}
        </div>
      </>
    );
  }
}
