import React, { Component } from "react";
import L from "leaflet";

const germanLat = 51.0834196;
const germanLng = 10.4234469;
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    

    };
  }
  
  componentDidUpdate() {
    
  }

  componentDidMount() {
    //drawMap with lat & lng of Germany
    this.map = L.map('map', {
      center: [germanLat, germanLng],
      zoom: 6,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    //adding marker in the middle of DE
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }

  render() {

    return <div id="map" />;
  }
}

export default Map;



