import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";

export default function TimeLine(props) {
  let { id } = useParams();
  const url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({});
  useEffect(async () => {
    const result = axios.get(url + "/assets/" + id).then(function (response) {
      console.log(response);
    });

    setData(result.data);
  });
  return <div>{id}</div>;
}
