import React, { Component } from "react";
import { getDate } from "../../utils";
export default class AssetInfo extends Component {
  constructor(props) {
    super(props);
    // console.log("PROPS", props.data);
    this.state = {
      assetInfo: null,
    };
  }

  render() {
    return (
      <>
        {this.props.data ? (
          <div className="ui teal inverted segment">
            <div className="ui red inverted">
              <h4>Asset ID : {this.props.data.asset_id}</h4>
              <h4>Asset Type : {this.props.data.asset_type}</h4>
              {this.props.data.location ? (
                <h4>
                  Last Updated :{getDate(this.props.data.location[0].updated)}
                </h4>
              ) : (
                "DATE N/A"
              )}
              <br />
            </div>
          </div>
        ) : (
          "NO DATA FOUND"
        )}
      </>
    );
  }
}
