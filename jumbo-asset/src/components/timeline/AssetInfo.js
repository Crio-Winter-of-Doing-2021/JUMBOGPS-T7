import React, { Component } from "react";

export default class AssetInfo extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props.data.data);
    this.state = {
      assetInfo: props.data.data,
    };
  }
  render() {
    return (
      <>
        <div className="ui teal inverted segment">
          <div className="ui red inverted">
            {/* <div className="container"> */}
            <h4>Asset ID : {this.state.assetInfo.asset_id}</h4>
            <h4>Asset Type : {this.state.assetInfo.asset_type}</h4>
            <br />
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}
