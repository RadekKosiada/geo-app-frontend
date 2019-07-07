import React from "react";

function Buttons(props){
      return (
        <div className={!props.showButtons ? 'invisible' : null}>
          <button className={props.className} onClick={props.editSearchQuery}>Edit</button>
          <span> or </span> 
           <button className={props.className} onClick={props.deleteSearchQuery}>Delete</button>
        </div>     
      );  
}

export default Buttons;