import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchId: "" };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // this.props.callApi(this.state.searchId);
  };
  getID(id) {
    console.log(id);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchId);
    // this.props.sendID(this.state.searchId);
  };
  displayOptions = (limit) => {
    var returnArray = [];
    for (let i = 5; i <= limit; i += 5) {
      returnArray.push(<option>{i}</option>);
    }
    return returnArray;
  };
  dateTimeDisplay = () => {
    return (
      <div className="ui calendar" id="example1">
        <div className="ui input left icon">
          <i className="calendar icon"></i>
          <input
            type="date"
            placeholder="Date/Time"
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <br />
        <hr />
        <br />
        <div className="field">
          <h4 className="ui header"> Change Number of Assets Shown</h4>
          <select className="ui fluid search dropdown" multiple="">
            {this.displayOptions(100)}
          </select>
          <br />
          <br />
          <div class="ui two column very relaxed grid">
            <div class="column">
              <h4 class="ui header"> Select Start Date</h4>
              {this.dateTimeDisplay()}
            </div>
            <div class="column">
              <h4 class="ui header"> Select End Date </h4>
              {this.dateTimeDisplay()}
            </div>
          </div>
        </div>
      </form>
    );
  }
}
