import React from "react";

function Buttons(props){
      return (
        <div>
          <button onClick={props.editSearchQuery}>Edit</button>or
          <button onClick={props.deleteSearchQuery}>Delete</button>
        </div>     
      );  
}

export default Buttons;