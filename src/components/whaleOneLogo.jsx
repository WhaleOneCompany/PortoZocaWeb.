import React, { Component } from "react";

class WhileOneLogo extends Component {
  state = {
    src: "https://picsum.photos/300/150"
  };
  render() {
    return <img src={this.state.src} />;
  }
}

export default WhileOneLogo;
