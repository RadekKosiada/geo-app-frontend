import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="input">
        Label
        <input />
      </div>
    );
  }
}
