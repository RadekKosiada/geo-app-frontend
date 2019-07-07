import React from "react";

export default function Results(props) {
  const coordinates = props.markerPosition;
  const noData = 'waiting for the data';

  return (
    <div className="">
      <p className={`destination ${props.showInput ? 'invisible' : null}`}>{props.value}</p>

      {coordinates && (
        <div id="coord1">
          <h4>{props.geoObject.type}</h4>
          <p>Latitude: {coordinates[0]}</p>
          <p>Longitude: {coordinates[1]}</p>
        </div>
      )} 

      {!coordinates && (
        <EmptyResults string={noData} />
      )}
    </div>
  );
}

function EmptyResults(props) {
  return (
    <div>
      <h4>type: <span className="no-data">{props.string}</span></h4>
      <p>Latitude: <span className="no-data">{props.string}</span></p>
      <p>Longitude: <span className="no-data">{props.string}</span></p>
    </div>
  )
}