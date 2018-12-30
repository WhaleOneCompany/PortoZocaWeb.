import React, { Component } from "react";
import FormatTravel from "../travel/format";
import HttpBillOfLading from "./http";

class BillOfLadingsView extends Component {
  state = {
    http: null,
    billOfLadings: null
  };

  componentWillMount() {
    this.state.http = new HttpBillOfLading();
    this.state.billOfLadings = this.state.http.get();
  }

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
