import React, { Component } from "react";
import ViewTravel from "../travel/viewTravel";
import ViewBillOfLading from "../billOfLading/viewBillOfLading";
import ViewBillOfLadingItem from "../billOfLadingItem/viewBillOfLadingItem";

class BillOfLadingViewer extends Component {
  state = {
    travel: null,
    billOfLading: null
  };

  handleReturnToTravelView = () => {
    this.setState({ travel: null, billOfLading: null });
  };

  handleReturnToBillOfLadingView = () => {
    this.setState({ billOfLading: null });
  };

  handleConsultBillOfLading = travel => {
    this.setState({ travel });
  };

  handleConsultBillOfLadingItem = billOfLading => {
    this.setState({ billOfLading });
  };

  render() {
    const { travel, billOfLading } = this.state;
    if (billOfLading !== null) {
      return (
        <ViewBillOfLadingItem
          travel={travel}
          onReturnToTravel={this.handleReturnToTravelView}
          billOfLading={billOfLading}
          onReturnToBillOfLading={this.handleReturnToBillOfLadingView}
        />
      );
    } else if (travel !== null) {
      return (
        <ViewBillOfLading
          travel={travel}
          onReturnToTravel={this.handleReturnToTravelView}
          onConsult={this.handleConsultBillOfLadingItem}
        />
      );
    } else {
      return <ViewTravel onConsult={this.handleConsultBillOfLading} />;
    }
  }
}

export default BillOfLadingViewer;
