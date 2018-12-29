import React, { Component } from "react";
import FormatTravel from "./../data-format/formatTravel";

class MovementsView extends Component {
  state = {
    movements: [
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
    const { movements } = this.state;
    const { travel, onReturnToTravels, onConsult } = this.props;
    return (
      <main className="container">
        <FormatTravel object={travel} onClick={onReturnToTravels} />
        <table className="table">
          <thead>
            <tr>
              <th>BL</th>
              <th>Quantidade conferida/informada</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody>
            {movements.map(movement => (
              <tr key={movement._id}>
                <td>{movement.billOfLading}</td>
                <td>{`${movement.conferredQuantity}/${
                  movement.informedQuantity
                }`}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onConsult(movement)}
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

export default MovementsView;
