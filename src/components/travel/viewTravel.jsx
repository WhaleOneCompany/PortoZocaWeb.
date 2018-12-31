import React, { Component } from "react";
import HttpTravel from "./httpTravel";
import http from "./../http/http";
import { formatDate } from "./../general/formatDate";

class ViewTravel extends Component {
  state = {
    http: null,
    travels: []
  };

  async componentDidMount() {
    const http = new HttpTravel();
    const { data } = await http.get();
    this.setState({ http, travels: data.content });
  }

  render() {
    const { travels } = this.state;
    const { onConsult } = this.props;
    return (
      <main className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Viagem</th>
              <th>Navio</th>
              <th>Data/Hora</th>
              <th>Status</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {travels.map(travel => (
              <tr key={travel.id}>
                <td>{travel.travel}</td>
                <td>{travel.ship}</td>
                <td>{formatDate(travel.importationDate)}</td>
                <td>{travel.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onConsult(travel)}
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

export default ViewTravel;
