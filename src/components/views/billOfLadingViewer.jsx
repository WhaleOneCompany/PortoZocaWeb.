import React, { Component } from "react";
import TravelView from "../travel/view";
import BillOfLadingView from "../billOfLading/view";
import BillOfLadingItemView from "../billOfLadingItem/view";

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
        <BillOfLadingItemView
          travel={travel}
          onReturnToTravel={this.handleReturnToTravelView}
          billOfLading={billOfLading}
          onReturnToBillOfLading={this.handleReturnToBillOfLadingView}
        />
      );
    } else if (travel !== null) {
      return (
        <BillOfLadingView
          travel={travel}
          onReturnToTravel={this.handleReturnToTravelView}
          onConsult={this.handleConsultBillOfLadingItem}
        />
      );
    } else {
      return <TravelView onConsult={this.handleConsultBillOfLading} />;
    }
  }
}

export default BillOfLadingViewer;
