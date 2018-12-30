import React, { Component } from "react";
import FormatTravel from "../travel/format";

class BillOfLadingsView extends Component {
  state = {
    billOfLadings: [
      {
        _id: 1,
        billOfLading: "BLXXXXX001",
        informedQuantity: 15,
        conferredQuantity: 10
      },
      {
        _id: 2,
        billOfLading: "BLXXXXX002",
        informedQuantity: 20,
        conferredQuantity: 13
      },
      {
        _id: 3,
        billOfLading: "BLXXXXX003",
        informedQuantity: 30,
        conferredQuantity: 30
      }
    ]
  };
  render() {
    const { billOfLadings } = this.state;
    const { travel, onReturnToTravel, onConsult } = this.props;
    return (
      <main className="container">
        <FormatTravel object={travel} onClick={onReturnToTravel} />
        <table className="table">
          <thead>
            <tr>
              <th>BL</th>
              <th>Quantidade conferida/informada</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {billOfLadings.map(billOfLading => (
              <tr key={billOfLading._id}>
                <td>{billOfLading.billOfLading}</td>
                <td>{`${billOfLading.conferredQuantity}/${
                  billOfLading.informedQuantity
                }`}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onConsult(billOfLading)}
                  >
                    Consultar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default BillOfLadingsView;
