import React, {Component} from 'react';
import L from 'leaflet';

class Map extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      // center: [lat, lng]
      center: [52.5145075, 13.3501115],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;