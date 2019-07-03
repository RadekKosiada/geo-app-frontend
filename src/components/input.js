import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      testString: ''
    };
  }
  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(string => this.setState({testString: string}, () => console.log('String fetched from server ..', string)))
    .catch(err => (console.log))
  }

  render() {
    return (
      <div className="input">
        Label
        <input />
        <p>{this.state.testString}</p>
      </div>
    );
  }
}
