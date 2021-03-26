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
        <div className="field">
          <h3 className="ui header">Asset Search By ID</h3>
          <div className="ui category search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                value={this.state.searchId}
                onChange={(e) => this.setState({ searchId: e.target.value })}
                placeholder="Enter ID..."
              />
              <i className="search icon"></i>
            </div>
          </div>
          <div className="results"></div>
        </div>
      </form>
    );
  }
}
