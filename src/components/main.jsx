import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import ImportXLS from "./importXLS";
import ConsultMoves from "./consultMoves";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/consult-moves" component={ConsultMoves} />
            <Route path="/import-xls" component={ImportXLS} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
