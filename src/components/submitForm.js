import React from "react";

function SubmitForm(props) {
  return (
    <div>
      <form className={!props.showInput ? 'invisible' : null} onSubmit={props.handleSubmit}>
        <input
          className={props.className}
          type="text"
          autoComplete="off"
          placeholder="your desired location"
          value={props.value}
          name="answer"
          onChange={props.handleChange}
        />
        <input className={props.className} type="button" value="Submit" />
      </form>
    </div>
  );

}

export default SubmitForm;