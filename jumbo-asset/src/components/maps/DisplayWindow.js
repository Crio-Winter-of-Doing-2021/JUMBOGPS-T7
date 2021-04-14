import React from "react";
import { getDate } from "../../utils";
export default function DisplayWindow({ data }) {
  return (
    <div className="ui segment">
      <h5 className="ui header"> Asset ID : {data.asset_id}</h5>
      <li> Asset Type : {data.asset_type}</li>
      <li> Last Updated : {getDate(data.location.updated)}</li>
      <a href={"/assets/" + data.asset_id}>
        <button className="ui button">More Info </button>
      </a>
    </div>
  );
}
