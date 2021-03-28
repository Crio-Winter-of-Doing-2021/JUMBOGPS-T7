import React, { Component } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.types);
    this.state = {
      max: props.data.max,
      start: "",
      end: "",
      type: null,
      types: Array.from(this.props.types),
    };
  }
  // componentDidUp
  componentWillReceiveProps(nextProps) {
    this.setState({ types: Array.from(nextProps.types) });
  }
  displayOptions = (limit) => {
    var returnArray = [];
    for (let i = 5; i <= limit; i += 5) {
      returnArray.push(<option vlaue={i}>{i}</option>);
    }
    return returnArray;
  };
  makeDate = (date) => {
    if (!date) return null;
    let tempDate = date ? new Date(date).toISOString() : null;
    if (tempDate.endsWith("Z")) tempDate = tempDate.slice(0, -1);
    return tempDate;
  };
  callSearch = () => {
    const newStartDate = this.makeDate(this.state.start);
    const newEndDate = this.makeDate(this.state.end);

    this.setState({ start: newStartDate });
    this.setState({ end: newEndDate });
    this.props.callFilterSearch({
      max: this.state.max,
      type: this.state.type,
      end: newEndDate,
      start: newStartDate,
    });
  };
  render() {
    return (
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
        <br /> <hr /> <br />
        <div className="field">
          <h4 className="ui header"> Change Number of Assets Shown</h4>
          <div className="ui action input">
            <input
              className="prompt"
              type="text"
              value={this.state.max}
              onChange={(e) => this.setState({ max: e.target.value })}
              placeholder="Enter Number..."
            />
          </div>
          <h4 className="ui header"> Select Start Date </h4>
          <SemanticDatepicker
            onChange={(e, d) => {
              console.log(d.value);
              this.setState({ start: d.value });
            }}
          />
        </div>
        <h4 className="ui header"> Select End Date </h4>
        <SemanticDatepicker
          onChange={(e, d) => {
            console.log(d.value);
            this.setState({ end: d.value });
          }}
        />
        <br />
        <h4 className="ui header"> Asset Type </h4>
        <div className="ui two column very relaxed grid">
          <div className="column">
            <select
              className="ui dropdown"
              onChange={(e) => {
                this.setState({
                  type: e.target.value === "ALL" ? null : e.target.value,
                });
              }}
            >
              {this.state.types.map((element, idx) => {
                return (
                  <option key={idx} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="column">
            <button className="ui primary button" onClick={this.callSearch}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
