import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import BillOfLadingImport from "../import-file/billOfLadingImport";
import BillOfLadingViewer from "../views/billOfLadingViewer";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route
              path="/bill-of-lading/viewer"
              component={BillOfLadingViewer}
            />
            <Route
              path="/bill-of-lading/import"
              component={BillOfLadingImport}
            />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
