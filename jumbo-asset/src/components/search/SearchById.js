import React, { Component } from "react";

export default class SearchByID extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { searchId: "" };
  }

  onSubmitId = () => {
    this.props.callIdSearch(this.state.searchId);
  };
  componentWillMount;
  render() {
    return (
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
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
        </div>
        <button class="ui primary button" onClick={this.onSubmitId}>
          Search
        </button>
      </form>
    );
  }
}
