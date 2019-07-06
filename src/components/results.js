import React from "react";

export default function Results(props) {
  const coordinates = props.markerPosition1;
  console.log(coordinates)
  const noData = 'waiting for the data'


  return (
    <div className="results">
      <p />
      <p className={props.showInput1 ? 'invisible' : null}>{props.value}</p>
      
      {!coordinates && (
        <div>
          <h4>type: <span className="no-data">{noData}</span></h4>
          <p>Latitude: <span className="no-data">{noData}</span></p>
          <p>Longitude: <span className="no-data">{noData}</span></p>
        </div>
      )}

      {coordinates && (
        <div>
          <h4>{props.geoObject.type}</h4>
          <p>Latitude: {coordinates[0]}</p>
          <p>Longitude: {coordinates[1]}</p>
        </div>
      )}
    </div>
  );
}
