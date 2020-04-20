import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../../Modules/mapReduxStateToProps";

class Support extends Component {
  handleClick = () => {
    this.props.history.push("/Comments");
  };

  render() {
    return (
      <div>
        <h1 className="hdr-question">How well do you feel supported?</h1>
        <form noValidate onSubmit={this.handleClick}>
          <input
            className="support-input"
            type="number"
            placeholder="Insert 1-5 Here"
            required
          ></input>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Support);
