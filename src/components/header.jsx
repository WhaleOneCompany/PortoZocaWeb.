import React, { Component } from "react";
import WhaleOneLogo from "./whaleOneLogo";

class Header extends Component {
  state = {
    requestTest: [],
    isLoaded: false
  };

  render() {
    if (!this.state.isLoaded) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <React.Fragment>
          <WhaleOneLogo />
          <div>{JSON.stringify(this.state.requestTest)}</div>
        </React.Fragment>
      );
    }
  }
}

export default Header;
