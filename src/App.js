import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import SubmitForm from "./components/submitForm";
import Buttons from "./components/buttons";
import MapComponent from "./components/map";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject1: {},
      value: "",
      showInput1: true,
      showInput2: true,
      markerPosition1: "",
      markerPosition2: [53.0758196, 8.8071646],
      errorMessage1: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.editSearchQuery = this.editSearchQuery.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit fired!");
    this.setState({
      showInput1: false
    });
    //submitting searchQuery to the server
    axios
      .post("/submitQuery", {
        searchQuery: this.state.value
      })
      .then(response => {
        this.setState({
          geoObject1: response.data[1][0].geolocation1,
          markerPosition1: [response.data[1][0].geolocation1.lat, response.data[1][0].geolocation1.lng],
          errorMessage1: response.data[1][0].error1
        })
        console.log(response.data[1][0].error1);
        //alert error message when no data received 
        if (this.state.errorMessage1) {
          alert(this.state.errorMessage1)
        }
      })
      .catch(err =>
        console.log("Error in submitting query to backend: ", err.message)
      );
  }

  submitOnEnter(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    } else {
      return;
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  editSearchQuery() {
    this.setState({
      showInput1: true
    });
  }
  deleteSearchQuery() {
    console.log("DS FIRED")
    this.setState({
      errorMessage1: "",
      showInput1: true,
      value: "",
      markerPosition1: "",
      geoObject1: {}
    });
  }
  render() {
    return (
      <div className="App">
        <div id="results-container1">
          <SubmitForm
            showInput1={this.state.showInput1}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value}
            submitOnEnter={this.submitOnEnter}
          />
          <Results 
            geoObject1={this.state.geoObject1} 
            markerPosition1={this.state.markerPosition1} 
            value={this.state.value} 
            showInput1={this.state.showInput1} 
          />
          <Buttons 
            editSearchQuery={this.editSearchQuery}
            deleteSearchQuery={this.deleteSearchQuery}
          />
        </div>
        {/* <div id="results-container2">
          
        </div> */}

        <br />
        <MapComponent 
          markerPosition1={this.state.markerPosition1} 
          markerPosition2={this.state.markerPosition2} 
          geoObject1={this.state.geoObject1}
          />
      </div>
    );
  }
}

export default App;
