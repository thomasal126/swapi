import React from "react";

export default function Person(props) {
  return (
    <div>
      <div className="mx-auto container-fluid row border border-danger">
        <p className="col-sm-4">{props.name}</p>
        <p className="col-sm-4">{props.mass}</p>
        <p className="col-sm-4">{props.height}</p>
      </div>
    </div>
  );
}
