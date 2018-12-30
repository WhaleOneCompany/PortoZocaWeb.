import React, { Component } from "react";
import axios from "axios";

class BillOfLadingImport extends Component {
  state = {
    form: {
      ship: "",
      travel: "",
      xls: ""
    }
  };

  handleChange = (event, field) => {
    let { form } = this.state;
    form[field] = event.target.value;
    this.setState({ form });
  };

  handleSubmit = () => {
    axios
      .get("http://localhost:8090/v1/import-xls")
      .then(response => console.log(response));
  };

  createInput({ name, type, accept }) {
    const { form } = this.state;
    const fieldStyle = {
      marginBottom: "8px",
      width: "100%"
    };
    switch (type) {
      case "file":
        return (
          <input
            type={type}
            name={name}
            style={fieldStyle}
            accept={accept}
            filename={form[name]}
            onChange={event => this.handleChange(event, name)}
          />
        );
      default:
        return (
          <input
            type={type}
            name={name}
            style={fieldStyle}
            accept={accept}
            value={form[name]}
            onChange={event => this.handleChange(event, name)}
          />
        );
    }
  }

  render() {
    const formStyle = {
      textAlign: "right",
      width: "50%"
    };
    const labelStyle = {};
    const fields = [
      {
        label: "Navio",
        name: "ship",
        type: "text"
      },
      {
        label: "Viagem",
        name: "travel",
        type: "text"
      },
      {
        label: "XLS",
        name: "xls",
        type: "file",
        accept: ".xls,.xlsx"
      }
    ];
    return (
      <div className="pz-center-screen">
        <div style={formStyle}>
          {fields.map(field => (
            <div className="row" key={field.name}>
              <div className="col-3 " style={labelStyle}>
                {field.label}
              </div>
              <div className="col">{this.createInput(field)}</div>
            </div>
          ))}
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default BillOfLadingImport;
