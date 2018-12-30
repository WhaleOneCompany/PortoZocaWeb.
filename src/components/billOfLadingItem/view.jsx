import React, { Component } from "react";
import FormatTravel from "../travel/format";
import FormatBillOfLading from "../billOfLading/format";

class billOfLadingItemsView extends Component {
  state = {
    billOfLadingItems: [
      {
        _id: 1,
        dimension: "150 x 150",
        time: "28/12/2018 18:30:15"
      },
      {
        _id: 2,
        dimension: "200 x 150",
        time: "28/12/2018 18:30:15"
      }
    ]
  };
  render() {
    const { billOfLadingItems } = this.state;
    const {
      travel,
      onReturnToTravel,
      billOfLading,
      onReturnToBillOfLading
    } = this.props;
    return (
      <main className="container">
        <FormatTravel object={travel} onClick={onReturnToTravel} />
        <FormatBillOfLading
          object={billOfLading}
          onClick={onReturnToBillOfLading}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Data/hora de conferência</th>
              <th>Dimensão</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {billOfLadingItems.map(billOfLadingItem => (
              <tr key={billOfLadingItem._id}>
                <td>{billOfLadingItem.time}</td>
                <td>{billOfLadingItem.dimension}</td>
                <td>
                  <button className="btn btn-primary">Observações</button>{" "}
                  <button className="btn btn-primary">Imagens</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default billOfLadingItemsView;
