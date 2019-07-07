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
      geoObject2: {type: "county", lat: 53.0758196, lng: 8.8071646, address: "10117 Berlin, Germany"},
      value1: "",
      value2: "",
      className1: 0,
      className2: 1,
      showInput1: true,
      showInput2: true,
      markerPosition1: "",
      markerPosition2: [53.0758196, 8.8071646],
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
    if(Number(e.target.className)===this.state.className1) {
      this.setState({
        showInput1: false
      });
      searchQuery = this.state.value1
      
    }
    param = e.target.className;
    //submitting searchQuery to the server
    axios
      .post(`/submitQuery/${param}`, {
        searchQuery: searchQuery
      })
      .then(response => {
        this.setState({
          geoObject1: response.data[1][0].geolocation1,
          markerPosition1: [response.data[1][0].geolocation1.lat, response.data[1][0].geolocation1.lng],
          errorMessage1: response.data[1][0].error1
        })
        console.log("OBJ1", this.state.geoObject1, "OBJ2", this.state.geoObject2);
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
    if(Number(e.target.className)===this.state.className1) {
      this.setState({ value1: e.target.value });
    } else {
      this.setState({ value2: e.target.value });
    }
  }
  editSearchQuery(e) {   
    if(Number(e.target.className)===this.state.className1) {
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
    if(Number(e.target.className)===this.state.className1) {
      this.setState({
        errorMessage1: "",
        showInput1: true,
        value1: "",
        markerPosition1: "",
        geoObject1: {}
      });
    } else {
      this.setState({
        errorMessage2: "",
        showInput2: true,
        value2: "",
        markerPosition2: "",
        geoObject2: {}
      });
    }
    
  }
  render() {
    return (
      <div className="App">
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
            className={this.state.className2}
            editSearchQuery={this.editSearchQuery}
            deleteSearchQuery={this.deleteSearchQuery}
          />
        </div>

        <br />
        <MapComponent 
          markerPosition1={this.state.markerPosition1} 
          markerPosition2={this.state.markerPosition2} 
          />
      </div>
    );
  }
}

export default App;
