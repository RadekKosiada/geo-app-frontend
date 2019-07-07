import React from "react";

export default function Results(props) {
  const coordinates = props.markerPosition;

  return (
    <div className="">
      <h1 className={`destination ${props.showInput ? 'invisible' : null}`}>{props.value}</h1>

      {coordinates && (
        <div>
          <h4>{props.geoObject.type}</h4>
          <p>Latitude: {coordinates[0]}</p>
          <p>Longitude: {coordinates[1]}</p>
        </div>
      )} 

      {!coordinates && ( 
        <div>
          <h4>type: <EmptyResults /></h4> 
          <p>Latitude: <EmptyResults /></p>
          <p>Longitude: <EmptyResults /></p>
        </div>)}

    </div>
  );
}

function EmptyResults() {
  return (   
      <span className="no-data">waiting for the data</span>
  )
}