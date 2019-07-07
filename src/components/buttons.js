import React from "react";

function Buttons(props){
      return (
        <div className={!props.showButtons ? 'invisible' : null}>
          <button className={props.className} onClick={props.editSearchQuery}>Edit</button>or
          <button className={props.className} onClick={props.deleteSearchQuery}>Delete</button>
        </div>     
      );  
}

export default Buttons;