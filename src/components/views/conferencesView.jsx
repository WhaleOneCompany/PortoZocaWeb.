import React, { Component } from "react";
import FormatMovement from "../data-format/formatMovement";
import FormatTravel from "./../data-format/formatTravel";

class ConferencesView extends Component {
  state = {
    conferences: [
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
    const { conferences } = this.state;
    const {
      travel,
      onReturnToTravels,
      movement,
      onReturnToMovements
    } = this.props;
    return (
      <main className="container">
        <FormatTravel object={travel} onClick={onReturnToTravels} />
        <FormatMovement object={movement} onClick={onReturnToMovements} />
        <table className="table">
          <thead>
            <tr>
              <th>Data/hora de conferência</th>
              <th>Dimensão</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {conferences.map(conference => (
              <tr key={conference._id}>
                <td>{conference.time}</td>
                <td>{conference.dimension}</td>
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

export default ConferencesView;
