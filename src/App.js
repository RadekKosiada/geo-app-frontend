import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import Map from "./components/map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject: {}
    };
  }
  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(geolocation => this.setState({ geoObject: geolocation }))
      .catch(err => console.log);
  }

  render() {
    return (
      <div className="App">
        <Results geoObject={this.state.geoObject} />
        <Map geoObject={this.state.geoObject}/>
      </div>
    );
  }
}

export default App;
