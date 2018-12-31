import React, { Component } from "react";
import FormatTravel from "../travel/formatTravel";
import FormatBillOfLading from "../billOfLading/formatBillOfLading";
import HttpBillOfLadingItems from "./httpBillOfLadingItem";
import { formatDate } from "./../general/formatDate";

class ViewBillOfLadingItem extends Component {
  state = {
    billOfLadingItems: []
  };

  async componentDidMount() {
    const http = new HttpBillOfLadingItems();
    const { data } = await http.get();
    this.setState({ http, billOfLadingItems: data.content });
  }

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
              <th>Série</th>
              <th>Status</th>
              <th>Origem</th>
              <th>Data/hora</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {billOfLadingItems.map(billOfLadingItem => (
              <tr key={billOfLadingItem.id}>
                <td>{billOfLadingItem.serie}</td>
                <td>{billOfLadingItem.status}</td>
                <td>{billOfLadingItem.source}</td>
                <td>{formatDate(billOfLadingItem.conferenceDate)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert(billOfLadingItem.observation)}
                  >
                    Observações
                  </button>{" "}
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

export default ViewBillOfLadingItem;
