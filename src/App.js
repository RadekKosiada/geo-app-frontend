import React, { Component } from "react";
import "./App.css";
import Results from "./components/results";
import Map from "./components/map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoObject: {},
      value: "",
      showInput : true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.activateEditMode = this.activateEditMode.bind(this);
    this.deleteSearchQuery = this.deleteSearchQuery.bind(this);
  }
  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(geolocation => this.setState({ geoObject: geolocation }))
      .catch(err => console.log);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit fired!");
    this.setState({
      showInput: false
    })
    // axios.post
  }
  submitOnEnter(e) {
    if(e.key === 'Enter') {
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
  activateEditMode() {
    this.setState({
      showInput: true,
    })
  }
  deleteSearchQuery() {
    this.setState({
      showInput: true,
      value: ''
    })
  }
  render() {
    return (
      <div className="App">
         {this.state.showInput && (<form className="" onSubmit={this.handleSubmit}>
         <input type="text" autoComplete="off" placeholder="your desired location" value={this.state.value} name="answer" onKeyPress={this.submitOnEnter} onChange={this.handleChange} />
          <input className="button" type="button" value="Submit" />
          </form>)}

        {!this.state.showInput && (<h3>{this.state.value}</h3>)}

          
        
        <Results geoObject={this.state.geoObject} value={this.state.value} />
        <button onClick={this.activateEditMode}>Edit</button>or
        <button onClick={this.deleteSearchQuery}>Delete</button><br />
        <Map geoObject={this.state.geoObject} />
      </div>
    );
  }
}

export default App;
