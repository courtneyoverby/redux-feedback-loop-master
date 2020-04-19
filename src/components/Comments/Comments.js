import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../../Modules/mapReduxStateToProps";

class Comments extends Component {
  render() {
    return (
      <div>
        <h1 className="hdr-question">Do you have any comments to add?</h1>
        <input
          className="comment-input"
          type="text"
          placeholder="Comments"
        ></input>
        <button>Submit</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);
