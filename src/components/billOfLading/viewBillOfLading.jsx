import React, { Component } from "react";
import FormatTravel from "../travel/formatTravel";
import HttpBillOfLading from "./httpBillOfLading";

class ViewBillOfLadings extends Component {
  state = {
    http: null,
    billOfLadings: []
  };

  async componentDidMount() {
    const http = new HttpBillOfLading();
    const { data } = await http.get(this.props.travel);
    this.setState({ http, billOfLadings: data.content });
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
              <th>Cliente</th>
              <th>Qtd.Total</th>
              <th>Qtd.Conferida</th>
              <th>Qtd.Restante</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {billOfLadings.map(billOfLading => (
              <tr key={billOfLading.id}>
                <td>{billOfLading.bl}</td>
                <td>{billOfLading.customer}</td>
                <td>100</td>
                <td>80</td>
                <td>20</td>
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

export default ViewBillOfLadings;
