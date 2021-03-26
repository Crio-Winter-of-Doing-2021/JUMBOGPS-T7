import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AssetInfo from "./components/timeline/AssetInfo";

export default function TimeLine(props) {
  let { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({});

  useEffect(() => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const result = axios
      .get(url + "/assets/" + id, config)
      .then(function (response) {
        console.log(response);
      });
    setData(result.data);
  });
  return (
    <div className="my-sidebar">
      <AssetInfo />
    </div>
  );
}
