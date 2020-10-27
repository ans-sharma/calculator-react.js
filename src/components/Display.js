import React from "react"
import "../styles/display.css"
import "../styles/rows.css"

class Display extends React.Component {
    render(){
        return(
            <div className = "displayStyle">
                <div id = "edu">
                    {this.props.displayValue}
                    {/* <button onClick = {this.disp}>ans</button> */}
                </div>
            </div>
        )
    }
}
export default Display