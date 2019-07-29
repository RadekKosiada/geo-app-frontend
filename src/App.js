import React, { Component } from "react";
import "./App.css";
import MapComponent from "./components/map";
import Location from "./components/location";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject1: {},
      geoObject2: {},
      value1: "",
      value2: "",
      className1: 1,
      className2: 2,
      showInput1: true,
      showInput2: true,
      showButtons1: false,
      showButtons2: false,
      markerPosition1: "",
      markerPosition2: "",
      errorMessage1: "",
      errorMessage2: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.editSearchQuery = this.editSearchQuery.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
    this.updateLocation1 = this.updateLocation1.bind(this);
    this.updateLocation2 = this.updateLocation2.bind(this);
  }
  // we are passing this object response.data[index][0]
  // and with {} we destructure it in two arguments with the same names; ES6
  updateLocation1({geolocation, error}) {
    this.setState({
      geoObject1: geolocation,
      markerPosition1: [geolocation.lat, geolocation.lng],
      errorMessage1: error,
      showButtons1: true,
      showInput1: ""
    })
  }
  updateLocation2({geolocation, error}) {
    this.setState({
      geoObject2: geolocation,
      markerPosition2: [geolocation.lat, geolocation.lng],
      errorMessage2: error,
      showButtons2: true,
      showInput2: ""
    })
  }
  
  handleChange(e) {
    if (Number(e.target.className) === this.state.className1) {
      this.setState({ value1: e.target.value });
    } else {
      this.setState({ value2: e.target.value });
    }
  }
  editSearchQuery(e) {
    if (Number(e.target.className) === this.state.className1) {
      
      this.setState({
        showInput1: true
      });
    } else {
      this.setState({
        showInput2: true
      });
    }
  }

  deleteSearchQuery(e) {
    if (Number(e.target.className) === this.state.className1) {
      this.setState({
        errorMessage1: "",
        showInput1: true,
        value1: "",
        markerPosition1: "",
        geoObject1: {},
        showButtons1: false
      });
    } else {
      this.setState({
        errorMessage2: "",
        showInput2: true,
        value2: "",
        markerPosition2: "",
        geoObject2: {},
        showButtons2: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <MapComponent
          markerPosition1={this.state.markerPosition1}
          markerPosition2={this.state.markerPosition2}
        />
        <div id="input-container">
          <Location
            className={this.state.className1}
            showInput={this.state.showInput1}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value1}
            geoObject={this.state.geoObject1}
            markerPosition={this.state.markerPosition1}
            showButtons={this.state.showButtons1}
            editSearchQuery={this.editSearchQuery}
            deleteSearchQuery={this.deleteSearchQuery}
            updateLocation={this.updateLocation1}

            //commented out as it should all go to Location as a local state;
            //below we are calling function and can get data for marker to pass it to the Map

            // if so many props are sent => performance issue ans the page rerenders each time!

            //Location needs to be a state component;
            //in general communication as thin as possible;

            //try to make Location with hooks
            //first make a stateful component and then refactor with Hooks
            // onLocationUpdated={(data) => this.updateMarker(1, data)}
          />

          <Location
            className={this.state.className2}
            showInput={this.state.showInput2}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value2}
            geoObject={this.state.geoObject2}
            markerPosition={this.state.markerPosition2}
            showButtons={this.state.showButtons2}
            editSearchQuery={this.editSearchQuery}
            deleteSearchQuery={this.deleteSearchQuery}
            updateLocation={this.updateLocation2}
          />
        </div>
      </div>
    );
  }
}

export default App;

// in the state of app => array of locations; instead of passing 