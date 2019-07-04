import React, { Component } from "react";
import L from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: "",
      lat: "",
      lng: ""
    };
  }
  
  componentDidUpdate({geoObject, map}) {
    if (this.props.geoObject !== geoObject) {
    //  console.log(this.props.geoObject)
     this.setState({
      // lat: this.props.geoObject.lat,
      // lng: this.props.geoObject.lng,
    });
    
    }
    // console.log(this.state.lat, this.state.lng);
    const lat = this.state.lat;
    const lng = this.state.lng;
    // drawMap(49.8419, 24.0315)
   
  }

  componentDidMount() {
    //drawMap with lat & lng of Germany
    drawMap(51.0834196, 10.4234469)
  }

  render() {

    return <div id="map" />;
  }
}

export default Map;

function drawMap(lat, lng) {
  // console.log(document.getElementById('map'))
  const map = L.map('map', {
    center: [lat, lng],
    zoom: 6,
    layers: [
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }),
    ]
  });
  
  return map;
}


