import React from "react";

export default function Results(props) {
  const coordinates = props.markerPosition;

  return (    
    <div className="results">
      <p />
      {/* {props.value && (<p>{props.value}</p>)}
      {!props.value && (<p>your location</p>)} */}
      <h3>{props.geoObject.type}</h3>
      <p>Latitude: {coordinates[0]}</p>
      <p>Longitude: {coordinates[1]}</p>
    </div>
  );
}
