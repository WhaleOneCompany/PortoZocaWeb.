import React from "react";

const FormatBillOfLading = props => {
  const { object, onClick } = props;
  const { bl, customer } = object;
  return (
    <div onClick={onClick}>
      BL: {bl} Cliente: {customer} Quantidade: 80/100 (Falta 20)
    </div>
  );
};

export default FormatBillOfLading;
