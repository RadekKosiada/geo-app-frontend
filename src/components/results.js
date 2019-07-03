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
    .then(geolocation => this.setState({geoObject: geolocation}, () => console.log('String fetched from server ..', geolocation)))
    .catch(err => (console.log))
  }

  render() {
    return (
      <div className="input">
        Label
        <input />
        <p>{this.state.geoObject.type}</p>
      </div>
    );
  }
}
