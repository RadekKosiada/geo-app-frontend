import React, { Component } from "react";

export default function Results(props) {
  const object = props.geoObject;
  return (
    <div className="results">
      <p />
      <h3>{object.type}</h3>
      <p>{object.lng}</p>
      <p>{object.lat}</p>
    </div>
  );
}
