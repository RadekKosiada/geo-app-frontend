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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.editSearchQuery = this.editSearchQuery.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
  }

  handleSubmit(e) {
    let searchQuery = "";
    let param = null;
    e.preventDefault();
    console.log(e)
    console.log("Submit fired!");
    if (Number(e.target.className) === this.state.className1) {
      this.setState({ showInput1: false, geoObject1: "", markerPosition1: "" });
      searchQuery = this.state.value1
    }
    if (Number(e.target.className) === this.state.className2) {
      this.setState({ showInput2: false, geoObject2: "", markerPosition2: "" });
      searchQuery = this.state.value2
    }

    param = Number(e.target.className);
    //submitting searchQuery to the server
    axios
      .post(`/submitQuery/${param}`, {
        searchQuery: searchQuery
      })
      .then(response => {
        if (param === this.state.className1) {
          this.setState({
            geoObject1: response.data[param][0].geolocation,
            markerPosition1: [response.data[param][0].geolocation.lat, response.data[param][0].geolocation.lng],
            errorMessage1: response.data[param][0].error,
            showButtons1: true
          })
        }
        if (param === this.state.className2) {
          this.setState({
            geoObject2: response.data[param][0].geolocation,
            markerPosition2: [response.data[param][0].geolocation.lat, response.data[param][0].geolocation.lng],
            errorMessage2: response.data[param][0].error,
            showButtons2: true
          })
        }

        console.log(response.data[0], response.data[2][0]);
        //alert error message when no data received 
        if (this.state.errorMessage1) {
          alert(this.state.errorMessage1)
        }
        if (this.state.errorMessage2) {
          alert(this.state.errorMessage2)
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
    console.log("DS FIRED")
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
          <div id="results-container1">
            <SubmitForm
              className={this.state.className1}
              showInput={this.state.showInput1}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              value={this.state.value1}
              submitOnEnter={this.submitOnEnter}
            />
            <Results
              className={this.state.className1}
              geoObject={this.state.geoObject1}
              markerPosition={this.state.markerPosition1}
              value={this.state.value1}
              showInput={this.state.showInput1}
            />
            <Buttons
              className={this.state.className1}
              showButtons={this.state.showButtons1}
              editSearchQuery={this.editSearchQuery}
              deleteSearchQuery={this.deleteSearchQuery}
            />
          </div>
          <div id="results-container2">
            <SubmitForm
              className={this.state.className2}
              showInput={this.state.showInput2}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              value={this.state.value2}
              submitOnEnter={this.submitOnEnter}
            />
            <Results
              className={this.state.className2}
              geoObject={this.state.geoObject2}
              markerPosition={this.state.markerPosition2}
              value={this.state.value2}
              showInput={this.state.showInput2}
            />
            <Buttons
              showButtons={this.state.showButtons2}
              className={this.state.className2}
              editSearchQuery={this.editSearchQuery}
              deleteSearchQuery={this.deleteSearchQuery}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
