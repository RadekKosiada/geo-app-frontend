import React from "react";

export default function Results(props) {
  const coordinates = props.markerPosition;
  const noData = 'waiting for the data'

  return (
    <div className="results">
      <p />
      {/* {props.value && (<p>{props.value}</p>)}
      {!props.value && (<p>your location</p>)} */}
      <h3>{props.geoObject.type}</h3>
      {!coordinates && (
        <div>
          <p>Latitude: <span className="no-data">{noData}</span></p>
          <p>Longitude: <span className="no-data">{noData}</span></p>
        </div>
      )}

      {coordinates && (
        <div>
          <p>Latitude: {coordinates[0]}</p>
          <p>Longitude: {coordinates[1]}</p>
        </div>
      )}
    </div>
  );
}
