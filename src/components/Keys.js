import React from "react"
import "../styles/keys.css"
import Display from "./Display"

const Keys = (props) => {
    // return (
    //     <input
    //         type="button"
    //         className="btn"
    //         onClick={props.dispIncreament}>
    //         {props.value}
    //     />
    // )
    return (
    <input
      className="btn"
      type="button"
      value={props.value}
      onClick = {props.dispIncreament}
    />
  );
}

export default Keys