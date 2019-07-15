import React from "react";
import Results from "./results";
import SubmitForm from "./submitForm";
import Buttons from "./buttons";
import axios from "axios";

function Location(props) {
  function handleSubmit(e) {
    debugger
    e.preventDefault();
 
    //submitting searchQuery to the server
    axios
      .post(`/submitQuery/1`, {
        searchQuery: props.value
      })
      .then(response => {
        console.log(response)       
          props.updateLocation(response.data[1][0])     
     
        //alert error message when no data received 
        if (response.data[1][0].error) {
          alert(response.data[1][0].error)
        }
      })
      .catch(err =>
        console.log("Error in submitting query to backend: ", err.message)
      );
  }


  return (
    // check if i need id??
    <div className="results-container">
      <SubmitForm
        className={props.className}
        showInput={props.showInput}
        handleSubmit={handleSubmit}
        handleChange={props.handleChange}
        value={props.value}
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