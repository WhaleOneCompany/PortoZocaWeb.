import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import ImportXLS from "../import-file/importXLS";
import ViewControl from "../views/ViewControl";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/movements" component={ViewControl} />
            <Route path="/import-xls" component={ImportXLS} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
