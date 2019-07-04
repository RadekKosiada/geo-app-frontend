import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import Map from "./components/map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject: {},
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(geolocation => this.setState({ geoObject: geolocation }))
      .catch(err => console.log);
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <form className="" onSubmit={this.handleSubmit}>
          <input type="text" autoComplete="off" placeholder="your desired location" name="answer" onChange={this.handleChange} />
          <input className="button" type="submit" value="Submit" />
        </form>
        <Results geoObject={this.state.geoObject} value={this.state.value} />
        <Map geoObject={this.state.geoObject} />
      </div>
    );
  }
}

export default App;
