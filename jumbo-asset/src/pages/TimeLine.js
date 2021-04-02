import React, { Component } from "react";
import axios from "axios";
import AssetInfo from "../components/timeline/AssetInfo";
import MapContext from "../MapContext";

export default class DashBoard extends Component {
  static contextType = MapContext;
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const { setPos, setInfoWindow } = this.context;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL + "assets/" + id, config)
      .then((response) => {
        setPos(response);
        setInfoWindow(false);
      });
  }

  render() {
    return (
      <>
        {this.state.data ? (
          <>
            <div className="my-sidebar">
              <AssetInfo data={this.state.data} />
            </div>
          </>
        ) : (
          "LODING MAP"
        )}
      </>
    );
  }
}
