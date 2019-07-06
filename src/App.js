import React, { Component } from "react";
import "./App.css";
import Results1 from "./components/results1";
import SubmitForm from "./components/submitForm";
import Results2 from "./components/results2";
import MapComponent from "./components/map";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject: {},
      value: "",
      showInput1: true,
      showInput2: true,
      markerPosition: "",
      errorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.editSearchQuery = this.editSearchQuery.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
    this.testData = this.testData.bind(this);
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
          geoObject: response.data[1],
          markerPosition: [response.data[1].lat, response.data[1].lng],
          errorMessage: response.data[2]
        })
        console.log(response.data[1], response.data[2]);
        console.log(this.state.geoObject)
        //alert error message when no data received 
        if (this.state.errorMessage) {
          alert(this.state.errorMessage)
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
    this.setState({
      value: e.target.value
    });
  }
  editSearchQuery() {
    this.setState({
      showInput1: true
    });
  }
  deleteSearchQuery() {
    console.log("DS FIRED")
    this.setState({
      errorMessage: "",
      showInput1: true,
      value: "",
      markerPosition: "",
      geoObject: {}
    });
  }
  testData() {
    console.log(this.state.markerPosition)
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
          <Results1 geoObject={this.state.geoObject} markerPosition={this.state.markerPosition} value={this.state.value} showInput1={this.state.showInput1} />
          <button onClick={this.editSearchQuery}>Edit</button>or
          <button onClick={this.deleteSearchQuery}>Delete</button>
          <button onClick={this.testData}>TEST</button>
        </div>
        {/* <div id="results-container2">
          {this.state.showInput2 && (
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

          <Results2 />
          <button onClick={this.editSearchQuery}>Edit</button>or
          <button onClick={this.deleteSearchQuery}>Delete</button>
          <button onClick={this.testData}>TEST</button>
        </div> */}
       
        <br />
        <MapComponent markerPosition={this.state.markerPosition} />
      </div>
    );
  }
}

export default App;
