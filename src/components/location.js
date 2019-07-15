import React from "react";
import Results from "./results";
import SubmitForm from "./submitForm";
import Buttons from "./buttons";

function Location(props) {
  return (
    // check if i need id??
    <div className="results-container">
      <SubmitForm
        className={props.className}
        showInput={props.showInput}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        value={props.value}
        submitOnEnter={props.submitOnEnter}
      />
      <Results
        className={props.className}
        geoObject={props.geoObject}
        markerPosition={props.markerPosition}
        value={props.value}
        showInput={props.showInput}
      />
      <Buttons
        className={props.className}
        showButtons={props.showButtons}
        editSearchQuery={props.editSearchQuery}
        deleteSearchQuery={props.deleteSearchQuery}
      />
    </div>

  );

}

export default Location;