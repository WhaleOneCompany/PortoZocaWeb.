import React, { Component } from "react";
import TravelsView from "./travelsView";
import MovementsView from "./movementsView";
import ConferencesView from "./conferencesView";

class ViewControl extends Component {
  state = {
    travel: null,
    movement: null
  };

  handleReturnToTravels = () => {
    this.setState({ travel: null, movement: null });
  };

  handleReturnToMovements = () => {
    this.setState({ movement: null });
  };

  handleConsultMovements = travel => {
    this.setState({ travel });
  };

  handleConsultConferences = movement => {
    this.setState({ movement });
  };

  render() {
    const { travel, movement } = this.state;
    if (movement !== null) {
      return (
        <ConferencesView
          travel={travel}
          onReturnToTravels={this.handleReturnToTravels}
          movement={movement}
          onReturnToMovements={this.handleReturnToMovements}
        />
      );
    } else if (travel !== null) {
      return (
        <MovementsView
          travel={travel}
          onReturnToTravels={this.handleReturnToTravels}
          onConsult={this.handleConsultConferences}
        />
      );
    } else {
      return <TravelsView onConsult={this.handleConsultMovements} />;
    }
  }
}

export default ViewControl;
