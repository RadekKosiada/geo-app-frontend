import React, { Component } from "react";

class SubmitForm extends Component {

  render() {   
      return (
        <form className={!this.props.showInput1 ? 'invisible' : null} >
          <input
            type="text"
            autoComplete="off"
            placeholder="your desired location"
            value={this.props.value}
            name="answer"
            onKeyPress={this.props.submitOnEnter}
            onChange={this.props.handleChange}
          />
          <input className="button" onClick={this.props.handleSubmit} type="button" value="Submit" />
        </form>
      );
  }
}

export default SubmitForm;