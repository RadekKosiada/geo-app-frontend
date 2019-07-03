import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import Map from "./components/map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }
  
  render() {
    console.log(latitude, longitude)
    return (
      <div className="App">
        <Results />
        <Map />
      </div>
    );
  }
}

export default App;
