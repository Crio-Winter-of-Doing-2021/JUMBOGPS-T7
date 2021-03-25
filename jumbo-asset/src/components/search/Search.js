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
        <div className="field">
          <label> Change Number of Assets Shown</label>
          <select className="ui fluid search dropdown" multiple="">
            {this.displayOptions(100)}
          </select>
          <h3> Select Start Date</h3>
          {this.dateTimeDisplay()}
          <h3> Select End Date </h3>
          {this.dateTimeDisplay()}
        </div>
      </form>
    );
  }
}
