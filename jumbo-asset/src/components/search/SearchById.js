import React, { Component } from "react";

export default class SearchByID extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { searchId: "" };
  }

  onSubmitId = () => {
    this.props.callIdSearch(this.state.searchId);
  };
  componentWillMount;
  render() {
    return (
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="ui header">Asset Search By ID</h3>
        <div className="ui action input">
          <input
            className="prompt"
            type="text"
            value={this.state.searchId}
            onChange={(e) => this.setState({ searchId: e.target.value })}
            placeholder="Enter ID..."
          />
        </div>
        <button className="ui primary button" onClick={this.onSubmitId}>
          Search
        </button>
      </form>
    );
  }
}
