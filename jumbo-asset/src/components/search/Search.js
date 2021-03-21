import React, { Component } from "react";
import SearchByID from "./SearchById";
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
      <div class="ui calendar" id="example1">
        <div class="ui input left icon">
          <i class="calendar icon"></i>
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
        <div class="field">
          <label> Change Number of Assets Shown</label>
          <select class="ui fluid search dropdown" multiple="">
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
{
  /* 
function showOptions(){
    return(<>{for(let i = 0; i < 100; i++) {
                 <option value={i}>{i}</option>
                
            </>}}
} */
}
