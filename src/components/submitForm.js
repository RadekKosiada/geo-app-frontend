import React from "react";

function SubmitForm(props) {
  return (
    <div>
      <form className={!props.showInput ? 'invisible' : null} >
        <input
          className={props.className}
          type="text"
          autoComplete="off"
          placeholder="your desired location"
          value={props.value}
          name="answer"
          onKeyPress={props.submitOnEnter}
          onChange={props.handleChange}
        />
        <input className={props.className} onClick={props.handleSubmit} type="button" value="Submit" />
      </form>
    </div>
  );

}

export default SubmitForm;