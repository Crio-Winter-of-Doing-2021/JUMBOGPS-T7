import React, { Component } from "react";

export default class SearchByID extends Component {
  constructor(props) {
    super(props);
    this.state = { searchId: "" };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchId);
    // this.props.sendID(this.state.searchId);
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div class="field">
          <label>Asset Search By ID</label>
          <div class="ui category search">
            <div class="ui icon input">
              <input
                class="prompt"
                type="text"
                value={this.state.searchId}
                onChange={(e) => this.setState({ searchId: e.target.value })}
                placeholder="Enter ID..."
              />
              <i class="search icon"></i>
            </div>
          </div>
          <div class="results"></div>
        </div>
      </form>
    );
  }
}
