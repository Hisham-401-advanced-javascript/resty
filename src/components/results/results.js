import React from "react";
import ReactJson from "react-json-view";
import "./results.scss";
const Results = (props) => {
  return (
    <div id="textarea">
      <div>Count: {props.count}</div>
      {/* Render json without using react-json-view module  */}
      {/* {
        <div><pre>headers:{ JSON.stringify(props.headers, null, 2) }</pre></div>
      }
      {
        <div><pre>body: { JSON.stringify(props.results, null, 2) }</pre></div>
      } */}
      {/* Render json using react-json-view module  */}
      {<ReactJson src={props.headers} />}

      {<ReactJson src={props.results} />}
    </div>
  );
};

export default Results;
