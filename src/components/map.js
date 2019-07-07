import React from "react";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//define coordinates so the map opens on Germany by default
const germanLat = 51.0834196;
const germanLng = 10.4234469;

function MapComponent(props) {
  return (
    <Map
      className="map"
      style={{ height: "400px", width: "80%", display: "inline-block" }}
      zoom={5}
      center={[germanLat, germanLng]}
    >
      <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {props.markerPosition1[0] && (<Marker1 markerPosition1={props.markerPosition1} />)}
      {props.markerPosition2[0] && (<Marker2 markerPosition2={props.markerPosition2} />)}

    </Map>
  );
}

export default MapComponent;

function Marker1(props) {
  return (
    <div>
      <CircleMarker center={props.markerPosition1} />
    </div>
  )
}

function Marker2(props) {
  return (
    <div>
      <CircleMarker center={props.markerPosition2} />
    </div>
  )
}
