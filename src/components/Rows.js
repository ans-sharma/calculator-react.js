import React from "react"
import Keys from "./Keys"
import "../styles/rows.css"

class Rows extends React.Component {
    render(){
        return(
            <div className = "rowsProp">
                <div className="childProps">
                    {/* <Keys value = {this.props.v1}></Keys>
                    <Keys value = {this.props.v2}></Keys>
                    <Keys value = {this.props.v3}></Keys>
                    <Keys value = {this.props.v4}></Keys> */}
                </div>
            </div>
        )
    }
}
export default Rows