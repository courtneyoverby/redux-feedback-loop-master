import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

// import Feelings from "../Feelings/Feelings.js";
// import Understanding from "../Understanding/Understanding.js";
// import Comments from "../Comments/Comments.js";
// import Support from "../Support/Support.js";

class App extends Component {
  componentDidMount() {
    this.refreshFeedback();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <div>
          <div className="container">
            {/* <Router>
              <Route exact path="/" component={Feelings} />
              <Route path="/Understanding" component={Understanding} />
              <Route path="/Comments" component={Comments} />
              <Route path="/Support" component={Support} />
            </Router>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
