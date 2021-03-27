import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 100,
      startDate: null,
      endDate: null,
      type: null,
    };
    console.log(this.context);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  displayOptions = (limit) => {
    var returnArray = [];
    for (let i = 5; i <= limit; i += 5) {
      returnArray.push(<option vlaue={i}>{i}</option>);
    }
    return returnArray;
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <br />
        <hr />
        <br />
        <div className="field">
          <h4 className="ui header"> Change Number of Assets Shown</h4>
          <select
            className="ui search"
            value={this.state.value}
            onChange={(e) => {
              this.setState({ max: e.target.value });
            }}
          >
            {this.displayOptions(100)}
          </select>
          <h4 class="ui header"> Select Start Date</h4>
          <input
            type="date"
            placeholder="Start Date"
            onChange={(e) => this.setState({ startDate: e.target.value })}
          />
        </div>
        <h4 class="ui header"> Select End Date </h4>
        <input
          type="date"
          placeholder="End Date"
          onChange={(e) => this.setState({ endDate: e.target.value })}
        />
        <br />
        <h4 class="ui header"> Asset Type </h4>

        <div class="ui two column very relaxed grid">
          <div class="column">
            <input
              type="text"
              value={this.state.type}
              onChange={(e) => this.setState({ type: e.target.value })}
            />
          </div>
          <div class="column">
            <button class="ui primary button" onClick={this.onSubmitId}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
