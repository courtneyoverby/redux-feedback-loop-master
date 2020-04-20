import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../../Modules/mapReduxStateToProps";

class Understanding extends Component {
  handleClick = () => {
    this.props.history.push("/Support");
  };

  render() {
    return (
      <div>
        <h1 className="hdr-question">
          How well are you understanding the content?
        </h1>
        <form>
          <input
            className="understand-input"
            type="number"
            placeholder="Insert 1-5 Here"
            required
          ></input>
          <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Understanding);
