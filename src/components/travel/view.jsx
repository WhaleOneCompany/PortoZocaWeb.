import React, { Component } from "react";
// import axios from "axios";

class TravelView extends Component {
  state = {
    travels: [
      {
        _id: 1,
        travel: "ATLÂNTICO SUL",
        ship: "ALBATROZ",
        custommer: "HYUNDAI",
        time: "28/12/2018 18:30:15",
        status: "Em conferência"
      },
      {
        _id: 2,
        travel: "ATLÂNTICO SUL 13",
        ship: "ALBATROZ ZOZ",
        custommer: "HYUNDAI",
        time: "28/12/2018 18:30:15",
        status: "Conferido"
      }
    ]
  };
  render() {
    const { travels } = this.state;
    const { onConsult } = this.props;

    // axios
    //   .get("http://localhost:8090/v1/sample")
    //   .then(response => console.log(response));

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
