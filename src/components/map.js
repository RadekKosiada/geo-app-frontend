import React, { Component } from "react";
import L from "leaflet";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const germanLat = 51.0834196;
const germanLng = 10.4234469;

class MapComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
  
  }
  render() {
    return (
      <Map
        className="map"
        style={{ height: "400px", width: "70%", display: "inline-block" }}
        zoom={5}
        center={[germanLat, germanLng]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {this.props.markerPosition1[0] && (
          <Marker1 markerPosition1={this.props.markerPosition1} />
        )}
        <Marker2 markerPosition2={this.props.markerPosition2} />
      </Map>
    );
  }
}

// const customMarker = L.icon({ 
//   iconUrl: require('medwing.png'),
//   iconSize: [38, 95], 
//   opacity: 0.5,
//   color: 'red'
//  })

export default MapComponent;

//As coordinates for both Markers will be triggered dynamically I decided to create two seperate components for each of them
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
