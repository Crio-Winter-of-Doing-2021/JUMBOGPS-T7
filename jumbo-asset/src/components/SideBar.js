import React, { Component } from "react";
import Filter from "./Filter";
export default class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        Powerful search
        {search()}
        <Filter />
      </div>
    );
  }
}

function search() {
  return (
    <form id="search">
      <input type="number" name="id" />
    </form>
  );
}
