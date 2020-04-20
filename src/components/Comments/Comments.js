import React, { Component } from "react";
import { connect } from "react-redux";
import mapReduxStateToProps from "../../Modules/mapReduxStateToProps";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleClickToRedux = () => {
    this.props.dispatch({
      type: "COMMENT_REDUX",
      payload: this.state.comment,
    });
    this.props.history.push("/Review");
  };

  render() {
    return (
      <div>
        <h1 className="hdr-question">Do you have any comments to add?</h1>
        <form>
          <input
            className="comment-input"
            type="text"
            placeholder="Comments"
            onChange={this.changeComment}
          ></input>
          <button onClick={this.handleClickToRedux}>Next</button>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);
