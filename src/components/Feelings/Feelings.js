import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../../Modules/mapReduxStateToProps";

class Feelings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "",
    };
  }

  handleClickToRedux = () => {
    // console.log("Working!");
    this.props.dispatch({
      type: "FEELINGS_REDUX",
      payload: this.state.feeling,
    });
    this.props.history.push("/Understanding");
  };

  saveFeeling = (event) => {
    console.log("Feeling logged!");
    const inputValue = event.target.value;
    this.setState({
      feeling: inputValue,
    });
  };

  render() {
    return (
      <div>
        <h1 className="hdr-question">How are you feeling today?</h1>
        <form>
          <input
            // onChange={this.saveFeeling}
            className="feelings-input"
            type="number"
            placeholder="Insert 1-5 Here"
            required
          ></input>
          <button onClick={this.handleClickToRedux}>Next</button>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feelings);
