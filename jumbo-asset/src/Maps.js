import React, { Component } from "react";
import axios from "axios";

export default class Maps extends Component {
  componentDidCatch() {
    this.fetchMaps();
  }

  fetchMaps = () => {
    const response = axios
      .get("https://www.google.com/maps/@?api=1&map_action=map")
      .then(function (response) {
        console.log(response);
      });
  };
  render() {
    return <div>HELLO</div>;
  }
}
