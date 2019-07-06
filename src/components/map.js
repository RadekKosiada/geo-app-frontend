import React, { Component } from "react";
import L from "leaflet";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const germanLat = 51.0834196;
const germanLng = 10.4234469;

class MapComponent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   markerPosition: ''
    // };
  }
  render() {
    return (
      <Map
        style={{ height: "380px", width: "80%", display: "inline-block" }}
        zoom={5}
        center={[germanLat, germanLng]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {this.props.markerPosition[0] && (
          <Marker markerPosition={this.props.markerPosition} />
        )}
        {!this.props.markerPosition[0] && <h1>Hello</h1>}
      </Map>
    );
  }
}

export default MapComponent;

class Marker extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {}
  render() {   
      return <CircleMarker center={this.props.markerPosition} />;
  }
}
