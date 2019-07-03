import React, { Component } from "react";

export default class Results extends Component {
  constructor() {
    super();
    this.state = {
      geoObject: {}
    };
  }
  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(geolocation => this.setState({geoObject: geolocation}))
    .catch(err => (console.log))
  }

  render() {
    if(this.state.geoObject) {
      const object = this.state.geoObject;
      return (
        <div className="results">
          <p></p>
          <h3>{object.type}</h3>
          <p>{object.lng}</p>
          <p>{object.lat}</p>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
    
  }
}
