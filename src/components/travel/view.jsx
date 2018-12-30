import React, { Component } from "react";
import HttpTravel from "./http";

class TravelView extends Component {
  state = {
    travels: null
  };

  componentWillMount() {
    this.state.http = new HttpTravel();
    this.state.travels = this.state.http.get();
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
              <th>Cliente</th>
              <th>Data/Hora</th>
              <th>Status</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {travels.map(travel => (
              <tr key={travel._id}>
                <td>{travel.travel}</td>
                <td>{travel.ship}</td>
                <td>{travel.custommer}</td>
                <td>{travel.time}</td>
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

export default TravelView;
