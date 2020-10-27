import React from "react"
import reactDOM from "react-dom"
import Keys from "./components/Keys"
import Rows from "./components/Rows"
import Display from "./components/Display"

class App extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      question: '',
      answer: ''
    }
    this.dispIncreament = this.dispIncreament.bind(this);
  }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <Display displayValue = {this.state.question}></Display>
        <div className="rowsProp">
          <Keys value={"1"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"2"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"3"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"+"} dispIncreament={this.dispIncreament}></Keys>
        </div>
        <div className="rowsProp">
          <Keys value={"4"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"4"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"4"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"-"} dispIncreament={this.dispIncreament}></Keys>
        </div>
        <div className="rowsProp">
          <Keys value={"7"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"8"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"9"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"*"} dispIncreament={this.dispIncreament}></Keys>
        </div>
        <div className="rowsProp">
          <Keys value={"C"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"0"} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"="} dispIncreament={this.dispIncreament}></Keys>
          <Keys value={"/"} dispIncreament={this.dispIncreament}></Keys>
        </div>
      </div>
    )
  }
  dispIncreament(event) {
    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.question !== '') {
          var ans = '';
          try {
            ans = eval(this.state.question);
          }
          catch (err) {
            this.setState({ question: "Math Error" });
          }
          if (ans === undefined)
            this.setState({ question: "Math Error" });
          else
          ans = ans.toString()
          console.log(ans.length)
          console.log(ans)
            if(ans.length > 10){
              ans = ans.substring(0, ans.length-(ans.length -10))
            }
            this.setState({ question: ans});
          break;
        }
      }
      case 'C': {
        this.setState({ question: ''});
        break;
      }

      case 'Delete': {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        this.setState({ question: this.state.question += value })
        break;
      }
    }
  }
}

export default App