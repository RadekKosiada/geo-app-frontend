import React from "react";

export default function Results(props) {
  const object = props.geoObject;
 
  console.log("results");
  return (    
    <div className="results">
      <p />
      {props.value && (<p>{props.value}</p>)}
      {!props.value && (<p>your location</p>)}
      <h3>{object.type}</h3>
      <p>Latitude: {object.lat}</p>
      <p>Longitude: {object.lng}</p>
    </div>
  );
}
