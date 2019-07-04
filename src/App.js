import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import MapComponent from "./components/map";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject: {},
      value: "",
      showInput: true,
      markerPosition: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.editSearchQuery = this.editSearchQuery.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
    this.testData = this.testData.bind(this);
  }


  renderData() {
    fetch("/api")
      .then(res => res.json())
      .then(geolocation =>
        this.setState({
          geoObject: geolocation,
          markerPosition: [geolocation.lat, geolocation.lng]
        })
      )
      .catch(err => console.log);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit fired!");
    this.setState({
      showInput: false
    });
    //submitting searchQuery to the server
    axios
      .post("/submitQuery", {
        searchQuery: this.state.value
      })
      .then(response => console.log(response))
      .catch(err =>
        console.log("Error in submitting query to backend: ", err.message)
      );
    this.renderData();
  }

  submitOnEnter(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    } else {
      return;
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  editSearchQuery() {
    this.setState({
      showInput: true
    });
  }
  deleteSearchQuery() {
    this.setState({
      showInput: true,
      value: "",
      markerPosition: "",
      geoObject: ""
    });
  }
  testData() {
    console.log(this.state.markerPosition)
  }
  render() {
    return (
      <div className="App">
        {this.state.showInput && (
          <form className="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              placeholder="your desired location"
              value={this.state.value}
              name="answer"
              onKeyPress={this.submitOnEnter}
              onChange={this.handleChange}
            />
            <input className="button" type="button" value="Submit" />
          </form>
        )}
        {!this.state.showInput && <h3>{this.state.value}</h3>}
        <Results geoObject={this.state.geoObject} markerPosition={this.state.markerPosition} value={this.state.value} />
        <button onClick={this.editSearchQuery}>Edit</button>or
        <button onClick={this.deleteSearchQuery}>Delete</button>
        <button onClick={this.testData}>TEST</button>
        <br />
        <MapComponent markerPosition={this.state.markerPosition} />
      </div>
    );
  }
}

export default App;
