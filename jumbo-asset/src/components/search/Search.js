import React, { Component } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 100,
      startDate: props.data.startDate,
      endDate: props.data.endDate,
      type: props.data.type,
    };
    console.log(props.data);
  }

  displayOptions = (limit) => {
    var returnArray = [];
    for (let i = 5; i <= limit; i += 5) {
      returnArray.push(<option vlaue={i}>{i}</option>);
    }
    return returnArray;
  };

  callSearch = () => {
    const newStartDate = new Date(this.state.startDate).toISOString();
    const newEndDate = new Date(this.state.startDate).toISOString();
    this.setState({ startDate: newStartDate });
    this.setState({ endDate: newEndDate });
    this.props.callFilterSearch({
      max: this.state.max,
      type: this.state.type,
      endDate: newEndDate,
      startDate: newStartDate,
    });
  };
  render() {
    return (
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
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
          <SemanticDatepicker
            onChange={(e, d) => {
              console.log(d.value);
              this.setState({ startDate: d.value });
            }}
          />
        </div>
        <h4 class="ui header"> Select End Date </h4>
        <SemanticDatepicker
          onChange={(e, d) => {
            console.log(d.value);
            this.setState({ endDate: d.value });
          }}
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
            <button class="ui primary button" onClick={this.callSearch}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
